import React from 'react';
import {api} from '../utils/api';
import Card from './Card';


function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);



  React.useEffect(() => {

    api.getUserInfo()
      .then((res) => {        
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api.getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
    });
  })
  
  return (
    <main className="content">
    <section className="profile">
      <button className="profile__img-hover" onClick={props.onEditAvatar}>
        <img className="profile__img" src={userAvatar} alt="Аватар" />
      </button>
      <div className="profile-info">
        <h1 className="profile-info__name">{userName}</h1>
        <button className="profile-info__change" type="button" onClick={props.onEditProfile}></button>
        <p className="profile-info__status">{userDescription}</p>
      </div>
      <button className="profile__add" type="button" onClick={props.onAddPlace}></button>
    </section>
    <section className="places">
      {cards.map((card) => (<Card key={card._id} name={card.name} link={card.link} likes={card.likes.length} onCardClick={props.onCardClick} />))}
  </section>
  </main>
  )
}

export default Main;