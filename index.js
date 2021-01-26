main.remove()
    
// let element = document.createElement('h1')
// document.body.appendChild(element) 

// let newHeader = document.querySelector("h1#victory");
// element.innerHTML = 'victory' 
// Write your code here!


let newHeader = document.createElement("h1");
newHeader.id = "victory" //setting the id
newHeader.innerHTML = "Alicia is the champion!"; //updates the string
//newHeader.className = "victory"; (still passes?)