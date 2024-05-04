let images = ['img/bannerpet1.jpeg', 'img/bannerpet2.jpeg', 'img/bannerpet3.jpeg', 'img/bannerpet4.jpeg'];
let index = 0;
let time = 3000;

function slideShow() {
    document.getElementById('imgBanner').src = images[index];
    index++;

    if (index == images.length) {
        index = 0;
    }
    setTimeout(slideShow, time);
}

slideShow();

