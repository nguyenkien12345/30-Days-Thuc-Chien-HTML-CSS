var listCounter = document.querySelectorAll('.counter');

function count(element) {
    // Truy cập đối tượng có class là number
    var numberEl = element.querySelector('.number');
    // Lấy ra nội dung của đối tượng đó
    var to = parseInt(numberEl.innerText);
    var count = 0;
    //  số lần quay số 
    var time = 144;
    // Bước nhảy, Số lần nhảy
    var step = to / time;

    let counting = setInterval(() => {
        count += step;
        if (count > to) {
            clearInterval(counting);
            numberEl.innerText = to;
        }
        else {
            numberEl.innerText = Math.round(count);
        }
    }, 1)
}

listCounter.forEach(item => {
    count(item);
})