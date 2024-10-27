document.getElementById('generate-button').addEventListener('click', function() {
    var sizeValueL = document.getElementById('size-inputl').value;
    var sizeValueW = document.getElementById('size-inputw').value;

    var gridSize = [sizeValueW, sizeValueL];

    console.log("The size of the grid is: ", gridSize); 

    var gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = ''; // clear existing grid

    for (var i = 0; i < gridSize[1]; i++) {
        var row = document.createElement('div');
        row.className = 'grid-row';
        for (var j = 0; j < gridSize[0]; j++) {
            var cell = document.createElement('div');
            cell.className = 'grid-cell';
            row.appendChild(cell);
            console.log("inner cycle done");
        }
        gridContainer.appendChild(row);
        console.log("outer cycle done");
    }
});

