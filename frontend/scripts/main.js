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

$(document).ready(function () {
  $(".navbar-nav").on("click", "a", function () {
    $(".navbar-nav a.active").removeClass("active");
    $(this).addClass("active");
  });
});

const missionChart = new Chart(document.getElementById("chartMission"), {
  type: "doughnut",
  data: {
    labels: ["Goes to charity", "To ensure that the charities run smoothly"],
    datasets: [
      {
        label: "Our Mission",
        data: [90, 10],
        backgroundColor: ["#ac1f40", "#474747"],
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      labels: {
        fontColor: "#fff",
        fontSize: 12,
      },
      legend: {
        position: "top",
      },
    },
  },
});

AOS.init({
  once: true,
});

const chart1 = new Chart(document.getElementById("chart1"), {
  type: "line",
  data: {
    labels: ["SD", "SMP", "SMA", "SMK"],
    datasets: [
      {
        label: "Student",
        data: [59443, 38464, 26864, 32395],
        backgroundColor: ["rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "In the academic year 2019/2020, there are 157.000 dropouts.",
        font: {
          size: 18,
        },
      },

      subtitle: {
        display: true,
        text: "source: Ministry of Cultural Education 2019/2020",
      },
    },
  },
});

const chart2 = new Chart(document.getElementById("chart2"), {
  type: "line",
  data: {
    labels: ["SD", "SMP", "SMA", "SMK"],
    datasets: [
      {
        label: "Student",
        data: [14430, 7417, 4780, 5620],
        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
        borderColor: ["rgba(255, 159, 64, 1)"],
      },
    ],
  },
  options: {
    animation: true,
    interaction: {
      intersect: false,
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "In the academic year 2020/2021, there are 32.127 dropouts.",
        font: {
          size: 18,
        },
      },
      subtitle: {
        display: true,
        text: "source: https://statistik.data.kemdikbud.go.id/",
      },
    },
  },
});

// const loc = document.querySelectorAll(".located");

// loc.forEach((located) => {
//   located.addEventListener("click", () => {
//     located.classList.toggle("active");
//   });
// });
