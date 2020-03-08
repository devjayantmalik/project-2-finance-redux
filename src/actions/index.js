import { CREATE_POLICY, DELETE_POLICY, CLAIM_AMOUNT } from "./types";

export const createPolicy = (mobile, name, deposit) => {
  return {
    type: CREATE_POLICY,
    payload: {
      mobile: mobile,
      name: name,
      deposit: deposit
    }
  };
};

export const deletePolicy = mobile => {
  return {
    type: DELETE_POLICY,
    payload: mobile
  };
};

export const claimAmount = (policies, mobile, amount, reason) => {
  return {
    type: CLAIM_AMOUNT,
    payload: {
      policies: policies,
      mobile: mobile,
      amount: amount,
      reason: reason
    }
  };
};
