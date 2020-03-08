import React from "react";

const PoliciesReport = ({ policies }) => {
  return (
    <div>
      <h2 className="mt-5 h5">Policies</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Mobile</th>
            <th>Holder</th>
            <th>Deposited</th>
          </tr>
        </thead>
        <tbody>{generatePoliciesRows(policies)}</tbody>
      </table>
    </div>
  );
};

const generatePoliciesRows = policies => {
  if (policies.length <= 0) {
    return (
      <tr>
        <td colSpan="3">No Policies Found.</td>
      </tr>
    );
  }

  return policies.map(policy => {
    return (
      <tr key={policy.mobile}>
        <td>{policy.mobile}</td>
        <td>{policy.name}</td>
        <td>$ {policy.deposit}</td>
      </tr>
    );
  });
};

export default PoliciesReport;
