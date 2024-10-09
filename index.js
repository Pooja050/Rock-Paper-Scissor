//rock,paper,scissor
let ans = confirm("Let's Play Rock/Paper/Scissor!!");
if(ans){
    let choice = (prompt("Enter Rock/Paper/Scissor").trim().toLowerCase());
    if(choice){
    let c1=(Math.random()*10)
    let choice1;
    switch(c1){
        case 1: choice1="rock";
        case 2: choice1="paper";
        default: choice1="scissor";
    }
    if(choice==="rock" && choice1=="scissor"){
        alert("You won")
    }
    else if(choice1==="rock" && choice=="scissor"){
        alert("You lose")
    }
    else if(choice==="paper" && choice1=="scissor"){
        alert("You lose")
    }
    else if(choice1==="paper" && choice=="scissor"){
        alert("You won")
    }
    else if(choice==="paper" && choice1=="rock"){
        alert("You won")
    }
    else{
        alert("You lose")
    }}
    else{
        alert("You didn't enter anything")
    }
    let playAgain = confirm("Play Again??")
    playAgain ? location.reload() : alert("Ok, Thanks for playing")
}
else{
    alert("Ok, Maybe next time")
}
