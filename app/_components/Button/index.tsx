"use client";

import { useRouter } from "next/navigation";
import styles from "./index.module.css";

type Props = {
  title: string;
  herf: string;
};

export const Button = ({ title, herf }: Props) => {
  const router = useRouter();
  const onClick = () => {
    router.push(herf);
  };
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};
