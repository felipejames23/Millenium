let navbar = document.querySelector(".navbar");

document.querySelector("#menu-bar").onclick = () =>{
  navbar.classList.toggle('active');

}
window.onscroll = () =>{
  navbar.classList.remove('active');
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  