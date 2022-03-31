import React from "react";

const Footer = () => {
  return (
    <div class="text-center md:mt-8 px-6 mx-auto max-w-7xl  w-90w  text-neutral-dark-blue md:text-base mt-8 pb-2">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
        className="mx-1 font-bold text-blue hover:underline underline-offset-1"
      >
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://www.frontendmentor.io/profile/besttlookk"
        target="_blank"
        rel="noreferrer"
        className="mx-1 font-bold text-blue hover:underline underline-offset-1"
      >
        Prabhash Ranjan
      </a>
      .
    </div>
  );
};

export default Footer;
