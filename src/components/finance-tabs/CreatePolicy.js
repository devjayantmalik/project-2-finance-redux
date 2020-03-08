import React from "react";

const CreatePolicy = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="page-create-policy"
      role="tabpanel"
    >
      <form>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Enter Mobile Number"
        />
        <input
          className="form-control my-2"
          type="text"
          placeholder="Enter Holder Name"
        />
        <input
          className="form-control my-2"
          type="text"
          placeholder="Enter Deposit Amount"
        />
        <button class="btn btn-primary btn-block my-2" type="submit">
          Claim Now
        </button>
      </form>
    </div>
  );
};

export { CreatePolicy };
