import React, { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../Cards/cards";
import './style.css'

export default function App() {
  const [values, setValues] = useState();

  const [listCard, setListCard] = useState([]);

  console.log(listCard);

  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      gols: values.gols,
    })
    .then(() => {
      Axios.post("http://localhost:3001/search", {
        name: values.name,
        gols: values.gols,
      })
      .then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            name: values.name,
            gols: values.gols,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="cad-container">
      <div className="register-container">
        <h1 className="register-title mt-3">Adicionar Jogador</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Gols"
          name="gols"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterGame} className="register-button">
          Cadastrar
        </button>
      </div>

      <div className="card-container-title">
        <div className="register-container-card-title">
          <h1 className="card-nome">Nome</h1>
          <h3 className="card-gols">Gols</h3>
        </div>
      </div>

      {listCard.map((val) => (
        <Card
          listCard={listCard}
          setListCard={setListCard}
          key={val.idgames}
          id={val.idgames}
          name={val.name}
          gols={val.gols}
        />
      ))}
    </div>
  );
}
