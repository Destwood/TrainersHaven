import { createStore } from "redux";
import rootReducer from "./reducers";
import { setSelectedType, addToCart, removeFromCart } from "./actions";

const store = createStore(rootReducer);

export default store;
