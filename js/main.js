let element = document.getElementById("choice");
let choice;

function change () {
    
    choice = element.options[element.selectedIndex].value;
    document.getElementById("your_choice").innerHTML = "<p>You chose <span class='yellow'>" +choice+"</span>.</p> <button id='play' onclick='play()'>Play</button>";
    document.getElementById("choice").classList.add("display_none");
    document.getElementById("text-game").classList.add("display_none");

}

let computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

function play (){
    console.log(computerChoice);
    document.getElementById("comp_choice").innerHTML = "<p>Computer chose <span class='yellow'>"+computerChoice+"</span>.<p><button id='end' onclick='endgame()'>Results</button>";
    document.getElementById("play").classList.add("display_none");
    
}  

function endgame (){
    let compare = function(choice1,choice2) {
        if (choice1 === choice2) {
            return "<p class='yellow'>It's a tie!  </p><a href='game.html'>Play again!</a>";
        }
        if (choice1 === "rock") {
            if (choice2 === "scissors") {
                return "<p class='yellow'>You win! </p><a href='#'>Claim your prize!</a>";
            } else {
                return "<p class='yellow'>You lose! Try again.</p> <a href='game.html'>Play again!</a>";
            }
        }
        if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "<p class='yellow'>You win!</p><a href='#'>Claim your prize!</a>";
            } else {
                return "<p class='yellow'>You lose! Try again. <p/><a href='game.html'>Play again!</a>";
            }
        }
        if (choice1 === "scissors") {
            if (choice2 === "rock") {
                return "<p class='yellow'>You lose! Try again. </p><a href='game.html'>Play again!</a>";
            } else {
                return " <p class='yellow'>You win! </p><a href='#'>Claim your prize!</a>";
            }
        }
    };
    
    let results = compare(choice,computerChoice);
    document.getElementById("end").classList.add("display_none");
    document.getElementById("results").innerHTML = "<h2>"+results+"</h2>";

}


