import React from "react";

class ClaimAmount extends React.Component {
  render() {
    return (
      <div className="tab-pane fade" id="page-claim" role="tabpanel">
        <form>
          <input
            className="form-control my-2"
            type="text"
            placeholder="Enter Mobile Number"
          />
          <input
            className="form-control my-2"
            type="text"
            placeholder="Enter Claim Amount"
          />
          <input
            className="form-control my-2"
            type="text"
            placeholder="Enter Claim Reason"
          />
          <button class="btn btn-primary btn-block my-2" type="submit">
            Claim Now
          </button>
        </form>
      </div>
    );
  }
}

export { ClaimAmount };
