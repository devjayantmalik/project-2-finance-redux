import React from "react";
import {
  ClaimAmount,
  CreatePolicy,
  DeletePolicy,
  TabsNav
} from "./finance-tabs";

const FinanceTabs = () => {
  return (
    <div className="container">
      <TabsNav />
      <div className="tab-content" id="pills-tabContent">
        <ClaimAmount />
        <CreatePolicy />
        <DeletePolicy />
      </div>
    </div>
  );
};

export default FinanceTabs;
