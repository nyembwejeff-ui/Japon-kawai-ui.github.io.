function createPetal() {
    const container = document.getElementById('sakura-container');
    if(!container) return;
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    const size = (Math.random() * 10 + 5) + 'px';
    petal.style.width = size;
    petal.style.height = size;
    petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(petal);
    setTimeout(() => { petal.remove(); }, 6000);
}
setInterval(createPetal, 300);
