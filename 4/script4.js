

const colorPalette = document.getElementById('colorPalette');

function addBlock() {
    const blocks = document.querySelectorAll('.color-block');
    const colors = Array.from(blocks).map(block => block.style.backgroundColor);

    if (colors.length > 0) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const newBlock = document.createElement('div');
        newBlock.className = 'color-block';
        newBlock.style.backgroundColor = randomColor;
        colorPalette.appendChild(newBlock);

        saveBlocks();
    }
}

function saveBlocks() {
    const blocks = document.querySelectorAll('.color-block');
    const colorsArray = Array.from(blocks).map(block => block.style.backgroundColor);
    localStorage.setItem('colorBlocks', JSON.stringify(colorsArray));
}

function loadBlocks() {
    const savedBlocks = localStorage.getItem('colorBlocks');
    if (savedBlocks) {
        const colorsArray = JSON.parse(savedBlocks);
        colorsArray.forEach(color => {
            const block = document.createElement('div');
            block.className = 'color-block';
            block.style.backgroundColor = color;
            colorPalette.appendChild(block);
        });
    }
}




const lightSequence = ["red", "yellow", "green"];
const lightElements = document.querySelectorAll('.light');
let currentLightIndex = 0; 


function changeLight() {
    
    lightElements.forEach(light => light.style.backgroundColor = "grey");

    
    currentLightIndex = (currentLightIndex + 1) % lightSequence.length;
    const activeColor = lightSequence[currentLightIndex];

    if (activeColor === "red") {
        lightElements[0].style.backgroundColor = activeColor;
    } else if (activeColor === "yellow") {
        lightElements[1].style.backgroundColor = activeColor;
    } else if (activeColor === "green") {
        lightElements[2].style.backgroundColor = activeColor;
    }

    
    saveLights();
}


function saveLights() {
    localStorage.setItem('currentLightIndex', currentLightIndex);
}


function loadLights() {
    const savedLightIndex = localStorage.getItem('currentLightIndex');

    if (savedLightIndex !== null) {
        currentLightIndex = parseInt(savedLightIndex, 10);
    }
    changeLight(); 
}


window.onload = () => {
    loadBlocks();
    loadLights();
};
