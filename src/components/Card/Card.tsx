import React from "react";
import { SizeOption } from "../../common";
import "./styles.css";

interface ICardProps {
  isSelect?: boolean;
  notShow?: boolean;
  number?: number;
  name?: string;
  sizeOption: SizeOption;
}

const Card: React.FC<ICardProps> = ({
  notShow = true,
  number,
  name,
  sizeOption,
  isSelect,
}) => {
  return (
    <>
      <div className="container">
        {
          // if card with number
          sizeOption === SizeOption.medium ? (
            <div className="container__card card-medium">
              <h3 className="card__number">{number}</h3>
            </div>
          ) : // if card is select or unselect, and show
          // if card is unselect, default
          isSelect ? (
            notShow ? (
              <div className="card__noshow-select card-minimi"></div>
            ) : (
              <div className="container__card card-minimi">
                <h3 className="card__number">{number}</h3>
              </div>
            )
          ) : (
            <div className="card__noshow-unselect card-minimi"></div>
          )
        }
        <h3 className="card__name">{name}</h3>
      </div>
    </>
  );
};

export default Card;
