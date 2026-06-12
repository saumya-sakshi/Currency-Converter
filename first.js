
let button = document.createElement("button");
button.innerText = "Change mode";
button.style.backgroundColor = "red";
button.style.color = "white";
document.body.prepend(button);

// button.onclick=(E)=>{
//     alert("button was clicked");
//     console.log("button was clicked" + E);
//     Console.log("button was clicked" + E.target);
//     console.log("button was clicked" + E.type);
// }
ISMode = "Light";

button.addEventListener("click", (E) => {
   if(ISMode==="Light"){
    ISMode = "Dark";
    document.body.style.backgroundColor = "black";
    button.innerText = "Change to white mode";
   }else {
    ISMode = "Light";
    document.body.style.backgroundColor = "white";
    button.innerText = " Change to Dark mode";
    
   }
    });

let p = document.querySelector("p");
p.classList.add("myNewClass");