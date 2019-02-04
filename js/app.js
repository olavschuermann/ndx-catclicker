let clickArea = document.getElementById('cat-image');
let clickArea2 = document.getElementById('cat-image2');
let counter = 0;

const catNames = ['Mietze', 'Chewie'];

const catName1 = document.getElementById('cat1').innerHTML = `This is: ${catNames[0]}`;
const catName2 = document.getElementById('cat2').innerHTML = `This is: ${catNames[1]}`;

clickArea.addEventListener('click', function() {
    counter += 1;
    let showClick = document.getElementById('clicks');
    showClick.innerHTML = `Your clicks: ${counter}`;
})

clickArea2.addEventListener('click', function() {
    counter += 1;
    let showClick = document.getElementById('clicks');
    showClick.innerHTML = `Your clicks: ${counter}`;
})