import React from 'react'

export const AppointmentItem = ({appointment, index, openModal}) => {
  return (
    <tr>
                    <td>{appointment.date}</td>
                    <td>{appointment.time}</td>
                    <td>{appointment.patient}</td>
      <td>
        <div className="button-div">
          <button className="format-button" onClick={() => openModal(appointment.isOnline ? 1 : 2, index)}>
            {appointment.isOnline ? 'Онлайн' : 'Особиста зустріч'}
            </button>
          </div>
      </td>
    </tr>
  )
}
