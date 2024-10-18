import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { clearCookie } from "src/utils/cookie";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProfile } from "src/services/user";

function Header() {
  const querClient = useQueryClient();
  const navigate = useNavigate();
  const { data } = useQuery({ queryKey: ["profile"], queryFn: getProfile });
  const clickHandler = () => {
    clearCookie();
    querClient.invalidateQueries("profile");
    navigate("/");
  };
  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="divarدیوار" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="" />
            <p>دیوار من</p>
          </span>
        </Link>
        {data?.data?.role === "ADMIN" ? (
          <Link to="/admin">
            <span>
              <img src="profile.svg" alt="" />
              <p>پنل ادمین</p>
            </span>
          </Link>
        ) : null}
        {data ? (
          <span>
            <button onClick={clickHandler}>خروج</button>
          </span>
        ) : null}
        
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
