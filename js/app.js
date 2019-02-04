let clickArea = document.getElementById('cat-image');
let counter = 0;

clickArea.addEventListener('click', function() {
    counter += 1;
    let showClick = document.getElementById('clicks');
    showClick.innerHTML = `Your clicks: ${counter}`;
})