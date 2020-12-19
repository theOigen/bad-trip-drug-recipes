import React from 'react'
import logo from '../../img/logo.png'
import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'
import './styles_general.css'

export const WelcomePage = () => {
  return (
    <>
      <div className="welcome-row row navbar-row">
        <div className="col-1 col-sm-1 col-md-2 col-lg-2"></div>
        <div className="col-10 col-sm-10 col-md-8 col-lg-8 navbar navbar-expand-lg">
          <a href="/">
            <img src={logo} height="20" className="d-inline-block align-top" alt="" />
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="navbar-text navbar-button justify-content-right">
              <a className="navbar-link" href="#">
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
            <span className="username">Іван Васильович!</span>
          </div>
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Зустрічі</h3>
              <div className="pull-right">
                <span className="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
                  <i className="glyphicon glyphicon-filter"></i>
                </span>
              </div>
            </div>
            <div className="panel-body"></div>
            <div className="table-responsive">
              <table className="table table-hover" id="dev-table">
                <thead>
                  <tr>
                    <th>Дата</th>
                    <th>Час</th>
                    <th>Пацієнт</th>
                    <th>Формат</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>20.10.2020</td>
                    <td>13:00</td>
                    <td>Константинопольский К.К.</td>
                    <td>Онлайн</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <div className="welcome-form-group">
                Рядків на сторінці
                <select className="welcome-form-control meeting-pagination-select">
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="meeting-pages-quantity">
                  1-5 з 200
                  </span>
                <a href="#">
                  <img src={arrowLeft} className="meeting-arrow-left" />
                </a>
                <a href="#">
                  <img src={arrowRight} className="meeting-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="panel panel-primary second-panel">
            <div className="panel-heading">
              <h3 className="panel-title">Рецепти</h3>
                <div className="pull-right">
                  <span className="clickable filter" data-toggle="tooltip" title="Toggle table filter" data-container="body">
                    <i className="glyphicon glyphicon-filter"></i>
                  </span>
                </div>
            </div>
            <div className="panel-body"></div>
              <div className="table-responsive">
                <table className="table table-hover" id="dev-table">
                  <thead>
                    <tr>
                      <th>Пацієнт</th>
                      <th>Номер мед.карти</th>
                      <th>Препарати</th>
                      <th>Дата виписки</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Іванов І.Г.</td>
                      <td>АМБ6234152</td>
                      <td>аспірін кардіо</td>
                      <td>20.10.2020</td>
                      <td>
                        <a href="#">
                          <img src="./img/trash.svg" alt="" />
                        </a>
                      </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <div className="welcome-form-group">
                Рядків на сторінці
                <select className="welcome-form-control recipes-pagination-select">
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span className="recipes-pages-quantity">
                  1-5 з 200
                  </span>
                <a href="#">
                  <img src={arrowLeft} className="recipes-arrow-left" />
                </a>
                <a href="#">
                  <img src={arrowRight} className="recipes-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
