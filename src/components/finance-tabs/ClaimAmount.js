import React from "react";
import { connect } from "react-redux";
import { claimAmount } from "../../actions";

class ClaimAmount extends React.Component {
  state = { mobile: "", amount: 0, reason: "" };

  formSubmitted = event => {
    event.preventDefault();

    // claim amount
    const { mobile, amount, reason } = this.state;
    this.props.claimAmount(this.props.policies, mobile, amount, reason);

    // reset the state and notify the user.
    this.setState({ mobile: "", amount: 0, reason: "" });
    alert("Successfully claimed amount");
  };

  render() {
    return (
      <div className="tab-pane fade" id="page-claim" role="tabpanel">
        <form onSubmit={this.formSubmitted}>
          <input
            value={this.state.mobile}
            onChange={e => this.setState({ mobile: e.target.value })}
            className="form-control my-2"
            type="text"
            placeholder="Enter Mobile Number"
          />
          <div className="input-group my-2">
            <label className="input-group-prepend">
              <span className="input-group-text">Enter Claim Amount</span>
            </label>
            <input
              value={this.state.amount}
              onChange={e => this.setState({ amount: e.target.value })}
              className="form-control"
              type="number"
              placeholder="Enter Claim Amount"
            />
          </div>

          <input
            value={this.state.reason}
            onChange={e => this.setState({ reason: e.target.value })}
            className="form-control my-2"
            type="text"
            placeholder="Enter Claim Reason"
          />
          <button className="btn btn-primary btn-block my-2" type="submit">
            Claim Now
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ claims, policies }) => {
  return { claims, policies };
};

export default connect(
  mapStateToProps,
  { claimAmount }
)(ClaimAmount);
