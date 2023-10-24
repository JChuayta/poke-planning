import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { SizeOption } from "../../common";
import { Card, Navbar } from "../../components";

import { db } from "../../common/config";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./DashboardPage.css";
import { Sidebar } from "./components/Sidebar";
import { fibonacci } from "./enums";

// import { socket } from "./socket";
import { io } from "socket.io-client";

// "undefined" means the URL will be computed from the `window.location` object
// const URL = "https://github.io/poke-planning-server";
const URL = "http://localhost:8080";

// const socket = io(URL);
export const socket = io(URL);

export const DashboardPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardActive, setCardActive] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  // const dispatch = useDispatch();
  const { isComplete, user, nameRoom } = useSelector(
    (state: RootState) => state.room.room
  );

  const onShowCard = () => {
    if (selectedValue !== null) {
      setShowCard((value) => !value);
    }
  };

  const [isConnected, setIsConnected] = useState(socket.connected);
  // const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    // function onFooEvent(value) {
    //   setFooEvents((previous) => [...previous, value]);
    // }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    socket.on("user", (payload) => {});

    // socket.on("foo", onFooEvent);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      // socket.off("foo", onFooEvent);
    };
  }, []);

  const pointDBRef = collection(db, "storyPoints");
  // const roomDbRef = collection(db, "Room");

  // const pointDBRef = collection(db, "points");

  const savePoint = async (value: string) => {
    console.log({ isComplete, user, nameRoom });
    await addDoc(pointDBRef, {
      text: value,
      createdAt: serverTimestamp(),
      user: user,
      room: nameRoom,
    });
  };

  const handleCardClick = (value: string) => {
    //here save point in firebase
    savePoint(value);
    // addDoc(pointDBRef, {
    //   text: value,
    //   createdAt: serverTimestamp(),
    //   user: user,
    //   room: nameRoom,
    // });

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

  // const selectedTask = (value: string) => {};

  return (
    <>
      {/* <ModalRoom showModal={!isComplete} closeModal={() => {}} /> */}

      <div className="layout">
        {/* NAVBAR */}
        <Navbar />
        {/* BODY */}
        <main>
          <div className="layout__content">
            <Sidebar />

            {/* <h1>{isConnected ? "esta conectado" : "esta desconectado"}</h1> */}
            <div className="content__body">
              <div className="body__table">
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
                  <div className="body__show-votes">
                    {selectedValue !== null ? (
                      <button
                        onClick={onShowCard}
                        className="show-votes__button"
                      >
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
          </div>
        </main>

        {/* FOTTER */}
        <footer></footer>
      </div>
    </>
  );
};
