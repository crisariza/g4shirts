import React, { useState } from "react";
import { passwordEmailReset } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

export default function PasswordResetButton() {
  const [userEmail, setUserEmail] = useState("");

  const dispatch = useDispatch();
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const handleChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordReset = (e) => {
    dispatch(passwordEmailReset(userEmail));
  };

  return (
    <div>
      <form>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" value={userEmail} onChange={handleChange} />
        </p>
        {userEmail && !emailRegex.test(userEmail) ? (
          <div>
            <p>The email must have the following format: user@mail.com</p>
          </div>
        ) : null}
        {userEmail && emailRegex.test(userEmail) ? (
          <p>
            <button
              style={{
                borderBottom: "none",
                background: "#ff7b06",
                padding: 10,
                marginTop: 19,
              }}
              onClick={handlePasswordReset}
            >
              Restore password
            </button>
          </p>
        ) : (
          <p style={{ marginTop: "1rem", marginBottom: "4rem" }}>
            All the fields are required.
          </p>
        )}
      </form>
    </div>
  );
}
