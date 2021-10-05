import React, { useState, useEffect } from "react";
import {
  getUserDetails,
  userUpdate,
  passwordChange,
} from "../../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import Modal from "react-modal";
import NavBarMe from "./NavBarMe";
import styles from "./Profile.module.css";

Modal.setAppElement("#root");

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,16}$/;

const Profile = () => {
  const token = window.localStorage.getItem("token");
  const user = jwt.decode(token);
  const usuario = useSelector((state) => state.userDetails);
  let cambios = useSelector((state) => state.userUpdate);
  const cambiosPassword = useSelector((state) => state.passwordChange);

  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);
  //let [counter, setCounter] = useState(0);
  const [address, setAddress] = useState({
    country: "",
    state: "",
    city: "",
    postalcode: "",
    street: "",
    number: "",
  });
  const [datos, setDatos] = useState({
    name: "",
    surname: "",
    birthday: 0,
  });

  const [email, setEmail] = useState("");

  const [mostrar, setMostrar] = useState(false);

  const [mostrar2, setMostrar2] = useState(false);

  const [contraseña, setContraseña] = useState({ password: "", password2: "" });

  const handleChange1 = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const handleChange2 = (e) => {
    setEmail(e.target.value);
  };
  const handleChange3 = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleChange4 = (e) => {
    setContraseña({ ...contraseña, [e.target.name]: e.target.value });
  };
  const { country, state, city, postalcode, street, number } = address;

  const enviarCambiosAddress = () => {
    // const adress = `${calle} ${numero} ${codigoPostal} ${ciudad} ${provincia} ${pais}`;
    dispatch(
      userUpdate(user.id, {
        country,
        state,
        city,
        postalcode,
        street,
        number,
      })
    );
    window.location.reload();
  };

  const { name, surname, birthday } = datos;

  const enviarCambiosDatos = () => {
    if (!!name && !!surname && !!birthday) {
      dispatch(
        userUpdate(user.id, {
          name: name,
          surname: surname,
          birthday: birthday,
        })
      );
      window.location.reload();
    } else if (!!name && !!birthday) {
      dispatch(
        userUpdate(user.id, {
          name: name,
          birthday: birthday,
        })
      );
      window.location.reload();
    } else if (!!surname && !!birthday) {
      dispatch(
        userUpdate(user.id, {
          surname: surname,
          birthday: birthday,
        })
      );
      window.location.reload();
    } else if (!!surname && name) {
      dispatch(
        userUpdate(user.id, {
          name: name,
          surname: surname,
        })
      );
      window.location.reload();
    } else if (!!surname) {
      dispatch(
        userUpdate(user.id, {
          surname: surname,
        })
      );

      window.location.reload();
    } else if (!!name) {
      dispatch(
        userUpdate(user.id, {
          name: name,
        })
      );

      window.location.reload();
    } else if (!!birthday) {
      dispatch(
        userUpdate(user.id, {
          birthday: birthday,
        })
      );

      window.location.reload();
    }
  };

  const enviarCambiosEmail = () => {
    dispatch(
      userUpdate(user.id, {
        email: email,
      })
    );
    window.location.reload();
  };

  const { password, password2 } = contraseña;

  const enviarCambiosContraseña = () => {
    dispatch(passwordChange(usuario.id, password, password2, usuario.email));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(getUserDetails(user.id));
    }
  }, []);

  if (token) {
    return (
      <div className={`${styles.profileContainer}`}>
        {usuario ? (
          <div>
            <div className={`${styles.navbar}`}>
              <NavBarMe></NavBarMe>
            </div>

            <ul className={`${styles.contenedorGeneral}`}>
              {/*primer item*/}
              <li className={`${styles.listItem1}`}>
                <div className={`${styles.datosContainer}`}>
                  <h2 className={`${styles.titleLi}`}>Name</h2>

                  <h3
                    className={`${styles.nameLi}`}
                  >{`${usuario.name}  ${usuario.surname}`}</h3>

                  <div>
                    {usuario.birthday && (
                      <div>
                        <h2 className={`${styles.titleLi}`}>Birthday</h2>

                        <h3
                          className={`${styles.birthday}`}
                        >{`${usuario.birthday}`}</h3>
                      </div>
                    )}

                    <div>
                      <button
                        className={`${styles.birthdayButton}`}
                        onClick={() => setModalIsOpen1(true)}
                      >
                        <i className="fas fa-pencil-alt"></i>CHANGE PERSONAL
                        DATA
                      </button>
                    </div>
                  </div>
                </div>

                <Modal
                  className={`${styles.personalModal}`}
                  style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
                  isOpen={modalIsOpen1}
                  onRequestClose={() => setModalIsOpen1(false)}
                >
                  <button
                    className={`${styles.closeButton}`}
                    onClick={() => setModalIsOpen1(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <h1>Change your personal data</h1>
                  <div>
                    <div>
                      <label for="name">Name</label>
                    </div>

                    <div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange1}
                      />
                    </div>
                  </div>

                  <div>
                    <div>
                      <label for="surname"> Surname </label>
                    </div>

                    <div>
                      <input
                        type="text"
                        id="surname"
                        name="surname"
                        value={surname}
                        onChange={handleChange1}
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <label for="birthday" style={{ marginRight: "1rem" }}>
                        Birthday
                      </label>
                    </div>

                    <div>
                      <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={birthday}
                        onChange={handleChange1}
                      />
                    </div>
                  </div>
                  {name || surname || birthday ? (
                    <button
                      className={`${styles.saveButton}`}
                      onClick={() => enviarCambiosDatos()}
                    >
                      SAVE
                    </button>
                  ) : null}
                  {cambios ? <p>{cambios}</p> : null}
                </Modal>
              </li>
              {/*termina primer item*/}

              {/*segundo item*/}
              <li className={`${styles.listItem2}`}>
                <h2 className={`${styles.titleLi}`}>Direction</h2>
                {usuario.street &&
                usuario.number &&
                usuario.postalcode &&
                usuario.city &&
                usuario.state ? (
                  <div style={{ display: "flex" }}>
                    <div className={`${styles.dirContainer}`}>
                      {/*Calle y altura*/}{" "}
                      <h3 className={`${styles.titleLiDir}`}>
                        Street and number
                      </h3>
                      <h3 className={`${styles.nameLiDir}`}>
                        {usuario.street + " " + usuario.number}{" "}
                      </h3>
                      {/*código postal*/}{" "}
                      <h3 className={`${styles.titleLiDir}`}>Postal code</h3>
                      <h3 className={`${styles.nameLiDir}`}>
                        {usuario.postalcode}{" "}
                      </h3>
                    </div>

                    <div className={`${styles.dirContainer}`}>
                      {/*ciudad*/}{" "}
                      <h3 className={`${styles.titleLiDir}`}>City</h3>
                      <h3 className={`${styles.nameLiDir}`}>{usuario.city} </h3>
                      {/*provincia*/}
                      <h3 className={`${styles.titleLiDir}`}>State</h3>
                      <h3 className={`${styles.nameLiDir}`}>
                        {usuario.state}{" "}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div>You must enter your direction</div>
                )}

                <button
                  className={`${styles.buttonDir}`}
                  onClick={() => setModalIsOpen2(true)}
                >
                  <i className="fas fa-pencil-alt"></i>CHANGE
                </button>

                <Modal
                  className={`${styles.personalModaliz}`}
                  style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
                  isOpen={modalIsOpen2}
                  onRequestClose={() => setModalIsOpen2(false)}
                >
                  <button
                    className={`${styles.closeButton}`}
                    onClick={() => setModalIsOpen2(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>

                  <h1 className={`${styles.editDirection}`}>
                    Change your direction{" "}
                  </h1>

                  <div
                    style={{ display: "flex" }}
                    className={`${styles.editor}`}
                  >
                    <div>
                      <div>
                        <label
                          style={{ color: "white", fontWeight: "lighter" }}
                          for="street"
                        >
                          Street
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          id="street"
                          name="street"
                          value={street}
                          onChange={handleChange3}
                        />
                      </div>

                      <div>
                        <label
                          style={{ color: "white", fontWeight: "lighter" }}
                          for="number"
                        >
                          Number
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          id="number"
                          name="number"
                          value={number}
                          onChange={handleChange3}
                        />
                      </div>

                      <div>
                        <label
                          style={{ color: "white", fontWeight: "lighter" }}
                          for="postalcode"
                        >
                          Postal Code
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          id="postalcode"
                          name="postalcode"
                          value={postalcode}
                          onChange={handleChange3}
                        />
                      </div>
                    </div>

                    <div>
                      <div>
                        <label
                          style={{ color: "white", fontWeight: "lighter" }}
                          for="city"
                        >
                          City
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={city}
                          onChange={handleChange3}
                        />
                      </div>

                      <div>
                        <label
                          style={{ color: "white", fontWeight: "lighter" }}
                          for="state"
                        >
                          State
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={state}
                          onChange={handleChange3}
                        />
                      </div>

                      <div>
                        <label
                          style={{ color: "white", fontWeight: "lighter" }}
                          for="country"
                        >
                          Country
                        </label>
                      </div>

                      <div>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          value={country}
                          onChange={handleChange3}
                        />
                      </div>
                    </div>
                  </div>

                  {country &&
                  state &&
                  city &&
                  postalcode &&
                  street &&
                  number ? (
                    <button
                      className={`${styles.buttonSaveDir}`}
                      onClick={() => enviarCambiosAddress()}
                    >
                      SAVE
                    </button>
                  ) : null}
                  {cambios ? <p>{cambios}</p> : null}
                </Modal>
              </li>
              {/*    termina segundo item*/}

              {/*tercer item*/}
              <li className={`${styles.listItem3}`}>
                <h2 className={`${styles.titleLi}`}>Access data</h2>
                <h3 className={`${styles.titleLi}`}>Email</h3>
                <h3 className={`${styles.nameLi}`}> {usuario.email}</h3>
                <button
                  className={`${styles.passButton}`}
                  onClick={() => setModalIsOpen3(true)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fas fa-pencil-alt"></i> CHANGE
                </button>
                <Modal
                  className={`${styles.personalModal}`}
                  style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
                  isOpen={modalIsOpen3}
                  onRequestClose={() => setModalIsOpen3(false)}
                >
                  <button
                    className={`${styles.closeButton}`}
                    onClick={() => setModalIsOpen3(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <h1>Change your data email</h1>
                  <div>
                    <div>
                      <label for="email">Email</label>
                    </div>

                    <div>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleChange2}
                      />
                    </div>
                  </div>
                  {email && !emailRegex.test(email) ? (
                    <p>
                      The emial must have the following format: user@mail.com
                    </p>
                  ) : null}
                  {email && emailRegex.test(email) ? (
                    <button
                      className={`${styles.saveButton}`}
                      onClick={() => enviarCambiosEmail()}
                    >
                      SAVE
                    </button>
                  ) : !email ? (
                    <p>Enter your new email</p>
                  ) : null}
                  {cambios ? <p>{cambios}</p> : null}
                </Modal>

                <h3 className={`${styles.titleLi}`}>Password </h3>
                <h3 className={`${styles.nameLi}`}>
                  {user.google ? "Logged with Google" : "* * * * * * * *"}
                </h3>
                {!user.google ? (
                  <button
                    className={`${styles.passButton}`}
                    onClick={() => setModalIsOpen4(true)}
                  >
                    <i className="fas fa-pencil-alt"></i> CHANGE
                  </button>
                ) : null}

                <Modal
                  className={`${styles.personalModal}`}
                  style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" } }}
                  isOpen={modalIsOpen4}
                  onRequestClose={() => setModalIsOpen4(false)}
                >
                  <button
                    className={`${styles.closeButton}`}
                    onClick={() => setModalIsOpen4(false)}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                  <h1>Change your password</h1>
                  <div>
                    <div>
                      <label for="password">New password</label>
                    </div>

                    <div>
                      <input
                        type={mostrar ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={handleChange4}
                      />

                      <button
                        className={`${styles.eyebutton}`}
                        type="button"
                        onClick={() => {
                          setMostrar(!mostrar ? true : false);
                        }}
                      >
                        <i className="fas fa-eye"></i>{" "}
                      </button>
                    </div>
                  </div>
                  {password && !passwordRegex.test(password) ? (
                    <p>
                      The password must have between 8 and 15 characters ,<br />{" "}
                      at least a lower case letter and upper case,
                      <br /> at least a number and a special character
                    </p>
                  ) : null}
                  <div>
                    <label for="password2">Old password</label>
                    <input
                      type={mostrar2 ? "text" : "password"}
                      id="password2"
                      name="password2"
                      value={password2}
                      onChange={handleChange4}
                    />
                    <button
                      className={`${styles.eyebutton}`}
                      type="button"
                      onClick={() => {
                        setMostrar2(!mostrar2 ? true : false);
                      }}
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                  </div>
                  {password && password2 && passwordRegex.test(password) ? (
                    <button onClick={() => enviarCambiosContraseña()}>
                      Save changes
                    </button>
                  ) : null}
                  {cambiosPassword ? <p>{cambiosPassword}</p> : null}
                </Modal>
              </li>
              {/*    termina tercer item*/}
            </ul>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  } else {
    return (
      <div>
        <h1>You must log in to access to the account detail.</h1>
      </div>
    );
  }
};

export default Profile;
