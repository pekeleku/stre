import { JWTPayloadsTypes, UserTypes } from "@/services/data-types";
import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "",
  });
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const user: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/$${user.avatar}`;
      setUser(user);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={user.avatar}
        alt="profile"
        width="90"
        height="90"
        className="img-fluid mb-20"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.name}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
