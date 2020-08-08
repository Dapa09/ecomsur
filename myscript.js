let container = document.getElementById('container-fichas');
let ficha = document.getElementById('ficha');
let img = document.getElementById('img-producto');


let arr = ["Arm Chair", "Desk L", "Flowers", "Geometric Lamp", "Silla Low Back", "Silver Mirror"];
let forArr = arr.length; 



function fichaProducto(){
    for(var i = 0; i < forArr; i++){
        var newCard = document.createElement("div");
        newCard.className = "ficha"
        container.append(newCard);  
    } 
}

fichaProducto();