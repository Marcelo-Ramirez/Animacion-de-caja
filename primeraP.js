let x = 0
let y = 0
let box = document.getElementById("box")
function move(){
    if(x < 450 && y == 0){
        box.style.left = x + "px"
        x++
    }else if(x == 450 && y < 350){
        box.style.top = y + "px"
        y++
    }else if(x >= 0 && y == 350){
        box.style.left = x + "px"
        x--
    }else{
        box.style.top = y + "px"
        y--
    }
}

let inter = setInterval(move,1)



