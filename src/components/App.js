import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import FinanceTabs from "./FinanceTabs";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FinanceTabs />
      </main>
    </div>
  );
};

export default App;
