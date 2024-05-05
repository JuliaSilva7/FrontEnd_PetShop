let imagens = ['assets/img/bannerpet1.jpeg', 'assets/img/bannerpet2.jpeg', 'assets/img/bannerpet3.jpeg', 'assets/img/bannerpet4.jpeg'];
let index = 0;
let time =3000;

function slideShow() {
    document.getElementById('imgBanner').src = imagens[index];
    index++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}

slideShow();

