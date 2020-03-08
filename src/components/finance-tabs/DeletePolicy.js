import React from "react";

const DeletePolicy = () => {
  return (
    <div className="tab-pane fade" id="page-delete-policy" role="tabpanel">
      <form>
        <input
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
};

export { DeletePolicy };
