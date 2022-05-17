import React from "react";
import "./card.css";
import FormDialog from "../Dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        gols={props.gols}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <div className="register-container-card">
          <h1 className="card-title">{props.name}</h1>
          <h3 className="card-gols">{props.gols}</h3>
        </div>
      </div>
    </>
  );
}
