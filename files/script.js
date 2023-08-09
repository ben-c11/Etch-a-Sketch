const gridContainer = document.querySelector('#grid-container');

const gridSlider = document.querySelector('#slider');
const gridSliderOutput = document.querySelector('output');

gridSliderOutput.innerText = gridSlider.value + 'x' + gridSlider.value;

function createGrid(){
    //Generate grid square & give each one an ID                        
    let gridSize = parseInt(gridSlider.value);
    let gridCol;
    let gridRow;
    for(let i = 0; i < gridSize; i++){
        gridCol = document.createElement('div');
        gridCol.classList.add('grid-col');
        gridCol.setAttribute('id','gridBox');
        gridContainer.append(gridCol);

        for(let j = 0; j < gridSize; j++){
            gridRow = document.createElement('div')
            gridRow.classList.add('grid-row')
            gridRow.setAttribute('id','gridBox')
            gridCol.append(gridRow)
        }
    }
    
    
    /*
    let gridSize = parseInt(gridSlider.value);
    let gridBox;
    for(let i = 0; i < gridSize**2; i++){
        gridBox = document.createElement('div');
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
        gridContainer.insertAdjacentElement('afterbegin', gridBox);
    }*/
   
}
createGrid()


function colorGrid(color, gridBox){
    if(gridBox.buttons == 1){
        if(gridBox.target.classList == ''){
            let pixel = gridBox.target;
            pixel.style.backgroundColor = color;
        }
    }
}


