import { ArtInfo } from "./_components";
import { fetchArtsInfo } from "./_utils/hooks";

// async書くことでSSRでfetchしてレンダリングまで完了してくれる
export default async function Home() {
  const artInfoData = await fetchArtsInfo();

  return (
    <main>
      {artInfoData.records.map((artInfo: any) => {
        return (
          <ArtInfo
            key={artInfo.id}
            id={artInfo.id}
            title={artInfo.title ?? "不明"}
            classification={artInfo.classification ?? "不明"}
            dated={artInfo.dated ?? "不明"}
          />
        );
      })}
    </main>
  );
}
