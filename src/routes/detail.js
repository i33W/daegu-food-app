import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./detail.module.css";

export default function Detail() {
  const params = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const getItem = async () => {
    const url = `/api/tasty.html?mode=json&addr=${params.gu}`;
    const response = await fetch(url);
    const json = await response.json();
    const items = json.data;

    items.map(async (item) => {
      if (item.OPENDATA_ID === params.id) {
        await setItem(item);
        setLoading(false);
      }
    });
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <main>
      {loading ? (
        <span>잠시만 기다려주세요...</span>
      ) : (
        <>
          <h2>상세페이지</h2>
          <hr />
          <ul>
            <li className={style.left}>순번: </li>
            <li className={style.right}>{item.cnt}</li>
            <li className={style.left}>고유 번호: </li>
            <li className={style.right}>{item.OPENDATA_ID}</li>
            <li className={style.left}>주소: </li>
            <li className={style.right}>{item.GNG_CS}</li>
            <li className={style.left}>음식카테고리: </li>
            <li className={style.right}>{item.FD_CS}</li>
            <li className={style.left}>음식점명: </li>
            <li className={style.right}>{item.BZ_NM}</li>
            <li className={style.left}>연락처: </li>
            <li className={style.right}>{item.TLNO}</li>
            <li className={style.left}>영업시간: </li>
            <li className={style.right}>{item.MBZ_HR}</li>
            <li className={style.left}>좌석수: </li>
            <li className={style.right}>{item.SEAT_CNT}</li>
            <li className={style.left}>주차장: </li>
            <li className={style.right}>{item.PKPL}</li>
            <li className={style.left}>웹사이트: </li>
            <li className={style.right}>{item.HP}</li>
            <li className={style.left}>가능언어: </li>
            <li className={style.right}>{item.PSB_FRN}</li>
            <li className={style.left}>예약가능여부: </li>
            <li className={style.right}>{item.BKN_YN}</li>
            <li className={style.left}>놀이시설여부: </li>
            <li className={style.right}>{item.INFN_FCL}</li>
            <li className={style.left}>조식여부: </li>
            <li className={style.right}>{item.BRFT_YN}</li>
            <li className={style.left}>후식여부: </li>
            <li className={style.right}>{item.DSSRT_YN}</li>
            <li className={style.left}>메뉴: </li>
            <li className={style.right}>{item.MNU}</li>
            <li className={style.left}>설명: </li>
            <li className={style.right}>{item.SMPL_DESC}</li>
            <li className={style.left}>지하철 오시는길: </li>
            <li className={style.right}>{item.SBW}</li>
            <li className={style.left}>버스 오시는길: </li>
            <li className={style.right}>{item.BUS}</li>
          </ul>
        </>
      )}
    </main>
  );
}
