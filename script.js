let playerpoy = [
    "rock",
    "paper",
    "scissors"
]
let mango = [1,3,6]




const resultEL = document.getElementById("result-el")
const btnEl = document.getElementById("btn-el")


btnEl.addEventListener("click", function(){

clearTxt()
let enemy = Enemypoy()
let you = Playerpoy()

GameResult(enemy,you)
WinChecker(enemy,you)
})


function WinChecker(e,p){

    if(e === "paper" && p ==="rock" ){
         Swal.fire({
        icon: "error",
        title: "Shamee",
        text: "You Lose!",
        timer: 1500
            });
    }else if(p === "paper" && e ==="rock"){
       Swal.fire({
        icon: "success",
        title: "Sheeesh",
        text: "You Win!",
        timer: 1500
            });
    }else if (e == "paper" && p =="scissors"){
           Swal.fire({
        icon: "success",
        title: "Sheeesh",
        text: "You Win!",
        timer: 1500
            });
    }else if (p == "paper" && e =="scissors"){
        Swal.fire({
        icon: "error",
        title: "Shamee",
        text: "You Lose!",
        timer: 1500
            });
    }else if (e == "rock" && p == "scissors"){
         Swal.fire({
        icon: "error",
        title: "Shamee",
        text: "You Lose!",
        timer: 1500
            });
    }else if (p == "rock" && e == "scissors"){
         Swal.fire({
        icon: "success",
        title: "Shamee",
        text: "You Win!",
        timer: 1500
            });
        }
    
    
    else{
         Swal.fire({
        icon: "info",
        title: "Oww",
        text: "Draw!",
        timer: 1500
            });
    }

}

function GameResult(enemy1,player2){
resultEL.innerHTML += `You:${player2} Vs Enemy:${enemy1}`
}


function clearTxt(){
    resultEL.innerHTML = " "
}

function Playerpoy(){

    let playerpic = Math.floor(Math.random()*3)
    return playerpoy[playerpic]
    
}

function Enemypoy(){

    let enemypic = Math.floor(Math.random()*3)
    return playerpoy[enemypic]
    
}


