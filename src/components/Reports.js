import React from "react";
import { connect } from "react-redux";
import ClaimsReport from "./ClaimsReport";
import PoliciesReport from "./PoliciesReport";

const Reports = props => {
  return (
    <section className="container my-5">
      <ClaimsReport claims={props.claims} />
      <PoliciesReport policies={props.policies} />
    </section>
  );
};

const mapStateToProps = ({ policies, claims }) => {
  return { policies, claims };
};

export default connect(mapStateToProps)(Reports);
