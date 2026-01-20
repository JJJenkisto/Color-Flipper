const body = document.getElementsByTagName("body")[0];
const colorBox = document.getElementById("colorBox")
function setColor(name) {
    body.style.backgroundColor = name;
    colorBox.value = name;
}

function randColor() {
    //Randomly generate an interger from 0 - 255
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    //combine all the generated integers from each of rgb
    const color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
    
    //put the value of the color in the <input>
    colorBox.value = color;
    
}

setColor("#ffffff");