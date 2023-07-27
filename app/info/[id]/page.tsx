import { Button, FlexBox, HeartIcon } from "@/app/_components";
import { fetchArtDetailInfo } from "@/app/_utils/hooks";
import Image from "next/image";

type Props = {
  params: { id: string }; // URLのparam
};

// async書くことでSSRでfetchしてレンダリングまで完了してくれる
export default async function InfoPage({ params }: Props) {
  const artInfoData = await fetchArtDetailInfo(params.id);
  console.log(artInfoData, "artInfoData");

  return (
    <main>
      <FlexBox>
        <p>{artInfoData.title ?? "不明"}</p>
        <HeartIcon id={params.id} />
      </FlexBox>
      <Image
        src={artInfoData.primaryimageurl ?? ""}
        alt="image"
        width={artInfoData.images[0]?.width / 3 ?? 500} // サイズ大きいので3で割る
        height={artInfoData.images[0]?.height / 3 ?? 500} // サイズ大きいので3で割る
      />
      <p className="infoText">{`作者：${
        artInfoData.people[0]?.name ?? "不明"
      }`}</p>
      <p className="infoText">{`時代：${artInfoData.period ?? "不明"}`}</p>
      <p className="infoText">{`サイズ：${
        artInfoData.dimensions ?? "不明"
      }`}</p>
      <p className="infoText">{`連絡先：${artInfoData.contact ?? "不明"}`}</p>
      <FlexBox>
        <Button title="トップに戻る" herf="/" />
      </FlexBox>
    </main>
  );
}
