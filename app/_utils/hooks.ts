// ここには便利関数を記載
// このファイルはroutingからは除外される

const END_POINT = "https://api.harvardartmuseums.org/object";

/**
 * TopPageで海に関連する5つの作品情報を表示するのに利用
 * @returns 5つの作品情報
 */
export const fetchArtsInfo = async () => {
  const queryStringForTopPage = {
    apikey: "", // TODO: ここにAPIキーを入れる
    size: "5",
    title: "sea",
    classification: "Paintings",
  };
  const queryForTopPage = new URLSearchParams(queryStringForTopPage);

  return await fetch(`${END_POINT}?${queryForTopPage}`, {
    // cache: "no-store", // キャッシュを無効化するとログのcacheがMISSになる
  }).then((res) => res.json());
};

/**
 * TopPageで選択した任意の作品情報を表示するのに利用
 * @param id 作品のid
 * @returns 引数のidに対応する作品情報
 */
export const fetchArtDetailInfo = async (id: string) => {
  const queryStringForInfoPage = {
    apikey: "", // TODO: ここにAPIキーを入れる
  };
  const queryForInfoPage = new URLSearchParams(queryStringForInfoPage);

  return await fetch(`${END_POINT}/${id}?${queryForInfoPage}`).then((res) =>
    res.json(),
  );
};
