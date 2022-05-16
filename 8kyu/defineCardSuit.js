/*You get any card as an argument. Your task is to return the suit of this card (in lowercase).*/

function defineSuit(card) {
if (card[1] === '♣' ){
  return 'clubs'
}else if (card[1] === '♦') {
  return 'diamonds'
} else if (card[1] === '♥') {
  return 'hearts'
} else if (card[1] === '♠') {
  return 'spades'
} else {
  "invalid card type"
}
 }
