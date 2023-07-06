// Javascript
const container = document.querySelector('.container');
const generateBtn = document.querySelector('.generate-btn');
const qrInput = document.querySelector('.qr-input');
const qrImg = document.querySelector('.qr-image');

generateBtn.addEventListener('click', () => {
    if (qrInput.value.length > 0) {
        container.classList.add('active');
        //qrImg.append(src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=  ${qrInput.value}`);
        console.log(qrImg);
        qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=  ${qrInput.value}`;
    }
});

