const SQUARE_COUNT=15;
const TIMER=16.6;
const SPEED = 5;
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
        square.className ="square";
        box.appendChild(square);
    }
    
    Array.from(box.children).forEach((element)=>{
        let dx = SPEED*Math.random()*2-1; // -1 to 1 random
        let dy = SPEED*Math.random()*2-1;
        
        let x = parseInt(element.style.left || 225);
        let y = parseInt(element.style.top || 175);
        setInterval(()=>{
            x+=dx;
            y+=dy;

            element.style.left = x+"px";
            element.style.top = y+"px";
        },TIMER)
    
    });
       

});