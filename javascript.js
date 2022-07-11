let userHeight=16;
let userWidth=16;

const container = document.querySelector('.container');
const gridBtn = document.querySelector('.grid-dimensions');
const rainbowButton = document.querySelector('.rainbow');

function makeColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
}

//Creates a basic grid
function createGrid(){
     //Creates divs using a for loop
    for(x=0;x<(userWidth);x++){
        for(y=0;y<(userHeight);y++){
            //Divs created in memory and appended at the end of the for loop
            const divs = document.createElement('div');
            divs.style.cssText = 'background-color: white;';
            
            divs.style.height = `${700/userHeight}px`;
            divs.style.width = `${700/userWidth}px`;

            // *Hover effect*
            //Mouse enter
             divs.addEventListener("mouseenter", (e) =>{
                 e.target.style.backgroundColor = "black";
        
                setTimeout(() => {
                    e.target.style.backgroundColor="white";
                }, 500);
            })
             //Mouse over
            divs.addEventListener("mouseover", (e)=> {
                e.target.style.backgroundColor = "black";
        
                setTimeout(() => {
                    e.target.style.backgroundColor = "white";
                }, 500);
            });

            //Add divs to container
            container.appendChild(divs);
        }
    
     }
}


//Creates a grid where the square divs have random hex values
function createRainbowGrid(){
   for(x=0;x<(userWidth);x++){
       for(y=0;y<(userHeight);y++){

            const divs = document.createElement('div');
            divs.style.cssText = 'background-color: white;';
           
            divs.style.height = `${700/userHeight}px`;
            divs.style.width = `${700/userWidth}px`;

            divs.addEventListener("mouseenter", (e) =>{
                e.target.style.backgroundColor = makeColor();
       
               setTimeout(() => {
                   e.target.style.backgroundColor="white";
               }, 500);
            })

            divs.addEventListener("mouseover", (e)=> {
               e.target.style.backgroundColor = makeColor();
       
               setTimeout(() => {
                   e.target.style.backgroundColor = "white";
               }, 500);
            });

           container.appendChild(divs);
       }
   
    }
}

//initialize grid to 16x16
createGrid();

//Create new grid
gridBtn.addEventListener('click', () =>{
    //Remove old grid elements
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    //Prompt user
    do{
       
        userHeight = prompt("Choose the height of the grid(under 100)", 0);
    }while(userHeight>100 || userHeight===0 || typeof parseInt(userHeight) !== 'number');

    do{
       
        userWidth =prompt("Choose the width of the grid(under 100)", 0);
    }while(userWidth> 100 || userWidth===0 || typeof parseInt(userWidth) !== 'number');

    //Create new grid elements
    createGrid();
});

//Rainbow button event listener
rainbowButton.addEventListener('click', () => {
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createRainbowGrid();
});
//Rainbow Effect for rainbow button
rainbowButton.addEventListener('mouseenter', (e) =>{
    e.target.style.backgroundColor = makeColor();
    e.target.style.color = makeColor();
    e.target.style.borderColor = makeColor();

    setTimeout(() => {
        e.target.style.backgroundColor = "";
    },500);
});
rainbowButton.addEventListener('mouseover', (e) =>{
    e.style.backgroundColor = makeColor();
    e.style.color = makeColor();
});