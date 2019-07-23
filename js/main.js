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
    document.getElementById("comp_choice").innerHTML = "<p>Computer chose <span class='yellow'>"+computerChoice+"</span>.<p><button id='end' onclick='compare()'>Results</button>";
    document.getElementById("play").classList.add("display_none");
    
}  

function compare () {
		document.getElementById("end").classList.add("display_none");
		let results;
        if (choice === computerChoice) {
            results = "<p class='yellow'>It's a tie!  </p><a href='game.html'>Play again!</a>";
        }
        if (choice === "rock") {
            if (computerChoice === "scissors") {
                results = "<p class='yellow'>You win! </p><a href='#'>Claim your prize!</a>";
            } else {
                results = "<p class='yellow'>You lose! Try again.</p> <a href='game.html'>Play again!</a>";
            }
        }
        if (choice === "paper") {
            if (computerChoice === "rock") {
                results = "<p class='yellow'>You win!</p><a href='#'>Claim your prize!</a>";
            } else {
                results = "<p class='yellow'>You lose! Try again. <p/><a href='game.html'>Play again!</a>";
            }
        }
        if (choice === "scissors") {
            if (computerChoice === "rock") {
                results = "<p class='yellow'>You lose! Try again. </p><a href='game.html'>Play again!</a>";
            } else {
                results = " <p class='yellow'>You win! </p><a href='#'>Claim your prize!</a>";
            }
        }
		document.getElementById("results").innerHTML = "<h2>"+results+"</h2>";
    };




