import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';

const CardsContext = createContext('cards');

export const useCardsContext = () => useContext(CardsContext);

const CardsContextProvider = ({children}) => {
  const list = [
    {name: 'World', value: 125},
    {name: 'Cup', value: 125},
    {name: 'House', value: 452},
    {name: 'Numbers', value: 340},
    {name: 'Hero', value: 452},
    {name: 'Band', value: 340},
    {name: 'Hetzner', value: 125},
    {name: 'Minimal', value: 125},
    {name: 'Digital', value: 452},
    {name: 'Maos', value: 452},
    {name: 'Cats', value: 340},
    {name: 'Soft', value: 340},
    {name: 'Samsung', value: 125},
    {name: 'Students', value: 125},
    {name: 'Cola', value: 452},
    {name: 'Sprite', value: 340},
    {name: 'Tea', value: 340},
    {name: 'Coffee', value: 340}
  ];

  const [cardsCount, setCardsCount] = useState(6);

  const getCards = useCallback(() => {
    const cardListLength = Math.ceil(list.length / cardsCount);

    return new Array(cardsCount).fill(0).map((_, i) => {
      const initDragList = list.slice(i * cardListLength, i * cardListLength + cardListLength);

      return {
        label: `Test Adset ${i + 1}`,
        dragList: initDragList
      };
    });
  }, [cardsCount]);

  const [cards, setCards] = useState(getCards());

  useEffect(() => {
    setCards(getCards());
  }, [cardsCount, getCards]);

  return (
    <CardsContext.Provider
      value={{
        cardsCount, setCardsCount,
        cards, setCards
      }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;