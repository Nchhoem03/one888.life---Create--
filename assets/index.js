const   One = document.querySelector.bind(document),
        Two = document.querySelectorAll.bind(document);

const   titleContent    = Two('.title_item'),
        boxContent      = Two('.box_item');

titleContent.forEach((title, index) => {
    const boxed = boxContent[index]
    title.onclick = function () {
        One('.title_item.active').classList.remove('active')
        One('.box_item.active').classList.remove('active')
        this.classList.add('active')
        boxed.classList.add('active')
    }
})

window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.top = "0";
    } else {
        document.getElementById("header").style.top = "-15%";
    }
}

var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: true,
    interval: 1000,
    grabCursor: true,
    pauseOnMouseEnter: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


// menu
let Nav = document.getElementById("nav");
let OpenNav = function(){
  Nav.style.left = "0%";
}
let CloseNav = function(){
  Nav.style.left = "-100%";
}