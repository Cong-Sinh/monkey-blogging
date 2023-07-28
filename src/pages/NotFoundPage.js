import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NotFoundPageStyles = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .logo {
    display: inline-block;
    margin-bottom: 40px;
  }
  .header {
    font-size: 40px;
    margin-bottom: 40px;
  }

  .back {
    display: inline-block;
    padding: 15px 30px;
    color: white;
    background-color: ${(props) => props.theme.primary};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme.primary};
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageStyles>
      <NavLink to={"/"}>
        <img srcSet="/logo.png 2x" alt="monkey-blogging" />
      </NavLink>
      <h1 className="header">Oops! Page not found</h1>
      <NavLink className="back" to={"/"}>
        Back to Home
      </NavLink>
    </NotFoundPageStyles>
  );
};

export default NotFoundPage;
