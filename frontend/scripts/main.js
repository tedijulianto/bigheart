// $("#video").on("hide.bs.modal", function (event) {
//     var myPlayer = videojs("my-video");
//     myPlayer.pause();
// });
// $("#videoMobile").on("hide.bs.modal", function (event) {
//     var myPlayer = videojs("my-video-mobile");
//     myPlayer.pause();
// });

// function openNav() {
//     document.getElementById("myNav").style.width = "100%";
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//     document.getElementById("myNav").style.width = "0%";
// }

const navbar = document.querySelector("#navbar");
window.onscroll = function () {
  var top = window.scrollY;
  if (top > 50) {
    navbar.classList.add("muncul");
  } else {
    navbar.classList.remove("muncul");
  }
};

// const loc = document.querySelectorAll(".located");

// loc.forEach((located) => {
//   located.addEventListener("click", () => {
//     located.classList.toggle("active");
//   });
// });
