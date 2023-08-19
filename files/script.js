bgColor = '#4c6a20';
penColor = 'black';
const gridContainer = document.querySelector('#grid-container');
const gridSlider = document.querySelector('#slider');
const gridSliderOutput = document.querySelector('#output');
const outputSlide = document.querySelector('#output-slide');
let rainbowToggle = false;
gridSliderOutput.innerText = gridSlider.value;  
gridSlider.onchange = sliderUpdate;

createGrid(16);

function sliderUpdate(){
    gridSliderOutput.textContent = this.value;
    gridSlider.value = this.value;

}

function createGrid(gridSize){
    //Generate grid square & give each one an ID                        
    clearBoard();
    gridSize = parseInt(gridSliderOutput.textContent);
    let gridCol;
    let gridRow;
    for(let i = 0; i < gridSize; i++){
        gridCol = document.createElement('div');
        gridCol.classList.add('grid-col');
        gridCol.setAttribute('id','gridBox');
        gridContainer.append(gridCol);
        gridCol.addEventListener('mouseover', colorGrid)

        for(let j = 0; j < gridSize; j++){
            gridRow = document.createElement('div')
            gridRow.classList.add('grid-row')
            gridRow.setAttribute('id','gridBox')
            gridCol.append(gridRow)
            gridRow.addEventListener('mouseover', colorGrid)
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


function changeSize(span){
    createGrid(span)
}

//functionality of Set Size button
SetSizeButton = document.querySelector('#set-size');
gridSliderOutputInt = parseInt(gridSliderOutput.textContent);
SetSizeButton.onclick = () => changeSize(gridSliderOutputInt);

resetBtn = document.querySelector('.reset-btn');
resetBtn.onclick = () => resetBoard();

eraseBtn = document.querySelector('.erase-btn');
eraseBtn.onclick = () => erase();

randomBtn = document.querySelector('.random-btn');
randomBtn.onclick = () => random();

rainbowBtn = document.querySelector('.rainbow-btn');
rainbowBtn.onclick = () => rainbow();


function clearBoard(){
    let board = document.querySelector('#grid-container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    
}



function resetBoard(){
    let board = document.querySelector('#grid-container');
    let squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = bgColor);
}



function colorGrid(event){
    if(rainbowToggle){
        event.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }else{
        event.target.style.backgroundColor = penColor;
    }
    
}

//color palette response
let colorPicker = document.querySelector('#color-picker')
colorPicker.addEventListener("input", function(){
    rainbowToggleFalse();
    penColor = colorPicker.value;
})


function erase(){
    rainbowToggleFalse();
    penColor = bgColor;
}

function random(){
    rainbowToggleFalse();
    penColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

function rainbow(){
    rainbowToggle = true;
    rainbowToggle != rainbowToggle;
}

function rainbowToggleFalse(){
    rainbowToggle = false;
}
/*
function colorGrid(color, gridBox){
    if(gridBox.buttons == 1){
        if(gridBox.target.classList == ''){
            let pixel = gridBox.target;
            pixel.style.backgroundColor = color;
        }
    }
}*/
}
