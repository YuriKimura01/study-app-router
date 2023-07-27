"use client";
//  マウスイベント（onClick）を持つコンポーネントはクライアントレンダリングでの生成を行う

import clsx from "clsx";
import { useState } from "react";
import styles from "./index.module.css";

type Props = {
  id: string;
};

export const HeartIcon = ({ id }: Props) => {
  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    if (clicked) return;
    setClicked(true);
    window.alert("お気に入りに追加しました");
  };
  return (
    <div
      className={clsx(styles.heart, { [styles.clicked]: clicked })}
      onClick={onClick}
    />
  );
};
