const gridContainer = document.querySelector('#grid-container');

const gridSlider = document.querySelector('#slider');
const gridSliderOutput = document.querySelector('output');

gridSliderOutput.innerText = gridSlider.value + 'x' + gridSlider.value;

function createGrid(){
    //Generate grid square & give each one an ID                        
    for(let i = 0; i < parseInt(gridSlider.value); i++){
        const gridCol = document.createElement('div');
        gridContainer.append(gridCol);
        gridCol.setAttribute('id', 'grid-column');
        
        for(let j = 0; j < parseInt(gridSlider.value); j++){
            const gridRow = document.createElement('div');
            gridCol.append(gridRow);
            gridRow.setAttribute('id','grid-row');
        }
    }
    
}
createGrid()




