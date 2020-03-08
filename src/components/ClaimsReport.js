import React from "react";

const ClaimsReport = ({ claims }) => {
  return (
    <div>
      <h2 className="mt-5 h5">Claims</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mobile</th>
            <th>Amount</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>{generateClaimsRows(claims)}</tbody>
      </table>
    </div>
  );
};

const generateClaimsRows = claims => {
  if (claims.length <= 0) {
    return (
      <tr>
        <td colSpan="3">No Claims Found.</td>
      </tr>
    );
  }

  return claims.map(claim => {
    return (
      <tr>
        <td>{claim.mobile}</td>
        <td>{claim.amount}</td>
        <td>{claim.reason}</td>
      </tr>
    );
  });
};

export default ClaimsReport;
