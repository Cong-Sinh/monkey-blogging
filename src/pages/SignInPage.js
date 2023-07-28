import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/auth-context";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import { Field } from "../components/field";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { Label } from "../components/label";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { IconEyeClose, IconEyeOpen } from "../components/icon";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { isValid, isSubmitting, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const { userInfo } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "login Page";
    if (userInfo?.email) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(userInfo);

  useEffect(() => {
    const arrErroes = Object.values(errors);
    if (arrErroes.length > 0) {
      toast.error(arrErroes[0]?.message);
    }
  });
  const [togglePassword, setTooglePassword] = useState(false);

  const handleSignIn = async (values) => {
    if (!isValid) return;
    await signInWithEmailAndPassword(auth, values.email, values.password);
    navigate("/");
  };
  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            type="email"
            name="email"
            placeholder="enter your email address"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password">password address</Label>
          <Input
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="enter your password address"
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
        <div className="have-account">
          You have not had an account?{" "}
          <NavLink to={"/sign-up"}>regit tor</NavLink>
        </div>
        <Button
          style={{ maxWidth: 350, margin: "0 auto" }}
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          button
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default SignIn;
