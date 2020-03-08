import React from "react";
import { TabsNav } from "./finance-tabs";
import ClaimAmount from "./finance-tabs/ClaimAmount";
import CreatePolicy from "./finance-tabs/CreatePolicy";
import DeletePolicy from "./finance-tabs/DeletePolicy";

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
