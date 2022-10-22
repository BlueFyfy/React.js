import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div className="my-style">
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://tse3-mm.cn.bing.net/th/id/OIP-C.gTxpsdpCMs-UOwH_2-NZZAHaEo?pid=ImgDet&rs=1"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="G.E.M"
      img="https://tse1-mm.cn.bing.net/th/id/OIP-C.xKeyw_FvYRhD0ul7l82rLQHaHa?pid=ImgDet&rs=1"
      tel="+987 654 321"
      email="gemdeng@nowhere.com"
    />

    <Card
      name="Taylor Swift"
      img="https://tse1-mm.cn.bing.net/th/id/OIP-C.dOCQFnnJyxaGKR2A0BaswwHaNK?pid=ImgDet&rs=1"
      tel="+918 372 574"
      email="gmail@taylorswift.com"
    />

    <input id="fName" />
  </div>,
  document.getElementById("root")
);
