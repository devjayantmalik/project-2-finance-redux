import { combineReducers } from "redux";
import { CREATE_POLICY, CLAIM_AMOUNT, DELETE_POLICY } from "../actions/types";
import { validatePolicy, validateClaim } from "../validators";

const policyReducer = (state = [], action) => {
  if (action.type === CREATE_POLICY) {
    // validate the policy
    const isValid = validatePolicy(
      action.payload.mobile,
      action.payload.deposit
    );

    return isValid ? [...state, action.payload] : state;
  }

  if (action.type === DELETE_POLICY) {
    return state.filter(policy => policy.mobile !== action.payload);
  }

  return state;
};

const claimReducer = (state = [], action) => {
  if (action.type === CLAIM_AMOUNT) {
    const isActivePolicy = validateClaim(
      action.payload.policies,
      action.payload.mobile
    );

    // delete the policies from payload
    delete action.payload["policies"];

    // return the policies
    return isActivePolicy ? [...state, action.payload] : state;
  }

  return state;
};

export default combineReducers({
  policies: policyReducer,
  claims: claimReducer
});
