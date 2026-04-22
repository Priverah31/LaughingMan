const SQUARE_COUNT=3;

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector("#square").addEventListener("click", ()=>{
        alert("You clickered me");
    })
    let box= document.querySelector("#box");

    for(let i =0; i<SQUARE_COUNT;i++){
        //make the element,but not on the page
        let square = document.createElement('img');
        //set attributes/properties  of the element
        square.src="laughing_man.jpg";
        square.alt="Catch the laughing man!";
        square.class="square";
        box.appendChild(square);
    }
});