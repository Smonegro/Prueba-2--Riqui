import React from "react";
import styled from "styled-components";

const Navigation = (props) => {
  return (
    <Nav>
      <ul className="nav ul">
        {props.isLoggedIn && (
          <li className="nav li">
            <a className="nav a" href="/">
              Users Admin
            </a>
          </li>
        )}
        {props.isLoggedIn && (
          <li className="nav li">
            <button className="nav button" onClick={props.onLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </Nav>
  );
};

export default Navigation;

const Nav = styled.nav`
  .nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  .nav li {
    margin: 0;
    margin-left: 2rem;
  }

  .nav a {
    text-decoration: none;
    color: white;
  }

  .nav a:hover,
  .nav a:active {
    color: #f3cafb;
  }

  .nav button {
    font: inherit;
    background: #892ea5;
    border: 1px solid #dd0db0;
    padding: 0.5rem 1.5rem;
    color: white;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
    border-radius: 20px;
  }

  .nav button:focus {
    outline: none;
  }

  .nav button:hover,
  .nav button:active {
    color: #f3cafb;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.26);
  }
`;
