import React from "react";
import styles from "./EmbedContainer.scss";

export const EmbedContainer = ({ children, embed, className }) => {
  const cns = [styles.embedContainer];
  if (embed === "right") cns.push(styles.right);
  if (embed === "full") cns.push(styles.full);
  cns.push(className);
  return <aside className={cns.join(" ")}>{children}</aside>;
};
