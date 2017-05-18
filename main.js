var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var checkForMatch = function(){
	
	if (cardsInPlay[0] === cardsInPlay[2]){
		alert("You found a match");
	} else {
		alert("Sorry try again")
	}
}

var flipCard = function (cardId){
	checkForMatch();
	console.log("You flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(2);

