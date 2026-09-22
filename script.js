// تاريخ الفرح المحدد (29 أكتوبر 2026)
const weddingDate = new Date("October 29, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = weddingDate - now;

    if (gap < 0) return;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // حساب الأيام، الساعات، الدقائق، الثواني
    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    // ربط القيم بالعناصر في الـ HTML مع إضافة صفر لو الرقم أقل من 10
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = days < 10 ? "0" + days : days;
    if (hoursEl) hoursEl.innerText = hours < 10 ? "0" + hours : hours;
    if (minutesEl) minutesEl.innerText = minutes < 10 ? "0" + minutes : minutes;
    if (secondsEl) secondsEl.innerText = seconds < 10 ? "0" + seconds : seconds;
}

// تشغيل الـ Countdown وتحديثه كل ثانية
setInterval(updateCountdown, 1000);
updateCountdown();