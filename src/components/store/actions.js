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

export const jumpToPage = (page) => {
  return {
    type: "JUMP_TO_PAGE",
    payload: page,
  };
};
