let clickArea = document.getElementById('cat-image');
let clickArea2 = document.getElementById('cat-image2');
let counter = 0;

const catNames = ['Mietze', 'Chewie', 'Schmurtel', 'Mini', 'Nera'];
let ul = document.getElementById('catNamesList');
let li = "";
let theCat = "";

// Version 3 with a list of at least 5 cats, listed by name + an area to display the selected cat
catNames.forEach(function(cat) {
    console.log(cat);

    li = document.createElement("LI");                 // Create a <li> node
    theCat = `${cat}`;
    li.appendChild(document.createTextNode(theCat));
    ul.appendChild(li);
    //let textnode = document.createTextNode = `${cat}`;         // Create a text node
    //node.appendChild(textnode);                              // Append the text to <li>
    //cats.appendChild(node);
})

/*
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
*/