import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
function TouristDetail() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="tourist-detail">
        <section className="container">
          <ul className="d-flex pageNavbar">
            <li>
              <Link className="text-gray-500" to="/">
                首頁
              </Link>
            </li>
            <li>
              <span class="material-icons-outlined text-gray-700">
                navigate_next
              </span>
            </li>
            <li>
              <Link className="text-gray-500" to="/tour">
                景點查詢
              </Link>
            </li>
            <li>
              <span class="material-icons-outlined text-gray-700">
                navigate_next
              </span>
            </li>
            <li>
              <Link className="text-blue" to="/tour">
                景點查詢
              </Link>
            </li>
          </ul>
        </section>
        <section className="container">
          <div className="tourist-detail-main">
            <div>
              <div className="tourist-detail-title">
                <h1 className="text-blue">菜園休閒漁業區</h1>
                <span>觀光遊憩</span>
              </div>
              <div className="tourist-detail-info">
                <h2 className="text-gray-600">景點資訊</h2>
                <ul>
                  <li className="d-flex">
                    <img
                      src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/map.svg"
                      alt="map"
                    />
                    <span className="text-gray-600">
                      880 澎湖縣馬公市菜園里
                    </span>
                  </li>
                  <li className="d-flex">
                    <img
                      src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/phone.svg"
                      alt="phone"
                    />
                    <span className="text-gray-600">+886 6 921 6521</span>
                  </li>
                  <li className="d-flex">
                    <img
                      src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/time.svg"
                      alt="time"
                    />
                    <span className="text-gray-600">全天24小時開放</span>
                  </li>
                  <li className="d-flex">
                    <img
                      src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/transportation.svg"
                      alt="Transportation"
                    />
                    <span className="text-gray-600">
                      機車／汽車：自馬公市區經中華路，接縣道204至石泉國小右轉，205號縣道後左轉，看到「菜園生命公園」指標右轉，一小段路後即可到達。
                    </span>
                  </li>
                  <li className="d-flex">
                    <img
                      src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/information.svg"
                      alt="web"
                    />
                    <span className="text-gray-600">官方網站</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tourist-detail-image"></div>
          </div>
          <div>
            <h2 className="text-gray-600 tourist-detail-introduce">景點介紹</h2>
            <p className="tourist-detail-text text-gray-600">
              清代開墾初期，因地勢較低，水源豐沛且土壤肥沃，得以栽種一畝畝的綠色田園，因此以「菜園」命名。菜園位於馬公的東南方，緊臨青灣與測天島間的內灣，擁有豐富的海洋資源，經過人為開發後已成為多元化的生態園區，包含養殖漁業、溼地生態、珊瑚淺坪等。
              <br />
              <br />
              菜園漁港最大的產業特色是達60公頃面積的養殖漁業-牡蠣和近海箱網養殖，並已結合休閒觀光，發展出烤生蚵、餵海鱺等活動，讓遊客在海上體驗餵魚的樂趣，品嚐美味海鮮。玩家秘笈菜園休閒漁業區內有海上箱網養殖平台，開放給遊客前往垂釣跟餵魚，體驗澎湖漁民獨特的養殖方式，也享受跟魚群近距離接觸的樂趣。
              <br />
              <br />
              活動內容有牡蠣、箱網養殖生態解說，餵魚秀、海鱺/石斑/鯛魚拉力賽、趣鬥花枝或小管、餵食魟魚，無限量品嚐碳烤鮮蚵、海鮮粥或蚵仔麵線，菜園內灣活動安全性高(以業者現場公告為基準)。
            </p>
          </div>
        </section>
        <section style={{ textAlign: "center" }}>
          <img
            src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/scrollDown_default.svg"
            alt="scrollDown"
          />
        </section>
        <section className="container">
          <p className="tourist-detail-more-title">看更多馬祖相關行程</p>
          <ul className="tourist-detail-more-card">
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
          </ul>
        </section>
        <section className="container">
          <p className="tourist-detail-more-title">看更多馬祖相關行程</p>
          <ul className="tourist-detail-more-card">
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
            <li className="box-shadow">
              <div className="tourist-detail-more-card-img">
                <img src="../assets/image/header.jpeg" alt="" />
              </div>
              <div className="tourist-detail-more-card-body">
                <h3>景點名稱01</h3>
              </div>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default TouristDetail;
