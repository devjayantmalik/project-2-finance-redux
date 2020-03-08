import React from "react";

const Hero = () => {
  return (
    <section className="jumbotron text-center">
      <h1 className="jumbotron-heading">Finance App</h1>
      <h2 className="h4 text-info">React and Redux Project</h2>
      <p className="lead text-dark">
        The application to practice react and redux skills. <br />
        The app will try to allow a user to signup for a policy and claim amount
        in case of any accident.
      </p>
      <p>
        <strong>
          Any Invalid Entry will be ignored but error will not be shown on the
          application page.
        </strong>
      </p>
    </section>
  );
};

export default Hero;
