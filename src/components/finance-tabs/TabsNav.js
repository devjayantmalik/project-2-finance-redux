import React from "react";

const TabsNav = () => {
  return (
    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
      <li className="nav-item">
        <a
          className="nav-link active"
          data-toggle="pill"
          href="#page-create-policy"
          role="tab"
          aria-selected="true"
        >
          Create Policy
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-toggle="pill"
          href="#page-claim"
          role="tab"
          aria-selected="false"
        >
          Claim Amount
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          data-toggle="pill"
          href="#page-delete-policy"
          role="tab"
          aria-selected="false"
        >
          Delete Policy
        </a>
      </li>
    </ul>
  );
};

export { TabsNav };
