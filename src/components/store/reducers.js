import { combineReducers } from "redux";

// require(`../../assets/photo/${folder}/${i}.webp`);

const importImages = (folder, count) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    images.push(require(`../../assets/photo/${folder}/${i}.webp`));
  }
  return images;
};

const defaultState = {
  data: [
    {
      name: "Lacoste Gripshot BL21 in white",
      brand: "Lacoste",
      price: 100,
      size: [42, 43, 44, 45, 46, 47],
      color: "Brown",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Lacoste Gripshot BL21 in white", 3),
    },
    {
      name: "Lacoste Baseshot in black suede",
      brand: "Lacoste",
      price: 100,
      size: [42, 45, 46, 47],
      color: "Black",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Lacoste Baseshot in black suede", 4),
    },
    {
      name: "Lacoste Baseshot in green suede",
      brand: "Lacoste",
      price: 100,
      size: [42, 43, 44, 45, 46, 47],
      color: "Green",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Lacoste Baseshot in green suede", 4),
    },
    {
      name: "New Balance 1906R in grey",
      brand: "New Balance",
      price: 165,
      size: [42, 43, 44, 45, 46, 47],
      color: "Grey",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("New Balance 1906R in grey", 4),
    },
    {
      name: "New Balance 2002 in grey multi",
      brand: "New Balance",
      price: 145,
      size: [42, 45, 46, 47],
      color: "Grey",
      IsBestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("New Balance 2002 in grey multi", 4),
    },
    {
      name: "New Balance 574 in dark green and off white",
      brand: "New Balance",
      price: 145,
      size: [42, 43, 44, 45, 46, 47],
      color: "Green",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("New Balance 574 in dark green and off white", 4),
    },
    {
      name: "New Balance 2002 in tan",
      brand: "New Balance",
      price: 140,
      size: [42, 43, 45, 46, 47],
      color: "Brown",
      IsBestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("New Balance 2002 in tan", 4),
    },
    {
      name: "Adidas Originals Superstar XLG in collegiate burgundy",
      brand: "Adidas",
      price: 100,
      size: [42, 43, 44, 45, 46, 47],
      color: "Red",
      IsBestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages(
        "Adidas Originals Superstar XLG in collegiate burgundy",
        5
      ),
    },
    {
      name: "Adidas Originals Stan Smith",
      brand: "Adidas",
      price: 95,
      size: [42, 43, 44, 45, 46, 47],
      color: "White",
      IsBestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Adidas Originals Stan Smith", 4),
    },
    {
      name: "Adidas Originals Hamburg gum sole in brown",
      brand: "Adidas",
      price: 85,
      size: [42, 43, 44, 45, 46, 47],
      color: "Brown",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: true,
      img: importImages("Adidas Originals Hamburg gum sole in brown", 4),
    },
    {
      name: "Adidas Originals Ozweego in triple grey",
      brand: "Adidas",
      price: 105,
      size: [46, 47],
      color: "Grey",
      IsBestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Adidas Originals Ozweego in triple grey", 5),
    },
    {
      name: "Asics Gel-Nimbus 9 unisex in grey",
      brand: "Asics",
      price: 165,
      size: [42, 43, 44, 45, 46, 47],
      color: "Grey",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-Nimbus 9 unisex in grey", 4),
    },
    {
      name: "Asics Gel-NYC in grey",
      brand: "Asics",
      price: 155,
      size: [42, 43, 44, 45, 46, 47],
      color: "Grey",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-NYC in grey", 4),
    },
    {
      name: "Asics Gel-1130 in white",
      brand: "Asics",
      price: 100,
      size: [42, 43, 44, 45, 46, 47],
      color: "White",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-1130 in white", 5),
    },
    {
      name: "Asics Gel-NYC in black and white",
      brand: "Asics",
      price: 150,
      size: [42, 43, 44, 45, 46, 47],
      color: "Black",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-NYC in black and white", 4),
    },
    {
      name: "Vans SK8-Hi in black",
      brand: "Vans",
      price: 100,
      size: [42, 43, 44],
      color: "Black",
      IsBestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Vans SK8-Hi in black", 4),
    },
    {
      name: "Vans Old Skool in black with reflective flame print",
      brand: "Vans",
      price: 75,
      size: [42, 43, 44, 45, 46],
      color: "Black",
      IsBestSeller: true,
      IsNewProduct: true,
      IsOnSale: true,
      img: importImages(
        "Vans Old Skool in black with reflective flame print",
        4
      ),
    },
    {
      name: "Vans Authentic in green",
      brand: "Vans",
      price: 60,
      size: [42, 43, 44, 45, 46],
      color: "Green",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Vans Authentic in green", 4),
    },
    {
      name: "Vans Old Skool in walnut brown",
      brand: "Vans",
      price: 75,
      size: [42, 43, 44, 45, 46, 47],
      color: "Brown",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Vans Old Skool in walnut brown", 4),
    },
    {
      name: "Puma Morphic in black & red",
      brand: "Puma",
      price: 85,
      size: [42, 43, 44, 45, 46, 47],
      color: "Red",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Puma Morphic in black & red", 4),
    },
    {
      name: "Puma Slipstream Codura in puma black",
      brand: "Puma",
      price: 120,
      size: [42, 43, 44, 45, 46, 47],
      color: "Black",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Puma Slipstream Codura in puma black", 4),
    },
    {
      name: "Puma Morphic in black & green",
      brand: "Puma",
      price: 85,
      size: [42, 43],
      color: "Black",
      IsBestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Puma Morphic in black & green", 4),
    },
    {
      name: "Puma Slipstream in off white and dark brown",
      brand: "Puma",
      price: 100,
      size: [42, 43, 44, 45, 46, 47],
      color: "Brown",
      IsBestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Puma Slipstream in off white and dark brown", 4),
    },
    {
      name: "Nike Air Force 1 '07 White",
      brand: "Nike",
      price: 135,
      size: [42, 43, 44, 45, 46, 47],
      color: "White",
      IsBestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Nike Air Force 1 '07 White", 4),
    },
    {
      name: "Nike Air Force 1 '07 Black",
      brand: "Nike",
      price: 135,
      size: [42, 43, 44, 45, 46, 47],
      color: "Black",
      IsBestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Nike Air Force 1 '07 Black", 4),
    },
    {
      name: "Nike Air Max Plus Utility",
      brand: "Nike",
      price: 175,
      size: [42, 43, 44, 45, 46, 47],
      color: "Green",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: true,
      img: importImages("Nike Air Max Plus Utility", 4),
    },
    {
      name: "Nike Air VaporMax Plus",
      brand: "Nike",
      price: 250,
      size: [42, 43, 44, 45, 46, 47],
      color: "White",
      IsBestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Nike Air VaporMax Plus", 4),
    },
  ],
  cart: [],
  fav: [],
  activeItem: {},
  currentPage: 1,
};

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const ADD_TO_FAV = "ADD_TO_FAV";
const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
const JUMP_TO_PAGE = "JUMP_TO_PAGE";
const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";

const trainersReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case REMOVE_FROM_CART:
      const updatedCart = [...state.cart];
      updatedCart.splice(action.payload, 1);
      return { ...state, cart: updatedCart };
    case ADD_TO_FAV:
      return { ...state, fav: [...state.fav, action.payload] };
    case REMOVE_FROM_FAV:
      const updatedFav = [...state.fav];
      updatedFav.splice(action.payload, 1);
      return {
        ...state,
        fav: updatedFav,
      };
    case SET_ACTIVE_ITEM:
      return { ...state, activeItem: action.payload };
    default:
      return state;
  }
};

const pageReducer = (state = defaultState, action) => {
  switch (action.type) {
    case JUMP_TO_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  selectedType: trainersReducer,
  page: pageReducer,
});

export default rootReducer;
