import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { JWTPayloadsTypes, UserTypes } from "@/services/data-types";
import { useRouter } from "next/router";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({
    avatar: "",
  });
  const router = useRouter();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadsTypes = jwtDecode(jwtToken);
      const user: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMG;
      user.avatar = `${IMG}/$${user.avatar}`;
      setIsLogin(true);
      setUser(user);
    }
  }, []);
  const onLogout = () => {
    Cookies.remove("token");
    router.push("/");
    setIsLogin(false);
  };
  if (isLogin) {
    return (
      <li className="nav-item my-auto dropdown d-flex">
        <div className="vertical-line d-lg-block d-none"></div>
        <div>
          <a
            className="dropdown-toggle ms-lg-40"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src={user.avatar}
              className="rounded-circle"
              width="40"
              height="40"
              alt="logo"
            />
          </a>

          <ul
            className="dropdown-menu border-0"
            aria-labelledby="dropdownMenuLink"
          >
            <li>
              <Link
                href="/member"
                className="dropdown-item text-lg color-palette-2"
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item text-lg color-palette-2" href="/">
                Wallet
              </Link>
            </li>
            <li>
              <Link
                href="/member/edit-profile"
                className="dropdown-item text-lg color-palette-2"
              >
                Account Settings
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item text-lg color-palette-2"
                href="/"
                onClick={onLogout}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </li>
    );
  }
  return (
    <li className="nav-item my-auto">
      <Link
        className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill"
        href="/sign-in"
        role="button"
      >
        Sign In
      </Link>
    </li>
  );
}
