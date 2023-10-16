// export const addFilter = ({ filterType, filterValue }) => {
//   return {
//     type: "ADD_FILTER",
//     payload: { filterType, filterValue },
//   };
// };

// export const removeFilter = ({ filterTyle, filterValue }) => {
//   return {
//     type: "REMOVE_FILTER",
//     payload: { filterTyle, filterValue },
//   };
// };

export const addToCart = (product) => {
  return {
    type: "ADD_TO_CART",
    payload: product,
  };
};
export const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: product,
  };
};
export const addToFav = (product) => {
  return {
    type: "ADD_TO_FAV",
    payload: product,
  };
};
export const removeFromFav = (product) => {
  return {
    type: "REMOVE_FROM_FAV",
    payload: product,
  };
};

export const setActiveItem = (item) => {
  return {
    type: "SET_ACTIVE_ITEM",
    payload: item,
  };
};

export const jumpToPage = (page) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  return {
    type: "JUMP_TO_PAGE",
    payload: page,
  };
};
