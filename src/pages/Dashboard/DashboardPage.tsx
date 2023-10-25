import {
  DocumentData,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  // getDocs,
  serverTimestamp,
} from "firebase/firestore";
import "./DashboardPage.css";

import { useEffect, useState } from "react";
import { SizeOption } from "../../common";
import { Card, Navbar } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Sidebar } from "./components/Sidebar";
import { fibonacci } from "./enums";
import { onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";

export const DashboardPage = () => {
  const [showCard, setShowCard] = useState(false);
  const [cardActive, setCardActive] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const [users, setUsers] = useState([]);

  // const dispatch = useDispatch();
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

  const slicesUser = () => {
    
  };

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
                      name="Jc"
                      value={cardActive!}
                      isSelected={showCard}
                      onCardClick={() => {}}
                    />
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
