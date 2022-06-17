import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const guList = [
    "선택",
    "북구",
    "중구",
    "동구",
    "남구",
    "서구",
    "수성구",
    "달서구",
    "달성군",
  ];
  const [selectedGu, setSelectedGu] = useState("선택");
  const [itemList, setItemList] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChange = (event) => {
    setLoading(true);
    setSelectedGu(event.target.value);
  };

  const onClick = (event) => {};

  const getItemList = async () => {
    //   const url = `/api/tasty.html?mode=json&addr=${selectedGu}`;
    const url = `/kor/api/tasty.html?mode=json&addr=${selectedGu}`;

    console.log("  URL:", url);
    const response = await fetch(url);
    console.log("  Fetch complete");
    const json = await response.json();
    console.log("  Json complete");
    await setItemList(json.data);
    setLoading(false);
  };

  useEffect(() => {
    getItemList();
  }, [selectedGu]);

  return (
    <main>
      <h2>대구 맛집 정보</h2>
      <hr />
      <select
        name="selectGu"
        id="selectGu"
        value={selectedGu}
        onChange={onChange}
        disabled={loading}
      >
        {guList.map((gu) => {
          return (
            <option key={gu} value={gu}>
              {gu}
            </option>
          );
        })}
      </select>
      <hr />
      {loading ? (
        <span>로딩중...</span>
      ) : (
        <ol>
          {itemList.map((item) => {
            return (
              <li key={item.OPENDATA_ID} onClick={onClick}>
                <Link to={"/detail/" + selectedGu + "/" + item.OPENDATA_ID}>
                  {item.BZ_NM}
                </Link>
              </li>
            );
          })}
        </ol>
      )}
    </main>
  );
}
