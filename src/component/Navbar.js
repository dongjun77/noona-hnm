import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const search = (event) => {
    if (event.key === "Enter") {
      //입력한 검색어를 읽어와서
      let keyword = event.target.value;

      //url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div>
        {authenticate ? (
          <div class="login-button" onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그아웃</div>
          </div>
        ) : (
          <div class="login-button" onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <div>로그인</div>
          </div>
        )}
      </div>
      <div className="nav-section" onClick={() => navigate("/")}>
        <img
          className="logo-img"
          width={100}
          src="https://churchillsquare.com/wp-content/uploads/2018/05/h-m.png"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => {
            return <li>{menu}</li>;
          })}
        </ul>
        <div>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" onKeyPress={(event) => search(event)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
