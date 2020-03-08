import { combineReducers } from "redux";
import { CREATE_POLICY, CLAIM_AMOUNT, DELETE_POLICY } from "../actions/types";

const policyReducer = (state = [], action) => {
  if (action.type === CREATE_POLICY) {
    return [...state, action.payload];
  }

  if (action.type === DELETE_POLICY) {
    return state.filter(policy => policy.mobile !== action.payload);
  }

  return state;
};

const claimReducer = (state = [], action) => {
  if (action.type === CLAIM_AMOUNT) {
    return [...state, action.payload];
  }

  return state;
};

export default combineReducers({
  policies: policyReducer,
  claims: claimReducer
});
