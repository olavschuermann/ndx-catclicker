let counter = 0;

const catNames = [
    ['Mietze', 'img/cat01.jpg'], 
    ['Chewie', 'img/cat02.jpg'], 
    ['Schmurtel', 'img/cat03.jpg'], 
    ['Mini', 'img/cat04.jpg'], 
    ['Nera', 'img/cat05.jpg'], 
];

// Sort array (0 = cat name) by name
catNames.sort(function(a, b){
    if(a[0] < b[0]) { return -1; }
    if(a[0] > b[0]) { return 1; }
    return 0;
})

console.log(catNames);

// Version 3 with a list of at least 5 cats, listed by name + an area to display the selected cat
// List the cats by name in an ul-list, left side
catNames.forEach(function(cat) {
    let ul = document.getElementById('catNamesList');
    // console.log(cat);

    let li = document.createElement("LI");                 // Create a <li> node
    let theCat = `${cat[0]}`;
    li.appendChild(document.createTextNode(theCat));
    ul.appendChild(li);

    li.addEventListener('click', function() {
        console.log('Clicked!');
        let clickedCatName = document.getElementById('catListName');
        clickedCatName.innerHTML = `${cat[0]}`;
        // console.log(clickedCat);

        let clickedCatImage = document.getElementById('catListImage');
        clickedCatImage.innerHTML = `<img src="${cat[1]}">`;

        // Setting counter +1 for each click
        counter += 1;
        let showClick = document.getElementById('clicks');
        showClick.innerHTML = `Your clicks: ${counter}`;

    })
})