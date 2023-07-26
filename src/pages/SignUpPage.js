import { Label } from "../components/label";
import React, { Children, useState } from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Field } from "../components/field";

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

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const SignUpPage = () => {
  const { control } = useForm({});
  const [togglePassword, setTooglePassword] = useState(false);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo"></img>

        <h1 className="heading">Monkey blogging</h1>
        <form className="form">
          <Field>
            <Label htmlFor="fullname">Fullname</Label>
            <Input
              name="fullname"
              placeholder="enter your fullname"
              type="text"
              control={control}
            ></Input>
          </Field>

          <Field>
            <Label htmlFor="email">Email address</Label>
            <Input
              name="email"
              placeholder="enter your Email"
              type="email"
              control={control}
            ></Input>
          </Field>

          <Field>
            <Label htmlFor="password">password</Label>
            <Input
              name="password"
              placeholder="enter your password"
              type={togglePassword ? "text" : "password"}
              control={control}
            >
              {!togglePassword ? (
                <IconEyeClose
                  onClick={() => setTooglePassword(true)}
                ></IconEyeClose>
              ) : (
                togglePassword && (
                  <IconEyeOpen
                    onClick={() => setTooglePassword(false)}
                  ></IconEyeOpen>
                )
              )}
            </Input>
          </Field>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
