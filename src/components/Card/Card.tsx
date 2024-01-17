import React from "react";
import { SizeOption } from "../../common";
import "./styles.css";

interface ICardProps {
  showCard?: boolean;
  value: string;
  name?: string;
  sizeOption: SizeOption;
  isSelected?: boolean;
  onCardClick: (value: string) => void | undefined;
}

const Card: React.FC<ICardProps> = ({
  showCard = false,
  value,
  name,
  sizeOption,
  isSelected,
  onCardClick,
}) => {
  const toggleCard = () => {
    onCardClick(value!);
  };

  const renderMediumCard = (
    <div
      className={`container__card card-medium ${
        isSelected ? "container__card-select" : ""
      }`}
      onClick={toggleCard}
    >
      <h3 className="card__number">{value}</h3>
    </div>
  );

  const renderMinimiCard = (
    <div className="container__card card-minimi">
      <h3 className="card__number">{value}</h3>
    </div>
  );

  const renderNoShowCard = (
    <div className="card-minimi card__noshow-select"></div>
  );

  const renderUnselectedNoShowCard = (
    <div className="card-minimi card__noshow-unselect"></div>
  );

  return (
    <div className="container">
      {sizeOption === SizeOption.medium
        ? renderMediumCard
        : value !== null
        ? showCard
          ? renderMinimiCard
          : renderNoShowCard
        : renderUnselectedNoShowCard}
      <h3 className="card__name">{name}</h3>
    </div>
  );
};

export default Card;
