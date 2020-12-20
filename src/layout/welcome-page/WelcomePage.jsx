import React, { useState, useContext, useEffect } from 'react';
import { Appointments } from '../../components/appointments/Appointments'
import { Recipes } from '../../components/recipes/Recipes'
import AuthContext from '../../context/auth/authContext';
import logo from '../../img/logo.png'
import './styles_general.css'

export const WelcomePage = () => {
  const authContext = useContext(AuthContext);

  const { logout, user } = authContext

  const handleLogout = (e) => {
    e.preventDefault()
    logout()
  }

  let currentModal;
  window.onclick = function(event) {
    const modal = document.getElementById("modal-" + currentModal);

    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  const openModal = (num, indexOfMeeting) => {
    currentModal = num;
    const modal = document.getElementById("modal-" + num);
    if (modal) {
      modal.style.display = "block";
      switch (indexOfMeeting) {
        case 0:
          document.getElementById(`${num}MEETING_date`).innerText = 'Неділя, 20 грудня'
          document.getElementById(`${num}MEETING_time`).innerText = '13:00 - 13:30'
          document.getElementById(`${num}MEETING_patient`).innerText = 'Попенко Д.В.'
          document.getElementById(`${num}FOOTER_patient`).innerText = 'Хто створив: Попенко Д.В.'
          break;
        case 1:
          document.getElementById(`${num}MEETING_date`).innerText = 'Неділя, 20 грудня'
          document.getElementById(`${num}MEETING_time`).innerText = '13:30 - 14:00'
          document.getElementById(`${num}MEETING_patient`).innerText = 'Заяць Є.Є.'
          document.getElementById(`${num}FOOTER_patient`).innerText = 'Хто створив: Заяць Є.Є.'
          break;
        case 2:
          document.getElementById(`${num}MEETING_date`).innerText = 'Понеділок, 21 грудня'
          document.getElementById(`${num}MEETING_time`).innerText = '13:00 - 13:30'
          document.getElementById(`${num}MEETING_patient`).innerText = 'Ільїн М.О.'
          document.getElementById(`${num}FOOTER_patient`).innerText = 'Хто створив: Ільїн М.О.'
          break;
        case 3:
          document.getElementById(`${num}MEETING_date`).innerText = 'Понеділок, 21 грудня'
          document.getElementById(`${num}MEETING_time`).innerText = '14:30 - 15:00'
          document.getElementById(`${num}MEETING_patient`).innerText = 'Гребініченко М.В.'
          document.getElementById(`${num}FOOTER_patient`).innerText = 'Хто створив: Гребініченко М.В.'
          break;
case 4:
          document.getElementById(`${num}MEETING_date`).innerText = 'Вівторок, 22 грудня'
          document.getElementById(`${num}MEETING_time`).innerText = '14:00 - 14:30'
          document.getElementById(`${num}MEETING_patient`).innerText = 'Лук`янець М.О.'
          document.getElementById(`${num}FOOTER_patient`).innerText = 'Хто створив: Лук`янець М.О.'
          break;
        default:
          break;
      }
    }
  }

  const closeModal = (num) => {
    const modal = document.getElementById("modal-" + num);
    if (modal)
      modal.style.display = "none";
  }

  const openRecipeModal = (num) => {
    const modal = document.getElementById("recipe-modal-" + num);
    if (modal)
      modal.style.display = "block";
  }

  const closeRecipeModal = (num) => {
    const modal = document.getElementById("recipe-modal-" + num);
    if (modal)
      modal.style.display = "none";
  }

  return user && (
    <div className="welcome-body">
      <div className="welcome-row row navbar-row">
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-8 navbar navbar-expand-lg">
          <a href="/">
            <img src={logo} height="20" className="d-inline-block align-top" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="navbar-text navbar-button justify-content-right">
              <a
                className="navbar-link"
                href="#"
                onClick={handleLogout}
              >
                Вийти
              </a>
            </div>
          </div>
        </div>
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
      </div>
      <div className="welcome-row row">
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-8">
          <div className="welcome-message">
            Раді вас бачити, 
            <span className="username">{' ' + user.fullName}!</span>
          </div>
          <Appointments openModal={openModal} />
          <Recipes openRecipeModal={openRecipeModal} />
        </div>
      </div>
      <div id="modal-1" className="modal">

          <div className="modal-content">
            <span className="close" onClick={() => closeModal(1)}>&times;</span>
            <div className="row my-row">
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-10 my-modal-header">
                    Онлайн зустріч
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="modal-subtitle">
                        <span id="1MEETING_date">Понеділок, 21 грудня</span> • <span id="1MEETING_time">13:00 - 13:30</span>
                    </div>

                    <div className="technical-info">
                        Пацієнт
                    </div>
                    <div id="1MEETING_patient" className="specific-info">
                        Константинопольский К.К.
                    </div>

                    <div className="technical-info">
                        Мобільний номер
                    </div>
                    <div id="1MEETING_phone" className="specific-info">
                        +38 (098) 658 26 50
                    </div>

                    <div className="technical-info">
                        Номер медичної карти
                    </div>
                    <div id="1MEETING_medcard" className="specific-info">
                        АМБ6234123
                    </div>
                    <button type="button" name="continue" className="btn btn-primary btn-100">Приєднатися до конференції</button>

                    <div id="1FOOTER_patient" className="footer">
                        Хто створив: Константинопольский К.К.
                    </div>
                </div>
                
            </div>

          </div>

        </div>

        <div id="modal-2" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeModal(2)}>&times;</span>
            <div className="row my-row">
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-10 my-modal-header">
                    Особиста зустріч
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="modal-subtitle">
                        <span id="2MEETING_date">Понеділок, 21 грудня</span> • <span id="2MEETING_time">15:00 - 15:30</span>
                    </div>

                    <div className="technical-info">
                        Пацієнт
                    </div>
                    <div id="2MEETING_patient" className="specific-info">
                        Запольський Е.Т.
                    </div>

                    <div className="technical-info">
                        Мобільний номер
                    </div>
                    <div id="2MEETING_phone" className="specific-info">
                        +38 (098) 658 26 50
                    </div>

                    <div className="technical-info">
                        Номер медичної карти
                    </div>
                    <div id="2MEETING_medcard" className="specific-info">
                        АМБ6234123
                    </div>

                    <div id="2FOOTER_patient"  className="footer">
                        Хто створив: Запольський Е.Т.
                    </div>
                </div>
                
            </div>

          </div>

        </div>

        <div id="recipe-modal-1" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => closeRecipeModal(1)}>&times;</span>
            <div className="row my-row">
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-10 my-modal-header">
                    Інформація про рецепт
                </div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-1 col-sm-1 col-md-1 col-lg-1"></div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-10">
                    <div className="modal-subtitle">
                        <span>Дата виписки: 20.10.2020</span>
                    </div>

                    <div className="technical-info">
                        Пацієнт
                    </div>
                    <div className="specific-info">
                        Константинопольский К.К.
                    </div>

                    <div className="technical-info">
                        Вік
                    </div>
                    <div className="specific-info">
                        37 років
                    </div>

                    <div className="technical-info">
                        Мобільний номер
                    </div>
                    <div className="specific-info">
                        +38 (098) 658 26 50
                    </div>

                    <div className="technical-info">
                        Номер медичної карти
                    </div>
                    <div className="specific-info">
                        АМБ6234123
                    </div>

                    <div className="technical-info">
                        Назва лікарського засобу
                    </div>
                    <div className="specific-info">
                        Бісопролол
                    </div>

                    <div className="technical-info">
                        Кількість лікарського засобу
                    </div>
                    <div className="specific-info">
                        30 таблеток, 1 упаковка
                    </div>

                    <div className="technical-info">
                        Застосування
                    </div>
                    <div className="specific-info footer">
                        Закинути таблетку в рот, відразу пити багато води і проковтнути все разом
                    </div>
                </div>
                
            </div>

          </div>

        </div>
    </div>
  )
}
