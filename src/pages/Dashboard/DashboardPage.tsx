import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";
import "./DashboardPage.css";

import { useEffect, useState } from "react";
import { SizeOption } from "../../common";
import { Card, Navbar } from "../../components";

import { onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
import { db } from "../../firebase/config";
import { RootState } from "../../store";
import { Sidebar } from "./components/Sidebar";
import { fibonacci } from "./enums";

export const DashboardPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardActive, setCardActive] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  interface User {
    id: string;
    name: string;
    position: number;
  }
  const [users, setUsers] = useState<User[]>([]);

  const { nameRoom } = useSelector((state: RootState) => state.room.room);

  const onShowCard = () => {
    if (selectedValue !== null) {
      setShowCard((value) => !value);
    }
  };

  useEffect(() => {
    const refRoom = collection(db, "Room");

    const unsubscribe = onSnapshot(refRoom, (snapshot) => {
      const room = snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
        data: doc.data(),
      }));
      console.log(room, "room");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const pointDBRef = collection(db, "storyPoints");

  const savePoint = async (value: string) => {
    console.log({ nameRoom });
    await addDoc(pointDBRef, {
      text: value,
      createdAt: serverTimestamp(),
      room: nameRoom,
    });
  };

  useEffect(() => {
    const userRef = collection(db, "User");

    const unsubscribe = onSnapshot(userRef, (snapshot) => {
      const user: any = snapshot.docs.map((doc: DocumentData) => {
        const usertemporal: any = {
          ...doc.data(),
          id: doc.id,
          // position: Math.floor(Math.random() * tiposPosibles.length),
        };

        return usertemporal;
      });

      setUsers(user);
      console.log(user, "usuarios");
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleCardClick = (value: string) => {
    savePoint(value);

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
                    {users.map((user) =>
                      user.position === 0 ? (
                        <Card
                          key={user.id}
                          name={user.name!}
                          showCard={showCard}
                          sizeOption={SizeOption.minimi}
                          value={cardActive!}
                          isSelected={showCard}
                          onCardClick={() => {}}
                        />
                      ) : (
                        <div></div>
                      )
                    )}
                  </div>
                  <div className="grid__div"></div>
                  <div className="grid__left">
                    {users.map((user) =>
                      user.position === 1 ? (
                        <Card
                          key={user.id}
                          name={user.name!}
                          showCard={showCard}
                          sizeOption={SizeOption.minimi}
                          value={cardActive!}
                          isSelected={showCard}
                          onCardClick={() => {}}
                        />
                      ) : (
                        <div></div>
                      )
                    )}
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
                    {users.map((user) =>
                      user.position === 2 ? (
                        <Card
                          key={user.id}
                          name={user.name!}
                          showCard={showCard}
                          sizeOption={SizeOption.minimi}
                          value={cardActive!}
                          isSelected={showCard}
                          onCardClick={() => {}}
                        />
                      ) : (
                        <div></div>
                      )
                    )}
                  </div>
                  <div className="grid__div"></div>
                  <div className="grid__bottom">
                    {users.map((user) =>
                      user.position === 3 ? (
                        <Card
                          key={user.id}
                          name={user.name!}
                          showCard={showCard}
                          sizeOption={SizeOption.minimi}
                          value={cardActive!}
                          isSelected={showCard}
                          onCardClick={() => {}}
                        />
                      ) : (
                        <div></div>
                      )
                    )}
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
