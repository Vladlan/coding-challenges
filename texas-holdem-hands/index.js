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
const sortByCardPriority = (a, b) =>
  CARD_PRIORITIES.indexOf(b) - CARD_PRIORITIES.indexOf(a);

function hand(holeCards, communityCards) {
  const suits = sortBySuits(holeCards, communityCards);
  return (
    checkIfStraightFlush(suits) ||
    checkIfFourOfAKind(suits, holeCards) ||
    checkIfFullHouse(suits) ||
    checkIfFlush(suits) ||
    checkIfStraight(suits) ||
    checkIfThreeOfAKind(suits, holeCards) ||
    checkIfTwoPairs(suits, holeCards) ||
    checkIfPair(suits, holeCards)
  );
}

function checkIfStraight(sortedCardsBySuit) {
  const sortedDeck = Object.values(sortedCardsBySuit)
    .reduce((acc, val) => acc.concat(val), [])
    .sort(sortByCardPriority);
  if (sortedDeck.length < 5) return false;
  const cardsSequence = [];
  for (let i = 0; i < sortedDeck.length - 1; i++) {
    const currentCard = sortedDeck[i];
    const nextCard = sortedDeck[i + 1];
    if (
      CARD_PRIORITIES.indexOf(currentCard) -
        CARD_PRIORITIES.indexOf(nextCard) ===
      1
    ) {
      cardsSequence.push(currentCard);
      if (cardsSequence.length === 5) {
        return { type: "straight", ranks: cardsSequence };
      }
    } else {
      if (cardsSequence.length === 4 && currentCard) {
        cardsSequence.push(currentCard);
        return { type: "straight", ranks: cardsSequence };
      }
    }
  }
}

function checkIfStraightFlush(sortedCards) {
  for (const deck of Object.values(sortedCards)) {
    if (deck.length >= 5) {
      const straightSeq = checkIfStraight(deck);
      if (straightSeq)
        return { type: "straight-flush", ranks: straightSeq.ranks };
    }
  }
  return false;
}

function checkIfFourOfAKind(cards, holeCards) {
  const kindsMap = {};
  for (const deck of Object.values(cards)) {
    deck.forEach((card) => {
      if (!kindsMap[card]) {
        kindsMap[card] = 1;
      } else {
        kindsMap[card]++;
      }
    });
  }
  const fourOfAKind = Object.entries(kindsMap).find(
    ([card, count]) => count === 4
  );
  if (fourOfAKind) {
    return {
      type: "four-of-a-kind",
      ranks: holeCards.map((card) => card.replace(/[♣♦♥♠]/g, "")),
    };
  }
}

function checkIfFullHouse(cards) {
  const kindsMap = {};
  for (const deck of Object.values(cards)) {
    deck.forEach((card) => {
      if (!kindsMap[card]) {
        kindsMap[card] = 1;
      } else {
        kindsMap[card]++;
      }
    });
  }
  const threeOfAKind = Object.entries(kindsMap).find(
    ([card, count]) => count === 3
  );
  const pair = Object.entries(kindsMap).find(([card, count]) => count === 2);
  if (threeOfAKind && pair) {
    return {
      type: "full house",
      ranks: [threeOfAKind[0], pair[0]],
    };
  }
  return false;
}

function checkIfFlush(cards) {
  for (const deck of Object.values(cards)) {
    if (deck.length >= 5) {
      return { type: "flush", ranks: deck.slice(0, 5) };
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
      .sort(sortByCardPriority);
  });
  return newSuits;
}

function checkIfThreeOfAKind(sortedCardsBySuit) {
  const kindsMap = {};
  for (const deck of Object.values(sortedCardsBySuit)) {
    deck.forEach((card) => {
      if (!kindsMap[card]) {
        kindsMap[card] = 1;
      } else {
        kindsMap[card]++;
      }
    });
  }
  const threeOfAKind = Object.entries(kindsMap).find(
    ([card, count]) => count === 3
  );
  const restCardsExceptThreeOfAKind = Object.entries(kindsMap)
    .filter(([card, count]) => count !== 3)
    .map(([card, count]) => card)
    .slice(-2)
    .reverse();
  if (threeOfAKind) {
    return {
      type: "three-of-a-kind",
      ranks: [threeOfAKind[0], ...restCardsExceptThreeOfAKind],
    };
  }
}

function checkIfTwoPairs(sortedCardsBySuit) {
  const kindsMap = {};
  for (const deck of Object.values(sortedCardsBySuit)) {
    deck.forEach((card) => {
      if (!kindsMap[card]) {
        kindsMap[card] = 1;
      } else {
        kindsMap[card]++;
      }
    });
  }
  const pairs = Object.entries(kindsMap)
    .filter(([card, count]) => count === 2)
    .map(([card, count]) => card).reverse();

  const restCardsExceptPairs = Object.entries(kindsMap)
    .filter(([card, count]) => count !== 2)
    .map(([card, count]) => card)
    .slice(-1);
  if (pairs.length === 2) {
    return {
      type: "two pair",
      ranks: [
        ...pairs,
        restCardsExceptPairs[0],
      ],
    };
  }
}

function checkIfPair(sortedCardsBySuit) {
  const kindsMap = {};
  for (const deck of Object.values(sortedCardsBySuit)) {
    deck.forEach((card) => {
      if (!kindsMap[card]) {
        kindsMap[card] = 1;
      } else {
        kindsMap[card]++;
      }
    });
  }
  const pair = Object.entries(kindsMap).find(
    ([card, count]) => count === 2
  );
  const restCardsExceptPair = Object.entries(kindsMap)
    .filter(([card, count]) => count !== 2)
    .map(([card, count]) => card)
    .slice(-3)
    .reverse();
  if (pair) {
    return {
      type: "pair",
      ranks: [pair[0], ...restCardsExceptPair],
    };
  }
}

module.exports = {
  hand,
};
