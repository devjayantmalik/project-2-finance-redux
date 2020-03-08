import React from "react";
import { connect } from "react-redux";
import { deletePolicy } from "../../actions";

class DeletePolicy extends React.Component {
  state = { mobile: "" };

  onFormSubmit = event => {
    event.preventDefault();

    // update the store
    this.props.deletePolicy(this.state.mobile);

    // clear the state and notify the user.
    this.setState({ mobile: "" });
    alert("Policy Deleted Successfully.");
  };

  render() {
    return (
      <div className="tab-pane fade" id="page-delete-policy" role="tabpanel">
        <form onSubmit={this.onFormSubmit}>
          <input
            value={this.state.mobile}
            onChange={e => this.setState({ mobile: e.target.value })}
            type="text"
            className="form-control my-2"
            placeholder="Enter Mobile Number"
          />
          <button className="btn btn-danger btn-block my-2" type="submit">
            Delete Policy
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
  { deletePolicy }
)(DeletePolicy);
