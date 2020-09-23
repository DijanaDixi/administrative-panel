import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { removeUserSession } from "../../utilis/Common";
import style from "./Header.module.css";

function Header() {

  let location = useLocation();

// logout button
  const logOutPage = () => {
    removeUserSession();
  };

  return (
    <div className={style.header}>
      <h1 className={style.colorHeader}>Reports Administration</h1>
      <nav className="nav float-right">
        <NavLink
          to="/"
          className="nav-link "
          href=""
          style={{ color: "cornsilk" }}
          exact
          activeClassName="active"
        >
          Reports
        </NavLink>
        <NavLink
          to="/wizard"
          className="nav-link "
          href="/"
          style={{ color: "cornsilk" }}
          activeClassName="active"
        >
          Create Reports
        </NavLink>
        {location.pathname !=="/login"?(
          <Link
            className="nav-link"
            style={{ color: "cornsilk" }}
            onClick={() => {
              logOutPage();
            }}
          >
            Logout
          </Link>
        ) : null}
      </nav>
    </div>
  );
}

export default withRouter(Header);
