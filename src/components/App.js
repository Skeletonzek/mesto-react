import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: null, link: null, open: false });

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setSelectedCard({ ...selectedCard, open: false });
  }

  function handleCardClick(name, link) {
    setSelectedCard({ name, link, open: true });
  }

  return (
    <div className="page">
      <PopupWithForm name="profile" title="Редактировать профиль" submit="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <input className="popup__text popup-profile__text" id="name-input" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="popup__error" id="name-input-error"></span>
        <input className="popup__text popup-profile__text" id="status-input" type="text" name="about" placeholder="О себе" minLength="2" maxLength="200" required />
        <span className="popup__error" id="status-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="card" title="Новое место" submit="Создать" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <input className="popup__text popup-card__text" id="title-input" type="text" name="name" placeholder="Название" minLength="1" maxLength="30" required />
        <span className="popup__error" id="title-input-error"></span>
        <input className="popup__text popup-card__text" id="link-input" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-input-error"></span>
      </PopupWithForm>
      <PopupWithForm name="confirm" title="Вы уверены?" submit="Да">

      </PopupWithForm>
      <PopupWithForm name="avatar" title="Обновить аватар" submit="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <input className="popup__text popup-avatar__text" id="link-input" type="url" name="avatar" placeholder="Ссылка на картинку" required />
        <span className="popup__error" id="link-input-error"></span>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />
    </div>
  );
}

export default App;
