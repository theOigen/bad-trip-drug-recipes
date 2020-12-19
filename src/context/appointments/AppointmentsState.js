import React, { useReducer } from 'react';
import axios from 'axios';
import AppointmentsContext from './appointmentsContext';
import appointmentsReducer from './appointmentsReducer';
import {
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENT_BY_ID,
  GET_APPOINTMENT_BY_ID_SUCCESS,
  GET_MORE_APPOINTMENTS,
  GET_MORE_APPOINTMENTS_SUCCESS,
  APPOINTMENTS_ERROR,
  CLEAR_APPOINTMENTS_ERRORS,
} from '../actionsTypes';

import {
  DEFAULT_PAGE,
  DEFAULT_AMOUNT_PER_PAGE
} from '../constants'

const AppointmentsState = props => {
  const initialState = {
    appointments: [],
    appointment: null,
    page: DEFAULT_PAGE,
    amountPerPage: DEFAULT_AMOUNT_PER_PAGE,
    loading: false,
    error: null
  };

  const [state, dispatch] = useReducer(appointmentsReducer, initialState);

  const getAppointments = async (page, amountPerPage) => {
    dispatch({
      type: GET_APPOINTMENTS
    })
    try {
      const res = await axios.get(`/api/appointments?p=${page}&n=${amountPerPage}`)

      res.data && dispatch({
        type: GET_APPOINTMENTS_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: APPOINTMENTS_ERROR,
        payload: error
      })
    }
  }

  const getMoreAppointments = async (page, amountPerPage) => {
    dispatch({
      type: GET_MORE_APPOINTMENTS
    })
    try {
      const res = await axios.get(`/api/appointments/more?p=${page}&n=${amountPerPage}`)

      res.data && dispatch({
        type: GET_MORE_APPOINTMENTS_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: APPOINTMENTS_ERROR,
        payload: error
      })
    }
  }

  const getAppointmentById = async (id) => {
    dispatch({ type: GET_APPOINTMENT_BY_ID })
    try {
      const res = await axios.get(`/api/appointments/${id}`)

      res.data && dispatch({
        type: GET_APPOINTMENT_BY_ID_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      dispatch({
        type: APPOINTMENTS_ERROR,
        payload: error
      })
    }
  }

  const clearErrors = () => {
    dispatch({ type: CLEAR_APPOINTMENTS_ERRORS });
  };

  return (
    <AppointmentsContext.Provider
      value={{
        ...state,
        getAppointments,
        getMoreAppointments,
        getAppointmentById,
        clearErrors
      }}
    >
      {props.children}
    </AppointmentsContext.Provider>
  );
};

export default AppointmentsState;