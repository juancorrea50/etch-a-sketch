let userHeight=16;
let userWidth=16;

const container = document.querySelector('.container');
const gridBtn = document.querySelector('.grid-dimensions');



//Grid logic in a function
function createGrid(){
     //Creates divs using for loop
    for(x=0;x<(userWidth);x++){
        for(y=0;y<(userHeight);y++){
            //Divs created in memory and appended at the end of the for loop
            const divs = document.createElement('div');
            divs.style.cssText = 'height: 5px; width: 5px; margin: 3px; background: red;';
            
            container.style.height = `${userHeight*11}px`;
            container.style.width = `${userWidth*11}px`;

            // *Hover effect*
            //Mouse enter
             divs.addEventListener("mouseenter", (e) =>{
                 e.target.style.backgroundColor = "white";
        
                setTimeout(() => {
                    e.target.style.backgroundColor="red";
                }, 500);
            })
             //Mouse over
            divs.addEventListener("mouseover", (e)=> {
                e.target.style.backgroundColor = "white";
        
                setTimeout(() => {
                    e.target.style.backgroundColor = "red";
                }, 500);
            });

            //Add divs to container
            container.appendChild(divs);
        }
    
     }
}

//initialize grid 16x16
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
    }while(userHeight>100);

    do{
       
        userWidth =prompt("Choose the width of the grid(under 100)", 0);
    }while(userWidth> 100);

    //Create new grid elements
    createGrid();
});