import React from "react";
import supervisorIcon from "./images/icon-supervisor.svg";
import teamBuilderIcon from "./images/icon-team-builder.svg";
import karmaIcon from "./images/icon-karma.svg";
import calculatorICon from "./images/icon-calculator.svg";
import Card from "./components/Card";
import Footer from "./layouts/Footer";

function App() {
  return (
    <>
      <main class="p-6 mx-auto max-w-6xl  w-90w ">
        {/*  */}
        <section className="mt-6 text-center lg:mt-0">
          <h1 className="text-2xl font-extralight text-neutral-dark-blue md:text-3xl">
            Reliable, efficient delivery{" "}
            <span className="block font-semibold">Powered by Technology</span>
          </h1>

          <p className="mt-6 text-center text-neutral-grayish-blue md:text-lg md:mx-auto md:max-w-2xl">
            Our Artificial intelligence powered tools use millions of people
            data points to ensure that your project is successful
          </p>
        </section>

        <section className="grid items-center grid-cols-1 gap-6 mt-14 lg:grid-flow-col md:mt-12 md:grid-cols-2 lg:grid-cols-3 ">
          <Card
            label="Supervisor"
            content="Monitors activity to identify project roadblocks"
            borderClass="border-cyan lg:row-span-2 place-content-end"
          >
            <img src={supervisorIcon} alt="icon" />
          </Card>

          <Card
            label="Team Builder"
            content="Scans our talent network to create the optimal team for your project"
            borderClass="border-red"
          >
            <img src={teamBuilderIcon} alt="icon" />
          </Card>

          <Card
            label="Karma"
            content="Regularly evaluates our talent to ensure quality"
            borderClass="border-orange"
          >
            <img src={karmaIcon} alt="icon" />
          </Card>

          <Card
            label="Calculator"
            content="Uses data from past projects to provide better delivery estimates"
            borderClass="border-blue lg:row-span-2 place-content-start"
          >
            <img src={calculatorICon} alt="icon" />
          </Card>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
