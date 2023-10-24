import { useState } from "react";
import { SizeOption } from "../../common";
import { Card, Navbar } from "../../components";

import "./DashboardPage.css";

const fibonacci = [
  "0",
  "1",
  "2",
  "3",
  "5",
  "8",
  "13",
  "21",
  "34",
  "55",
  "89",
  "?",
  "☕",
];

export const DashboardPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardActive, setCardActive] = useState<string | null>(null);

  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const onShowCard = () => {
    if (selectedValue !== null) {
      setShowCard((value) => !value);
    }
  };

  const handleCardClick = (value: string) => {
    if (selectedValue === value) {
      setCardActive(null);
      setSelectedValue(null);

      setShowCard(true);
    } else {
      setSelectedValue(value);
      setCardActive(value);
      setShowCard(false);
    }
  };
  return (
    <>
      <div className="layout">
        {/* NAVBAR */}
        <Navbar />
        {/* BODY */}
        <main>
          <div className="body__content">
            <div className="table__content">
              {/* cards around of table */}

              <div className="table__content-grid">
                <div className="grid__div"></div>
                <div className="grid__top">
                  <Card
                    showCard={showCard}
                    sizeOption={SizeOption.minimi}
                    name="Jc"
                    value={cardActive!}
                    isSelected={showCard}
                    onCardClick={() => {}}
                  />
                  <Card
                    showCard={showCard}
                    sizeOption={SizeOption.minimi}
                    name="Edson"
                    value={cardActive!}
                    isSelected={showCard}
                    onCardClick={() => {}}
                  />
                </div>
                <div className="grid__div"></div>
                <div className="grid__left">
                  <Card
                    showCard={showCard}
                    sizeOption={SizeOption.minimi}
                    name="Gustavo"
                    value={cardActive!}
                    isSelected={showCard}
                    onCardClick={() => {}}
                  />
                  <Card
                    showCard={showCard}
                    sizeOption={SizeOption.minimi}
                    name="Josue"
                    value={cardActive!}
                    isSelected={showCard}
                    onCardClick={() => {}}
                  />
                </div>
                {/* table */}
                <div className="content__show-votes">
                  {selectedValue !== null ? (
                    <button onClick={onShowCard} className="show-votes__button">
                      Show Cards
                    </button>
                  ) : (
                    <h4> Seleccione una tarjeta</h4>
                  )}
                </div>

                <div className="grid__right">
                  <Card
                    showCard={showCard}
                    sizeOption={SizeOption.minimi}
                    name="Alfredo"
                    value={cardActive!}
                    isSelected={showCard}
                    onCardClick={() => {}}
                  />
                  <Card
                    showCard={showCard}
                    sizeOption={SizeOption.minimi}
                    name="Kevin"
                    value={cardActive!}
                    isSelected={showCard}
                    onCardClick={() => {}}
                  />
                </div>
                <div className="grid__div"></div>
                <div className="grid__bottom">
                  <Card
                    showCard={showCard}
                    sizeOption={SizeOption.minimi}
                    name="Torito"
                    value={cardActive!}
                    isSelected={showCard}
                    onCardClick={() => {}}
                  />
                </div>
                <div className="grid__div"></div>
              </div>
            </div>
            <div className="list-cards">
              {fibonacci.map((elemento, index) => (
                <Card
                  key={index}
                  sizeOption={SizeOption.medium}
                  value={elemento}
                  isSelected={selectedValue === elemento}
                  onCardClick={handleCardClick}
                />
              ))}
            </div>
          </div>
        </main>

        {/* FOTTER */}
        <footer></footer>
      </div>
    </>
  );
};
