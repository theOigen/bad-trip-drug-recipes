import {
  GET_APPOINTMENTS,
  GET_APPOINTMENTS_SUCCESS,
  GET_MORE_APPOINTMENTS,
  GET_MORE_APPOINTMENTS_SUCCESS,
  GET_APPOINTMENT_BY_ID,
  GET_APPOINTMENT_BY_ID_SUCCESS,
  APPOINTMENTS_ERROR,
  CLEAR_APPOINTMENTS_ERRORS
} from '../actionsTypes';

const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_APPOINTMENTS:
    case GET_MORE_APPOINTMENTS:
    case GET_APPOINTMENT_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_MORE_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: [...state.appointments, ...payload.appointments],
        page: payload.page,
        amountPerPage: payload.amountPerPage

      }
    case GET_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        appointments: payload.appointments,
        page: payload.page,
        amountPerPage: payload.amountPerPage
      }
    case GET_APPOINTMENT_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        appointment: payload
      }
    case APPOINTMENTS_ERROR:
      return {
        ...state,
        loading: false,
        appointments: null,
        appointment: null,
        error: payload
      };
    case CLEAR_APPOINTMENTS_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;