function showStory(year, text) {
    const box = document.getElementById('info-box');
    box.style.display = 'block';
    box.innerHTML = `<span style="color:#900">[${year}]</span><br>${text}`;
    
    // Petit effet de vibration
    box.style.transform = "translateX(5px)";
    setTimeout(() => box.style.transform = "translateX(0)", 100);
}
