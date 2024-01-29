function Wedding () {
    var numGuests = prompt("How many guests do you have?");
    var numTables = prompt("How many tables do you want?");
    let guestsPerTable = Math.floor(numGuests/numTables);
    let remainingGuests = numGuests % numTables;
    alert("Your " + numGuests + " guests will be seated as follows: " + remainingGuests + " tables with " + (guestsPerTable + 1) + " guests, and " + (numTables - remainingGuests) + " tables with " + guestsPerTable + " guests");
}
