import React from "react";
import "./storybook.scss";

import { CheckIcon16 } from ".";

export default {
  title: "Icons",
};

export const AllIcons = () => (
  <section className="storybook-icons">
    <CheckIcon16 />
  </section>
);

export const Check16 = () => <CheckIcon16 />;
