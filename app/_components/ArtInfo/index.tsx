import Link from "next/link";
import styles from "./index.module.css";

type Props = {
  id: string;
  title: string;
  classification: string;
  dated: string;
};

export const ArtInfo = ({ id, title, classification, dated }: Props) => {
  return (
    <div>
      {/* next/link利用時は以下の設定方法しかダメ */}
      <Link href={`/info/${id}`} className={styles.title}>
        {title}
      </Link>
      <div>
        <p>{`部類：${classification}`}</p>
        <p>{`制作年：${dated}`}</p>
      </div>
    </div>
  );
};
