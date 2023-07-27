import React from "react";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export const FlexBox = ({ children }: Props) => {
  return <div className={styles.flex}>{children}</div>;
};
