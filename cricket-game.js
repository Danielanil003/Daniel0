// Define variables to store game state
let battingTeam, bowlingTeam, striker, nonStriker, currentBowler, currentBall = 0;
let battingScore = 0;
let commentary = [];

// Function to start the match
function startMatch(team1, team2) {
    // Set batting and bowling teams
    battingTeam = team1;
    bowlingTeam = team2;

    // For simplicity, let's assume the batting team always starts with Player 1 and Player 2 as strikers
    striker = "Player 1";
    nonStriker = "Player 2";
    currentBowler = "Bowler 1";

    // Display toss screen
    showTossScreen();
}

// Function to simulate toss result
function tossResult(choice) {
    // Logic to determine toss result
    // For simplicity, let's assume the batting team always wins the toss and chooses to bat
    showBattingScreen();
}

// Function to show batting screen
function showBattingScreen() {
    // Display batting screen with player names and bowler name
    document.getElementById('battingScreen').style.display = 'block';
    document.getElementById('striker').innerText = striker;
    document.getElementById('nonStriker').innerText = nonStriker;
    document.getElementById('currentBowler').innerText = currentBowler;
}

// Function to simulate rolling of a dice
function rollDice() {
    // Simulate rolling a dice and determine the outcome
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    let runScored;

    switch(diceRoll) {
        case 1:
            runScored = 1;
            commentary.push("1 run scored.");
            break;
        case 2:
            runScored = 2;
            commentary.push("2 runs scored.");
            break;
        case 3:
            runScored = 0; // Dot ball
            commentary.push("Dot ball.");
            break;
        case 4:
            runScored = 4;
            commentary.push("Boundary! 4 runs scored.");
            break;
        case 5:
            runScored = -1; // Out
            commentary.push("Out! The batsman is dismissed.");
            break;
        case 6:
            runScored = 6;
            commentary.push("Sixer! 6 runs scored.");
            break;
    }

    // Update batting score
    battingScore += runScored;

    // Display ball result and commentary
    document.getElementById('ballResult').innerText = "Ball Result: " + (runScored >= 0 ? runScored + " runs" : "Out");
    document.getElementById('commentary').innerText = "Commentary: " + commentary[commentary.length - 1];
}

// Function to simulate the next ball
function nextBall() {
    // Check for end of innings or match
    if (currentBall === 6) {
        endInnings();
    } else {
        rollDice();
        currentBall++;
    }
}

// Function to end the innings
function endInnings() {
    // Logic to end the innings and switch roles between batting and bowling teams
    // For simplicity, let's assume the batting team has completed its innings
    document.getElementById('battingScreen').style.display = 'none';
    document.getElementById('bowlingScreen').style.display = 'block';
    document.getElementById('bowlingTeam').innerText = bowlingTeam;
    document.getElementById('targetScore').innerText = "Target: " + (battingScore + 1);
}

// Start the match with team names (replace "Team 1" and "Team 2" with actual team names)
startMatch("Team 1", "Team 2");
