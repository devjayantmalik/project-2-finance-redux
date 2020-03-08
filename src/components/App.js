import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FinanceTabs from "./FinanceTabs";
import Reports from "./Reports";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FinanceTabs />
        <Reports />
      </main>
    </div>
  );
};

export default App;
