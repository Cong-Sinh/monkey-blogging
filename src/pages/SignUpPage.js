import { Label } from "../components/label";
import React, { Children, useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "../components/input";
import { useForm } from "react-hook-form";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { Field } from "../components/field";
import { Button } from "../components/button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

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

const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter your email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "your password least 8 ")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const handleSignUp = (values) => {
    if (!isValid) return;
    console.log(values);
  };

  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message);
    }
  });

  const [togglePassword, setTooglePassword] = useState(false);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="/logo.png 2x" alt="monkey-logo" className="logo"></img>

        <h1 className="heading">Monkey blogging</h1>
        <form className="form" onSubmit={handleSubmit(handleSignUp)}>
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

          <Button
            style={{ maxWidth: 350, margin: "0 auto" }}
            type="submit"
            isLoading={isSubmitting}
            disabled={isSubmitting}
          >
            button
          </Button>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
