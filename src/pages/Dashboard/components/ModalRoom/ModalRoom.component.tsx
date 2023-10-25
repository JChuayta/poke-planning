import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createRoom } from "../../../../store/slices/room/room.slice";
import "./ModalRoom.component.css";

interface ModalRoomProps {
  showModal: boolean;
  closeModal: () => void;
}

const ModalRoom: React.FC<ModalRoomProps> = ({ showModal, closeModal }) => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  // const { name, user } = useSelector((state: RootState) => state.room);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const saveRoom = () => {
    console.log(inputValue);
    // Aquí puedes realizar alguna acción con el valor del input, como enviarlo a un servidor o actualizar el estado de tu aplicación.
    dispatch(createRoom({ room: { nameRoom: inputValue, user: "Jc" } }));

    // Cierra el modal
    closeModal();
  };

  return (
    <div className="modal" style={{ display: showModal ? "flex" : "none" }}>
      <div className="modal__dialog">
        <div className="dialog__header">
          <h3 className="header__title">NOMBRE DE LA SALA</h3>
        </div>
        <div className="dialog__content">
          <input
            className="content__input"
            type="text"
            // name={name}
            id=""
            onChange={changeInputValue}
            value={inputValue}
          />
          <button className="content__button" onClick={saveRoom}>
            {" "}
            Crear Sala
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalRoom;
