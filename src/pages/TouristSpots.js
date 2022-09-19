import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchAreaCity from "./components/SearchAreaCity";
import { Link } from "react-router-dom";
import { categoryData } from "./Data/TourData";
import { useEffect, useState, useRef } from "react";
function TouristSpots() {
  const [category, setCategory] = useState(categoryData);
  const [currentCity, setCurrentCity] = useState("Taipei");
  const data = useRef([]);
  const [allData, setAllData] = useState([]);
  const switchCategory = (e) => {
    setCategory(
      categoryData.map((item) =>
        item.id === e.target.id ? { ...item, checked: true } : item
      )
    );
  };
  useEffect(() => {
    // const api =
    //   "https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot?%24select=ScenicSpotID%2C%20ScenicSpotName%2C%20Description%2C%20Address%2C%20Picture&%24top=30&%24format=JSON";
    fetch(
      `https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot/${currentCity}?%24top=30&%24format=JSON`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // 等拿到金要在寫，因為沒有金鑰所以被鎖起來了：）
        const arr = [];
        // res.forEach((item) => {
        //   if (Object.keys(item.Picture).includes("PictureUrl1")) {
        //     arr.push(item);
        //     data.current = arr;
        //     console.log(item);
        //   }
        // });
        console.log(data.current);
        setAllData(data.current);
      });
    setCategory(
      categoryData.map((item) =>
        item.id === "all" ? { ...item, checked: true } : item
      )
    );
  }, [currentCity]);
  return (
    <>
      <header>
        <Navbar />
        <div className="tour-header"></div>
      </header>
      <main>
        <div className="container">
          <section>
            <ul className="d-flex">
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
                <Link className="text-blue" to="/tour">
                  景點查詢
                </Link>
              </li>
            </ul>
          </section>
          {/* <section>
            <div className="banner">
              <p className="text-blue">熱門景點</p>
              <ul>
                <li></li>
              </ul>
            </div>
          </section> */}
          <section className="main">
            <div className="side-tour-search">
              <div className="input-search">
                <input
                  className="box-shadow"
                  type="text"
                  placeholder="關鍵字查詢"
                />
                <button>
                  <span className="material-icons-outlined">search</span>
                </button>
              </div>
              <div className="card box-shadow">
                <div className="search-title">
                  <p
                    className="text-gray-600"
                    style={{ fontSize: "18px", marginBottom: "16px" }}
                  >
                    篩選內容
                  </p>
                  <p className="text-blue">地區/縣市</p>
                </div>
                <div className="select-group">
                  <SearchAreaCity
                    currentCity={currentCity}
                    setCurrentCity={setCurrentCity}
                  />
                </div>
                <p className="category-title text-blue">類別</p>
                <div className="category">
                  {category.map((item) => (
                    <label className="d-flex" key={item.id} htmlFor={item.id}>
                      <div className={item.checked ? "checked" : ""}></div>
                      <input
                        id={item.id}
                        type="checkbox"
                        value="{item.value}"
                        checked={item.checked}
                        onChange={switchCategory}
                      />
                      <span className="text-gray-600">{item.value}</span>
                    </label>
                  ))}
                </div>
                <div className="tour-search-btn">
                  <button className="font-garamond search-btn">SEARCH</button>
                </div>
              </div>
            </div>
            <div className="main-tour-list">
              <p className="search-result-title">搜尋結果</p>
              <ul>
                {allData.map((item) => (
                  <li className="card box-shadow" key={item.ScenicSpotID}>
                    <Link className="card" to={item.ScenicSpotID}>
                      <div className="card-image">
                        <img
                          src={item.Picture.PictureUrl1}
                          alt={item.ScenicSpotName}
                        />
                      </div>
                      <div className="card-body">
                        <div className="card-title">
                          <p>{item.ScenicSpotName}</p>
                          {/* {Object.keys(item).includes('Class') ? <p>{item.Class1}</p> : null} */}
                          <p>{item.Level}</p>
                        </div>
                        <p className="card-text">{item.DescriptionDetail}</p>
                        <div className="card-info">
                          <div>
                            <img
                              src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/site.svg"
                              alt="city"
                            />
                            <span>{item.City}</span>
                          </div>
                          {/* <div>
                          <img
                            src="https://raw.githubusercontent.com/wingfailam/taiwantravel/a129221346a00d1f241f0b9d2ea8077be1c0860c/src/assets/images/icons/time.svg"
                            alt="time"
                          />
                          <span>{item.OpenTime}</span>
                        </div> */}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default TouristSpots;
