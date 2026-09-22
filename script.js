// Set the date we're counting down to: October 29, 2026, 18:00:00 (6 PM)
const weddingDate = new Date("October 29, 2026 18:00:00").getTime();

const countdownInterval = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<div style='grid-column: span 4; font-size: 1.2rem; font-family: Cormorant Garamond, serif; color: #c5a059;'>The Big Day Has Arrived!</div>";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
}, 1000);function openEnvelope() {
    const overlay = document.getElementById('envelopeOverlay');
    const video = document.getElementById('envelopeVideo');
    const song = document.getElementById('weddingSong');
    
    // Tsh3el al-sawt
    song.play().catch(error => {
        console.log("Audio play error:", error);
    });
    
    // Tsh3el video al-envelope
    video.play().catch(error => {
        console.log("Video play error:", error);
    });
    
    // I5fa2 el-prompt al-abyad elly fl nos awl ma nndos
    document.querySelector('.envelope-center-prompt').style.display = 'none';
    
    // Awl ma video al-envelope y5ls tmamman, el-overlay hy5tfa w tftoh el-invitation
    video.onended = function() {
        overlay.classList.add('hide-envelope');
    };
}