export const setSelectedType = (selectedType) => {
  return {
    type: "SET_SELECTED_TYPE",
    payload: selectedType,
  };
};

export const setFilter = (selectedFilter) => {
  return {
    type: "SET_SELECTED_FILTER",
    payload: selectedFilter,
  };
};

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
