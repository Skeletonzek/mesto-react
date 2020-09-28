import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.name, props.link);
  }

  return (
    <article className="place">
      <button className="place__bin place__bin_hidden" type="button"></button>
      <img className="place__photo" alt={props.name} src={props.link} onClick={handleClick} />
      <h2 className="place__title">{props.name}</h2>
      <div className="place__like">
        <button className="place__like-button" type="button"></button>
        <span className="place__like-count">{props.likes}</span>
      </div>
    </article>
  )
}

export default Card;