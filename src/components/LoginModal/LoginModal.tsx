"use client";
import Image from "next/image";
import styles from "./LoginModal.module.css";
import closeImg from "../../images/close.svg";
import Button from "@/UI/Button/Button";
import { useEffect, useState } from "react";
import { useLoginUserMutation, useRegisterUserMutation } from "@/api/shopApi";
import { toast } from "react-toastify";
import { useAppDispatch } from "@/store/store";
import { getUser } from "@/store/userSlice";

interface IProps {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export default function LoginModal({ open, setOpen }: IProps) {
  const dispatch = useAppDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "john@mail.com",
    password: "changeme",
  });
  const [loginUser, { data, isSuccess: loginSuccess, isError: loginError }] =
    useLoginUserMutation();
  const [registerUser, { isSuccess: regSuccess, isError: regError }] =
    useRegisterUserMutation();
  const [tab, setTab] = useState("register");
  useEffect(() => {
    if (loginSuccess) {
      localStorage.setItem("token", data.access_token);
      setOpen(false);
      dispatch(getUser(data.access_token));
      toast.success("You are logged in!");
    }
  }, [loginSuccess, regSuccess]);

  useEffect(() => {
    if (regSuccess) {
      loginUser(values);
    }
  }, [regSuccess]);
  // console.log(regData);

  return (
    <div
      onClick={() => setOpen(false)}
      className={`${styles.wrapper} ${open && styles.open}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.inner}>
          <Image
            onClick={() => setOpen(false)}
            className={styles.close}
            src={closeImg}
            alt=""
          />

          <>
            <h3 className={styles.title}>
              {tab === "login" ? "Login" : "Register"}
            </h3>
            <div className={styles.col}>
              {loginError === true && (
                <div className={styles.err}>Incorrect data!</div>
              )}
              {regError === true && (
                <div className={styles.err}>Incorrect data!</div>
              )}
              {tab === "register" && (
                <input
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  className={styles.input}
                  type="text"
                  placeholder="Name"
                />
              )}
              <input
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                className={styles.input}
                type="text"
                placeholder="Email"
              />
              <input
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
                className={styles.input}
                type="text"
                placeholder="Password"
              />
            </div>
            <div className={styles.buttons}>
              {tab === "login" && (
                <>
                  <Button
                    onClick={() => loginUser(values)}
                    width="100%"
                    fontWeight={500}
                  >
                    Sign In
                  </Button>
                  <Button
                    width="100%"
                    fontWeight={500}
                    background="#576067"
                    color="#B8B8B8"
                    onClick={() => setTab("register")}
                  >
                    Create an account
                  </Button>
                </>
              )}
              {tab === "register" && (
                <>
                  <Button
                    onClick={() =>
                      registerUser({
                        ...values,
                        avatar:
                          "https://cdn-icons-png.flaticon.com/512/149/149071.png",
                      })
                    }
                    width="100%"
                    fontWeight={500}
                  >
                    Create an account
                  </Button>
                  <Button
                    width="100%"
                    fontWeight={500}
                    background="#576067"
                    color="#B8B8B8"
                    onClick={() => setTab("login")}
                  >
                    I have an account
                  </Button>
                </>
              )}
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
