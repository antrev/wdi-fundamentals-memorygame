var cards = [
{
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"	
},
{
rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"
}

];
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
	console.log("You flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}
flipCard(0);
flipCard(2);
