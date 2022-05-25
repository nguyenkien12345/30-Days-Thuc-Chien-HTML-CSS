var boxes = document.querySelectorAll('.box');
var targets = document.querySelectorAll('.target');

// Lấy ra cái target đang được kéo 
var currentTarget = null;

targets.forEach(target => {
    //  Bắt đầu kéo (Thêm class dragging vào)
    target.addEventListener('dragstart', function (e) {
        this.classList.add('dragging');
        // Cập nhật đối tượng mà ta đang kéo
        currentTarget = this
    })
    // Kéo xong (Xóa class dragging đi)
    target.addEventListener('dragend', function (e) {
        this.classList.remove('dragging');
    })
})

boxes.forEach(box => {
    // Sự kiện kéo
    box.addEventListener('dragover', function (e) {
        e.preventDefault();
    })
    // Sự kiện thả
    box.addEventListener('drop', function (e) {
        // Nếu mà ô box đó chưa chứa thẻ target nào thì cho phép drop
        if (!box.querySelector('.target')) {
            // appendChild => Những phần tử này chỉ có 1 thôi nên appendChild nó là đổi vị trí, thêm vào thằng mới thì thằng cũ tự mất đi
            this.appendChild(currentTarget);
        }
    })
})

