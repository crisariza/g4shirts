import React, { useState } from "react";
import { passwordReset } from "../../../../redux/actions";
//import styles from "./LogginButton.module.css";
import { useDispatch } from "react-redux";

export default function PasswordResetForm({ match }) {
  const [input, setNewPassword] = useState({
    newPassword: "",
    password2: "",
  });
  const dispatch = useDispatch();
  const [mostrar, setMostrar] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,16}$/;

  const handleChange = (e) => {
    setNewPassword({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const { newPassword, password2 } = input;

  const handlePasswordReset = (e) => {
    dispatch(passwordReset(match.params.id, newPassword));
  };

  return (
    <div>
      <form>
        <p>
          <label htmlFor="password" style={{ marginRight: "1rem" }}>
            Password
          </label>
          <input
            type={mostrar ? "text" : "password"}
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
          />
          <button
            style={{ background: "none", width: 5 }}
            type="button"
            onClick={() => {
              setMostrar(!mostrar ? true : false);
            }}
            value="Mostrar"
          >
            {" "}
            <i className="far fa-eye"></i>{" "}
          </button>
        </p>
        {newPassword && !passwordRegex.test(newPassword) ? (
          <div>
            {" "}
            <p>
              The password must have between 8 and 15 characters ,<br /> at
              least a lower case letter and upper case,
              <br /> at least a number and a special character
            </p>
          </div>
        ) : null}
        <p>
          <label htmlFor="password2" style={{ marginRight: "1rem" }}>
            Confirm password
          </label>
          <input
            type={mostrar2 ? "text" : "password"}
            id="password2"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
          <button
            style={{ background: "none", width: 5 }}
            type="button"
            onClick={() => {
              setMostrar2(!mostrar2 ? true : false);
            }}
            value="Mostrar"
          >
            <i className="far fa-eye"></i>{" "}
          </button>
        </p>
        {password2 && newPassword ? (
          newPassword !== password2 ? (
            <div>
              <p>The password aren't the same</p>
            </div>
          ) : null
        ) : null}
        {newPassword &&
        password2 &&
        newPassword === password2 &&
        passwordRegex.test(newPassword) ? (
          <p>
            <button
              style={{
                borderBottom: "none",
                background: "#ff7b06",
                padding: 10,
                marginTop: 19,
              }}
              onClick={handlePasswordReset}
              //className={`${styles.register}`}
            >
              Change password
            </button>
          </p>
        ) : (
          <p style={{ marginTop: "1rem", marginBottom: "4rem" }}>
            All the fields are required
          </p>
        )}
      </form>
    </div>
  );
}
