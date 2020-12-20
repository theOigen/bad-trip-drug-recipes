import React from 'react'
import {AppointmentItem } from './AppointmentItem'
import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'

export const Appointments = ({openModal}) => {
  const appointments = [
    {
    date: '20.12.2020',
    time: '13:00',
      patient: 'Попенко Д.В.',
    isOnline: true
    },
    {
    date: '20.12.2020',
    time: '13:30',
      patient: 'Заяць Є.Є.',
    isOnline: true
    },
    {
    date: '21.12.2020',
    time: '13:00',
      patient: 'Ільїн М.О.',
    isOnline: false
    },
    {
    date: '21.12.2020',
    time: '14:30',
      patient: 'Гребініченко М.В.',
    isOnline: false
    },
    {
    date: '22.12.2020',
    time: '14:00',
      patient: 'Лук`янець М.О.',
    isOnline: true
    },
  ]

  const mockedClick = (e) => {
    e.preventDefault()
  }

  return (
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
            {appointments.map((appointment, index) => <AppointmentItem key={index} index={index} appointment={appointment} openModal={openModal} />)}
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
                  1-5 з 5
                  </span>
                <a href="#" onClick={mockedClick}>
                  <img src={arrowLeft} className="meeting-arrow-left" />
                </a>
                <a href="#" onClick={mockedClick}>
                  <img src={arrowRight} className="meeting-arrow-right" />
                </a>
              </div>
            </div>
          </div>
  )
}
