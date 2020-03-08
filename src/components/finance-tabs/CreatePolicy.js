import React from "react";
import { connect } from "react-redux";
import { createPolicy } from "../../actions";

class CreatePolicy extends React.Component {
  state = { mobile: "", holder: "", amount: 0 };

  onFormSubmit = event => {
    event.preventDefault();

    // create a policy
    const { mobile, holder, amount } = this.state;
    this.props.createPolicy(mobile, holder, amount);

    // clear the state and notify the user.
    this.setState({ mobile: "", holder: "", amount: 0 });
    alert("Policy created successfully.");
  };

  render() {
    return (
      <div
        className="tab-pane fade show active"
        id="page-create-policy"
        role="tabpanel"
      >
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.state.mobile}
            onChange={e => this.setState({ mobile: e.target.value })}
            className="form-control my-2"
            type="text"
            placeholder="Enter Mobile Number"
          />
          <input
            value={this.state.holder}
            onChange={e => this.setState({ holder: e.target.value })}
            className="form-control my-2"
            type="text"
            placeholder="Enter Holder Name"
          />
          <input
            value={this.state.amount}
            onChange={e => this.setState({ amount: e.target.value })}
            className="form-control my-2"
            type="number"
            placeholder="Enter Deposit Amount"
          />
          <button className="btn btn-primary btn-block my-2" type="submit">
            Create Policy Now
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ policies }) => {
  return { policies };
};

export default connect(
  mapStateToProps,
  { createPolicy }
)(CreatePolicy);
