document.addEventListener("DOMContentLoaded", function(event){

    document.querySelector(`title`).innerText = `Pixel Art`
    let body = document.getElementsByTagName(`body`)[0]
    let container = document.getElementById(`container`)
    let table = document.getElementById(`table`)
    let color = document.getElementById(`currentColor`)

    const rows = 45
    const cols = 80
    createGrid()

    //FUNCTION TO CREATE GRID
    function createGrid(){
        for (let i = 0; i < rows; i++){
            let row = document.createElement(`tr`)
            for (let j = 0; j < cols; j++){
                let cell = document.createElement(`td`)
                cell.classList.add(`off`)
                row.appendChild(cell)
            }
            table.appendChild(row)
        }
    }
    
    //TOGGLE CELL FROM COLOR TO WHITE
    table.addEventListener(`click`, function(e){
        if (e.target.classList.contains(`off`)){
        e.target.classList.replace(`off`, `on`)
        e.target.style.backgroundColor = color.value
        e.target.style.border = none
        } else {
            e.target.classList.replace(`on`, `off`)
            e.target.style.backgroundColor = `white`
        }
    })




})