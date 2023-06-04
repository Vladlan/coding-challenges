const CARD_SUITS = ["♣", "♦", "♥", "♠"];
const CARD_PRIORITIES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

function hand(holeCards, communityCards) {
  const suits = sortBySuits(holeCards, communityCards);
  console.log("suits: ", suits);
  return checkIfStraightFlush(suits);
}

function checkIfStraight(sortedCards) {
  if (sortedCards.length < 5) return false;
  const cardsSequence = [];
  for (let i = 0; i < sortedCards.length - 1; i++) {
    const currentCard = sortedCards[i];
    const nextCard = sortedCards[i + 1];
    if (
      CARD_PRIORITIES.indexOf(currentCard) -
        CARD_PRIORITIES.indexOf(nextCard) ===
      1
    ) {
      cardsSequence.push(currentCard);
      if (cardsSequence.length === 5) {
        return cardsSequence;
      }
    }
  }
}

function checkIfStraightFlush(cards) {
  for (const deck of Object.values(cards)) {
    if (deck.length >= 5) {
      const straightSeq = checkIfStraight(deck);
      if (straightSeq) return { type: "straight-flush", ranks: straightSeq };
    }
  }
  return false;
}

function sortBySuits(holeCards, communityCards) {
  const suits = { "♣": [], "♦": [], "♥": [], "♠": [] };
  for (const suit of CARD_SUITS) {
    for (const card of [...holeCards, ...communityCards]) {
      if (card.includes(suit)) {
        suits[suit].push(card);
      }
    }
  }
  const newSuits = {};
  Object.entries(suits).forEach(([suit, cards]) => {
    if (!cards.length) return false;
    newSuits[suit] = cards
      .map((card) => card.replace(/[♣♦♥♠]/g, ""))
      .sort((a, b) => CARD_PRIORITIES.indexOf(b) - CARD_PRIORITIES.indexOf(a));
  });
  return newSuits;
}

module.exports = {
  hand,
};
