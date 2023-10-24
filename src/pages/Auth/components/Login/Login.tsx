import { GoogleOutlined } from "@ant-design/icons";
import { Button, Input, Space } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { FirebaseAuth } from "../../../../firebase/config";
import "./Login.css";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [isLoggedIn, setLoggedIn] = useState(false);
  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const result: UserCredential = await signInWithPopup(
        FirebaseAuth,
        googleProvider
      );
      sessionStorage.setItem("accessToken", result.user.accessToken);
      setLoggedIn(true)
      sessionStorage.setItem(
        "DisplayName",
        result.user.displayName ? result.user.displayName : "Sin nombre"
      );
      sessionStorage.setItem("uid", result.user.uid);


      // Ahora puedes acceder a la información del usuario desde result.user
      console.log(result);
    } catch (error) {
      console.error(error);
      setLoggedIn(true);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const [size] = useState<SizeType>("large"); // default is 'middle'

  if (isLoggedIn) {
    return (
      <div style={{ textAlign: "center" }}>
        {isLoggedIn && <Navigate to="/" replace={true} />}
      </div>
    );
  }
  return (
    <div className="card-login">
      <h1 className="h1-login">Login</h1>
      <form className="form-login">
        <Space
          direction="vertical"
          style={{
            width: "100%",
          }}
        >
          <Input
            placeholder="Email"
            type="text"
            name="username"
            size="small"
            value={credentials.username}
            onChange={handleInputChange}
            styles={{}}
          />

          <Input
            placeholder="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
          />
          <div className="container-button-login">
            <Button onClick={signInWithGoogle} >
              Iniciar Sesión
            </Button>
            <Button
              shape="circle"
              icon={<GoogleOutlined />}
              size={size}
            />
          </div>
        </Space>
      </form>
    </div>
  );
}
