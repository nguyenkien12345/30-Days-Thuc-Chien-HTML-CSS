var upload = document.querySelector('#uploadImage');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('change', e => {
    // Get file
    var file = upload.files[0];

    if (!file) {
        error.innerText = "Không tìm thấy file !"
        return;
    }

    if (!(file.name.endsWith('.jpg') || file.name.endsWith('.png') || file.name.endsWith('.jpeg'))) {
        error.innerText = "Chỉ chấp nhận các file png|jpg|jpeg !"
        return;
    }
    else {
        error.innerText = ''
    }

    // 1024 lần thứ nhất là KB, 1024 lần thứ 2 là MB
    if (file.size / (1024 * 1024) > 5) {
        error.innerText = "Dung lượng tối đa cho phép là 5MB !"
        return;
    }
    else {
        error.innerText = ''
    }

    // Create Img
    var img = document.createElement('img');

    // Cách 1: Nhanh gọn lẹ
    // img.src = URL.createObjectURL(file);

    // Cách 2: Chuyển file ảnh về base64
    // Tạo ra 1 file reader
    var fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    // Khi đã load xong
    fileReader.onloadend = function (e) {
        console.log("Load Image Success", e);
        img.src = e.target.result;
    };

    preview.appendChild(img);
})