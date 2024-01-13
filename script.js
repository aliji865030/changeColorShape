let Outer_circle = document.getElementById("outerCircle");
let inner_Shape = document.querySelector("#innerShape");
let btnOne = document.querySelector("#Color_button");
let btnTwo = document.querySelector("#Shape_button");

// function randomColor() {
    
//     let newColor = "#";
//     let colorCode = "0123456789abcdef";

//     for(let i = 0; i < 6; i++) {
//         let getColor = Math.floor(Math.random() * colorCode.length);
//         newColor += colorCode[getColor];
//     }

//     // console.log(newColor);

//     return newColor;
// }


btnOne.addEventListener("click", function() {
    Outer_circle.style.backgroundColor = generateRandomColor();
    inner_Shape.style.backgroundColor = generateRandomColor();
});

function generateRandomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    console.log(`rgb(${red}, ${green}, ${blue})`); 
    return `rgb(${red}, ${green}, ${blue})`;

}

btnTwo.addEventListener("click", changeShape);
 
let shapes = ["hexagon", "circle", "square", "rectangle", "star", "triangle", "cross", "close"];

// let shapes = ["diamond", "circle", "rectangle", "star-five", "cut-diamond", "hexagon", "heart", "infinity"];
    
function changeShape() {
    let idx = Math.floor(Math.random() * shapes.length);
    inner_Shape.setAttribute("class", shapes[idx]);
};

// Btn2.addEventListener("click", () => {
//     let arr = [
//         "diamond", 
//         "circle",
//         "rectangle", 
//         "star-five",
//         "cut-diamond", 
//         "hexagon", 
//         "heart", 
//         "infinity"
//     ];
//    
//  let randomIndex = Math.floor(Math.random() * arr.length);
//     inner_Shape.classList.remove(...arr);
//     inner_Shape.classList.add(arr[randomIndex]);
//     inner_Shape.classList.add(arr[randomIndex]).style.transform = "rotate(360deg)";
//   });











 


 