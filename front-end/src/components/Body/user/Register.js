import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../redux/actions";

const Register = () => {
  const dispatch = useDispatch();
  const succesfull = useSelector((state) => state.register);

  const [register, setRegister] = useState({
    name: "",
    surname: "",
    birthday: 0,
    email: "",
    password: "",
  });
  const [address, setAddress] = useState({
    calle: "",
    numero: "",
    codigoPostal: "",
    ciudad: "",
    provincia: "",
    pais: "",
  });

  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,16}$/;

  const [confirmar, setConfirmar] = useState({ email2: "", password2: "" });

  const [mostrar, setMostrar] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);

  const handleChange1 = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setConfirmar({ ...confirmar, [e.target.name]: e.target.value });
  };

  const handleChange3 = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const { calle, numero, codigoPostal, provincia, pais, ciudad } = address;

  const handleSubmit = (e) => {
    e.preventDefault();

    let direccion = `${calle}  ${numero}  ${codigoPostal}  ${ciudad}  ${provincia}  ${pais}`;
    dispatch(userRegister(register, direccion));
  };

  // if (succesfull === "¡Se ha registrado exitosamente!") {
  //   setRegister({
  //     name: "",
  //     surname: "",
  //     birthday: 0,
  //     email: "",
  //     password: "",
  //     adress: "",
  //     cart: "",
  //   });
  //   setAddress({
  //     calle: "",
  //     numero: "",
  //     codigoPostal: "",
  //     ciudad: "",
  //     provincia: "",
  //     pais: "",
  //   });
  //   setConfirmar({
  //     email2: "",
  //     password2: "",
  //   });
  // }
  const { name, surname, birthday, email, password } = register;

  const { email2, password2 } = confirmar;

  return (
    <div>
      <h1>Register</h1>
      <form
        style={{ display: "block", marginTop: "4rem" }}
        onSubmit={handleSubmit}
      >
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="name" style={{ marginRight: "1rem" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange1}
          />
        </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="surname" style={{ marginRight: "1rem" }}>
            {" "}
            Surname{" "}
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={surname}
            onChange={handleChange1}
          />
        </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="birthday" style={{ marginRight: "1rem" }}>
            Birthday
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={birthday}
            onChange={handleChange1}
          />
        </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="email" style={{ marginRight: "1rem" }}>
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={handleChange1}
          />
        </div>
        {email && !emailRegex.test(email) ? (
          <p>The email must have the following format: user@mail.com</p>
        ) : null}
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="email2" style={{ marginRight: "1rem" }}>
            Save the email
          </label>
          <input
            type="text"
            id="email2"
            name="email2"
            value={email2}
            onChange={handleChange2}
          />
        </div>
        {email && email2 ? (
          email !== email2 ? (
            <p>The emails aren't the same</p>
          ) : null
        ) : null}
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="password" style={{ marginRight: "1rem" }}>
            Password
          </label>
          <input
            type={mostrar ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handleChange1}
          />
          <input
            type="button"
            onClick={() => {
              setMostrar(!mostrar ? true : false);
            }}
            value="Mostrar"
          />
        </div>
        {password && !passwordRegex.test(password) ? (
          <p>
            The password must have between 8 and 15 characters ,<br /> at least
            a lower case letter and upper case,
            <br /> at least a number and a special character
          </p>
        ) : null}
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="password2" style={{ marginRight: "1rem" }}>
            Save password
          </label>
          <input
            type={mostrar2 ? "text" : "password"}
            id="password2"
            name="password2"
            value={password2}
            onChange={handleChange2}
          />
          <input
            type="button"
            onClick={() => {
              setMostrar2(!mostrar2 ? true : false);
            }}
            value="Mostrar"
          />
        </div>
        {password2 && password ? (
          password !== password2 ? (
            <p>The password aren't the same</p>
          ) : null
        ) : null}
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="calle" style={{ marginRight: "1rem" }}>
            Calle
          </label>
          <input
            type="text"
            id="calle"
            name="calle"
            value={calle}
            onChange={handleChange3}
          />
        </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="numero" style={{ marginRight: "1rem" }}>
            Number
          </label>
          <input
            type="text"
            id="numero"
            name="numero"
            value={numero}
            onChange={handleChange3}
          />
        </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="codigoPostal" style={{ marginRight: "1rem" }}>
            Postal code
          </label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            value={codigoPostal}
            onChange={handleChange3}
          />
        </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="ciudad" style={{ marginRight: "1rem" }}>
            City
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={ciudad}
            onChange={handleChange3}
          />
        </div>
        <div style={{ display: "flex", marginTop: "1rem" }}>
          <label for="provincia" style={{ marginRight: "1rem" }}>
            State
          </label>
          <input
            type="text"
            id="provincia"
            name="provincia"
            value={provincia}
            onChange={handleChange3}
          />
        </div>
        <div
          style={{ display: "flex", marginTop: "1rem", marginBottom: "2rem" }}
        >
          <label for="pais" style={{ marginRight: "1rem" }}>
            Country
          </label>
          <input
            type="text"
            id="pais"
            name="pais"
            value={pais}
            onChange={handleChange3}
          />
        </div>

        {password &&
        email &&
        birthday &&
        surname &&
        name &&
        calle &&
        numero &&
        codigoPostal &&
        provincia &&
        email2 &&
        password2 &&
        pais &&
        email2 === email &&
        password === password2 &&
        emailRegex.test(email) &&
        passwordRegex.test(password) &&
        succesfull !== "You have been registered" ? (
          <input
            type="submit"
            value="Send"
            style={{ marginTop: "1rem", marginBottom: "4rem" }}
          />
        ) : succesfull !== "You have been registered" ? (
          <p style={{ marginTop: "1rem", marginBottom: "4rem" }}>
            All the fields are required
          </p>
        ) : null}
      </form>
      {succesfull ? (
        <p style={{ marginTop: "1rem", marginBottom: "4rem" }}>{succesfull}</p>
      ) : null}
      {succesfull === "You have been registered"
        ? window.location.replace("/login")
        : null}
    </div>
  );
};

export default Register;
