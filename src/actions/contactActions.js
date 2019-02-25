import {
  GET_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  ADD_CONTACT
} from "./types";
import axios from "axios";

export const getContacts = () => async dispatch => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

export const getContact = id => async dispatch => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
};

export const addContact = newContact => async dispatch => {
  const res = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    newContact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
