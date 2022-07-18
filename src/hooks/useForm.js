import React, { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToogle: 'CONSENT TOOGlE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.filed]: action.value,
      };
    case actionTypes.clearValues:
      return {
        ...action.initialValue,
      };

    case actionTypes.consentToogle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialValue) => {
  const [formValues, dispatch] = useReducer(reducer, initialValue);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      filed: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({
      type: actionTypes.clearValues,
      initialValue,
    });
  };
  const handleThrowError = (errorMessage) => {
    dispatch({
      type: actionTypes.throwError,
      errorValue: errorMessage,
    });
  };

  const handleToogleConsent = () => {
    dispatch({ type: actionTypes.consentToogle });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToogleConsent,
  };
};
