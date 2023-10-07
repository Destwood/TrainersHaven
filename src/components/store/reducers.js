import { combineReducers } from "redux";

// require(`../../assets/photo/${folder}/${i}.webp`);
console.log(require(`../../assets/photo/${`New Balance 2002 in tan`}/1.webp`));

const importImages = (folder, count) => {
  try {
    const images = [];
    for (let i = 1; i <= count; i++) {
      images.push(require(`../../assets/photo/${folder}/${i}.webp`));
    }
    return images;
  } catch (e) {
    console.log(e);
  }
};

const defaultState = {
  data: [
    {
      Name: "New Balance 2002 in tan",
      Brand: "New Balance",
      Price: "140$",
      Size: [42, 43, 45, 46, 47],
      Color: "brown",
      BestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("New Balance 2002 in tan", 4),
    },
    {
      Name: "Lacoste Gripshot BL21 in white",
      Brand: "Lacoste",
      Price: "100$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "brown",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Lacoste Gripshot BL21 in white", 3),
    },
    {
      Name: "Lacoste Baseshot in black suede",
      Brand: "Lacoste",
      Price: "100$",
      Size: [42, 45, 46, 47],
      Color: "black",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Lacoste Baseshot in black suede", 4),
    },
    {
      Name: "Lacoste Baseshot in green suede",
      Brand: "Lacoste",
      Price: "100$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "green",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Lacoste Baseshot in green suede", 4),
    },
    {
      Name: "New Balance 1906R in grey",
      Brand: "New Balance",
      Price: "165$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "grey",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("New Balance 1906R in grey", 4),
    },
    {
      Name: "New Balance 2002 in grey multi",
      Brand: "New Balance",
      Price: "145$",
      Size: [42, 45, 46, 47],
      Color: "grey",
      BestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("New Balance 2002 in grey multi", 4),
    },
    {
      Name: "New Balance 574 in dark green and off white",
      Brand: "New Balance",
      Price: "145$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "green",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("New Balance 574 in dark green and off white", 4),
    },
    {
      Name: "Adidas Originals Superstar XLG in collegiate burgundy",
      Brand: "Adidas",
      Price: "100$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "red",
      BestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages(
        "Adidas Originals Superstar XLG in collegiate burgundy",
        5
      ),
    },
    {
      Name: "Adidas Originals Stan Smith",
      Brand: "Adidas",
      Price: "95$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "white",
      BestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Adidas Originals Stan Smith", 4),
    },
    {
      Name: "Adidas Originals Hamburg gum sole in brown",
      Brand: "Adidas",
      Price: "85$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "brown",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: true,
      img: importImages("Adidas Originals Hamburg gum sole in brown", 4),
    },
    {
      Name: "Adidas Originals Ozweego in triple grey",
      Brand: "Adidas",
      Price: "105$",
      Size: [46, 47],
      Color: "grey",
      BestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Adidas Originals Ozweego in triple grey", 5),
    },
    {
      Name: "Asics Gel-Nimbus 9 unisex in grey",
      Brand: "Asics",
      Price: "165$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "grey",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-Nimbus 9 unisex in grey", 4),
    },
    {
      Name: "Asics Gel-NYC in grey",
      Brand: "Asics",
      Price: "155$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "grey",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-NYC in grey", 4),
    },
    {
      Name: "Asics Gel-1130 in white",
      Brand: "Asics",
      Price: "100$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "white",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-1130 in white", 5),
    },
    {
      Name: "Asics Gel-NYC in black and white",
      Brand: "Asics",
      Price: "150$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "black",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Asics Gel-NYC in black and white", 4),
    },
    {
      Name: "Vans SK8-Hi in black",
      Brand: "Vans",
      Price: "100$",
      Size: [42, 43, 44],
      Color: "black",
      BestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Vans SK8-Hi in black", 4),
    },
    {
      Name: "Vans Old Skool in black with reflective flame print",
      Brand: "Vans",
      Price: "75$",
      Size: [42, 43, 44, 45, 46],
      Color: "black",
      BestSeller: true,
      IsNewProduct: true,
      IsOnSale: true,
      img: importImages(
        "Vans Old Skool in black with reflective flame print",
        4
      ),
    },
    {
      Name: "Vans Authentic in green",
      Brand: "Vans",
      Price: "60$",
      Size: [42, 43, 44, 45, 46],
      Color: "green",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Vans Authentic in green", 4),
    },
    {
      Name: "Vans Old Skool in walnut brown",
      Brand: "Vans",
      Price: "75$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "brown",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Vans Old Skool in walnut brown", 4),
    },
    {
      Name: "Puma Morphic in black & red",
      Brand: "Puma",
      Price: "85$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "red",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Puma Morphic in black & red", 4),
    },
    {
      Name: "Puma Slipstream Codura in puma black",
      Brand: "Puma",
      Price: "120$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "black",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Puma Slipstream Codura in puma black", 4),
    },
    {
      Name: "Puma Morphic in black & green",
      Brand: "Puma",
      Price: "85$",
      Size: [42, 43],
      Color: "black",
      BestSeller: false,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Puma Morphic in black & green", 4),
    },
    {
      Name: "Puma Slipstream in off white and dark brown",
      Brand: "Puma",
      Price: "100$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "brown",
      BestSeller: true,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Puma Slipstream in off white and dark brown", 4),
    },
    {
      Name: "Nike Air Force 1 '07 White",
      Brand: "Nike",
      Price: "135$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "white",
      BestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Nike Air Force 1 '07 White", 4),
    },
    {
      Name: "Nike Air Force 1 '07 Black",
      Brand: "Nike",
      Price: "135$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "black",
      BestSeller: true,
      IsNewProduct: false,
      IsOnSale: false,
      img: importImages("Nike Air Force 1 '07 Black", 4),
    },
    {
      Name: "Nike Air Max Plus Utility",
      Brand: "Nike",
      Price: "175$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "green",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: true,
      img: importImages("Nike Air Max Plus Utility", 4),
    },
    {
      Name: "Nike Air Max Plus Utility",
      Brand: "Nike",
      Price: "250$",
      Size: [42, 43, 44, 45, 46, 47],
      Color: "white",
      BestSeller: false,
      IsNewProduct: true,
      IsOnSale: false,
      img: importImages("Nike Air Max Plus Utility", 4),
    },
  ],
  cart: [],
  currentPage: 1,
};
console.log(defaultState.data[0].img);
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
