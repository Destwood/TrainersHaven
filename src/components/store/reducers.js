import { combineReducers } from "redux";
import shoes01 from "../../assets/trainers01.webp";
import shoes02 from "../../assets/trainers02.png";
import shoes03 from "../../assets/trainers03.png";
import shoes04 from "../../assets/trainers04.png";

import { act } from "react-dom/test-utils";

const defaultState = {
  sneakersArray: [
    {
      name: "Sneakers Model 1",
      price: 1000,
      pic: [shoes01, shoes02, shoes03, shoes04],
    },
    {
      name: "Sneakers Model 2",
      price: 1200,

      pic: [shoes02, shoes01, shoes03, shoes03],
    },
    {
      name: "Sneakers Model 3",
      price: 800,
      pic: [shoes03, shoes02, shoes01, shoes02],
    },
    {
      name: "Sneakers Model 4",
      price: 950,
      pic: [shoes04, shoes02, shoes03, shoes01],
    },
    {
      name: "Sneakers Model 5",
      price: 1100,
      pic: [shoes01, shoes02, shoes03, shoes04],
    },
    {
      name: "Sneakers Model 6",
      price: 1300,
      pic: [shoes01, shoes02, shoes03, shoes04],
    },
    {
      name: "Sneakers Model 7",
      price: 900,
      pic: [shoes01, shoes02, shoes03, shoes04],
    },
    {
      name: "Sneakers Model 8",
      price: 1150,
      pic: [shoes01, shoes02, shoes03, shoes04],
    },
  ],
  cart: [],
  currentPage: 1,
};

const cart = [];

const SET_SELECTED_TYPE = "SET_SELECTED_TYPE";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const JUMP_TO_PAGE = "JUMP_TO_PAGE";

const trainersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_TYPE:
      return {};
    case ADD_TO_CART:
      return {};
    case REMOVE_FROM_CART:
      return {};
    default:
      return defaultState;
  }
};

const pageReducer = (state = defaultState, action) => {
  console.log(`page: ${action.payload}`);
  switch (action.type) {
    case JUMP_TO_PAGE:
      return { ...state, page: action.payload };
    default:
      return defaultState;
  }
};

const rootReducer = combineReducers({
  selectedType: trainersReducer,
  page: pageReducer,
});

export default rootReducer;
