const SQUARE_COUNT=15;
const TIMER=16.6;
const SPEED = 10;
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
        const parent = element.parentElement;
        const MaxX = parent.clientWidth - element.clientWidth;
        const MaxY = parent.clientHeight - element.clientHeight;

        let dx = SPEED*(Math.random()*2-1); // -1 to 1 random
        let dy = SPEED*(Math.random()*2-1);
        
        let x = parseInt(element.style.left || 225);
        let y = parseInt(element.style.top || 175);
        setInterval(()=>{
            let collide = false;

            if(x <= 0 || x >= MaxX){
                dx *= -1;
                collide=true;
            }
            if(y <=0 || y >= MaxY){
                dy*=-1;
                collide = true;
            }
            if (collide){
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            box.style.borderColor = `rgb(${r}, ${g}, ${b})`;
            }
            x+=dx;
            y+=dy;

            element.style.left = x+"px";
            element.style.top = y+"px";
        },TIMER)
    
    });
    
    
       
});