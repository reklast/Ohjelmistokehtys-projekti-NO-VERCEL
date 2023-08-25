const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const currentMonthElement = document.getElementById("currentMonth");
const daysContainer = document.querySelector(".days");

let currentDate = new Date();

function renderCalendar() {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Vuosi ja kuukausi
    currentMonthElement.textContent = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
    }).format(currentDate);

    // poistaa edellisen kuukauden päivät
    daysContainer.innerHTML = "";

    // lisää päivät
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);

    for (let date = new Date(firstDay); date <= lastDay; date.setDate(date.getDate() + 1)) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = date.getDate();
        daysContainer.appendChild(dayElement);
    }
}

prevBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextBtn.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
