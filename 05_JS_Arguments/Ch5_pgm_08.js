// Displaying a player's name via an object property

var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName(player1.name);
showPlayerName(player2.name);



/* Further Adventures
 *
 * 1) In the showPlayerName function,
 *    change playerName to playerName.toUpperCase().
 *    Run the function.
 *
 * 2) Change the function to show the player's
 *    name in lower case.
 *
 */

var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName.toLowerCase());
};

player1 = {
    name: "ben stokes",
    place: "England",
    health: 60
};

player2 = {
    name: "smith",
    place: "Austraila",
    health: 60
};

showPlayerName(player1.name);
showPlayerName(player2.name);
