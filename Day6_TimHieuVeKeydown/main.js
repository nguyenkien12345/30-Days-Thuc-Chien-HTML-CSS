var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector('.card.location p:last-child');
var eWhich = document.querySelector('.card.which p:last-child');
var eCode = document.querySelector('.card.code p:last-child');
var alert = document.querySelector('.alert');
var box = document.querySelector('.box');
var result = document.querySelector('.result');

// Khi click keydown (Bất kỳ phím nào cũng được)
document.addEventListener('keydown', e => {
    result.innerText = e.key;
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;

    alert.classList.add('hide');
    box.classList.remove('hide');
})
