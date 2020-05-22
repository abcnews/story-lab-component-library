import React from "react";
import { EmbedContainer } from "./EmbedContainer";

export default {
  title: "EmbedContainer"
};
const content = (
  <div>
    Here's a bunch of content inside the <code>EmbedContainer</code> component.
  </div>
);
export const Full = () => (
  <EmbedContainer embed="full">{content}</EmbedContainer>
);
export const Right = () => (
  <EmbedContainer embed="right">{content}</EmbedContainer>
);
