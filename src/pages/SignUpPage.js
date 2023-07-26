import { Label } from "../components/label";
import React, { Children } from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { IconEyeOpen } from "../components/icon";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }

  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
  }

  .field {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: flex-start;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const { control } = useForm({});
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo"></img>

        <h1 className="heading">Monkey blogging</h1>
        <form className="form">
          <div className="field">
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              name="fullname"
              placeholder="enter your fullname"
              type="text"
              control={control}
            ></Input>
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
