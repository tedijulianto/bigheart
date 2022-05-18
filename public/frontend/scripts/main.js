/* ============================ Navbar  ============================ */
const navbar = document.querySelector("#navbar");
window.onscroll = function () {
    var top = window.scrollY;
    if (top > 0) {
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

/* ============================ Mission Chart  ============================ */
const missionChart = new Chart(document.getElementById("chartMission"), {
    type: "doughnut",
    data: {
        labels: [
            "Goes to charity",
            "To ensure that the charities run smoothly",
        ],
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

// let box1 = document.querySelector(".box1");
// let box2 = document.querySelector(".box2");

// let bar1 = new ProgressBar.Circle(box1, {
//     color: "#3a3a3a",

//     // This has to be the same size as the maximum width to
//     // prevent clipping
//     strokeWidth: 5,
//     trailWidth: 5,
//     easing: "easeInOut",
//     duration: 1400,
//     text: {
//         autoStyleContainer: false,
//     },
//     from: { color: "#AC1F40", width: 5 },
//     to: { color: "#AC1F40", width: 5 },
//     // Set default step function for all animate calls
//     step: function (state, circle) {
//         circle.path.setAttribute("stroke", state.color);
//         circle.path.setAttribute("stroke-width", state.width);

//         var value = Math.round(circle.value() * 100);
//         if (value === 0) {
//             circle.setText("");
//         } else {
//             circle.setText(value + "%");
//         }
//     },
// });
// bar1.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
// bar1.text.style.fontSize = "2rem";
// bar1.text.style.color = "#AC1F40";

// let bar2 = new ProgressBar.Circle(box2, {
//     color: "#f4ced6",
//     // This has to be the same size as the maximum width to
//     // prevent clipping
//     strokeWidth: 5,
//     trailWidth: 5,
//     easing: "easeInOut",
//     duration: 1400,
//     text: {
//         autoStyleContainer: false,
//     },
//     from: { color: "#AC1F40", width: 5 },
//     to: { color: "#AC1F40", width: 5 },
//     // Set default step function for all animate calls
//     step: function (state, circle) {
//         circle.path.setAttribute("stroke", state.color);
//         circle.path.setAttribute("stroke-width", state.width);

//         var value = Math.round(circle.value() * 100);
//         if (value === 0) {
//             circle.setText("");
//         } else {
//             circle.setText(value + "%");
//         }
//     },
// });
// bar2.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
// bar2.text.style.fontSize = "2rem";
// bar2.text.style.color = "#AC1F40";

/* ============================ AOS  ============================ */
AOS.init({
    once: true,
});

/* ============================ Community  ============================ */
// VanillaTilt.init(document.querySelectorAll(".card-community"), {
//     max: 25,
//     speed: 400,
// });

/* ============================ Charity Chart  ============================ */
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
        maintainAspectRatio: false,
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
        maintainAspectRatio: false,
    },
});

/* ============================ Address  ============================ */
$(".address-title").click(function () {
    $(".located").removeClass("active");
    $(this).parent().addClass("active");
});

// const loc = document.querySelectorAll(".located");

// loc.forEach((located) => {
//   located.addEventListener("click", () => {
//     located.classList.toggle("active");
//   });
// });
