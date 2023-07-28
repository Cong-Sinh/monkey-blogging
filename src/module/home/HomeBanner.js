import React from "react";
import styled from "styled-components";
import { Button } from "../../components/button";

const HomeBannerStyles = styled.div`
  height: 520px;
  padding: 40px 0;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );
  margin-bottom: 60px;
  .banner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-content {
      max-width: 600px;
      color: white;
    }

    &-heading {
      font-size: 36px;
      margin-bottom: 20px;
    }
    &-desc {
      line-height: 1.75;
      margin-bottom: 40px;
    }
  }
`;
const HomeBanner = () => {
  return (
    <HomeBannerStyles>
      <div className="container">
        <div className="banner">
          <div className="banner-content">
            <h1 className="banner-heading">Monkey Blogging</h1>
            <p className="banner-desc">
              loremdafgdfgsdgskmdsfbngm,dsnvsdfmnvdsmnvfdmsvndmsfvndsfmvsdfmvmndfsvdsfvmn,sdmnsfvnmsmsdfvndsfvfd
            </p>
            <Button
              style={{ display: "inline-block" }}
              type="button"
              to="/sign-up"
              kind="secondary"
            >
              Get started
            </Button>
          </div>
          <div className="banner-image">
            <img src="/img-banner.png" alt="logo-header" />
          </div>
        </div>
      </div>
    </HomeBannerStyles>
  );
};

export default HomeBanner;
