export const validatePolicy = (mobile, deposit) => {
  if (isFinite(mobile) && mobile.length === 10 && isFinite(deposit)) {
    return true;
  }
  return false;
};

export const validateClaim = (policies, mobile) => {
  // check if mobile is valid
  if (isFinite(mobile) && mobile.length === 10) {
    const isFound = policies.filter(policy => policy.mobile === mobile);

    return isFound.length === 0 ? false : true;
  }

  return false;
};
