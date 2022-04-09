
function makeDivs(tiles){
    tile_size = 1280/tiles;
    const container = document.body.querySelector("#container");
    for(i=0;i<tiles;i++){
        let div1 = document.createElement('div')
        container.appendChild(div1)
        for(let j=0; j<tiles; j++){
            let div2 = document.createElement('div');
            div2.style.width = `${tile_size}px`
            div2.style.height = `${tile_size}px`
            div2.classList.add("tiles")
            div2.addEventListener("mouseleave", () => div2.style.backgroundColor = "black")
            div1.appendChild(div2)
        }
    }
}

function getDivSize(){
    let select = document.getElementById("tile-size");
    let value = select.options[select.selectedIndex].value 
    console.log(value)
    makeDivs(value)
}

