"use client";
import Image from "next/image";
import SteamLogout from "@/assets/images/steam_logout.png";
import SteamUser from "@/assets/images/steamlogin_user.png";
import React, { useEffect, useState } from "react";
import DepositModel from "@/components/Header/depositmodal";
import AccountSetting from "@/components/Header/iconsdropdown";

const SteamLogin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [steamID64, setSteamID64] = useState<string>("");

  useEffect(() => {
    // Function to fetch SteamID64 and username from URL or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const steamIDFromURL = urlParams.get("steamID64");
    const usernameFromURL = urlParams.get("username");

    if (steamIDFromURL && usernameFromURL) {
      localStorage.setItem("steamID64", steamIDFromURL);
      localStorage.setItem("username", usernameFromURL);
      setIsLoggedIn(true);
      setUsername(usernameFromURL);
      setSteamID64(steamIDFromURL);
    } else {
      const storedSteamID64 = localStorage.getItem("steamID64");
      const storedUsername = localStorage.getItem("username");

      if (storedSteamID64 && storedUsername) {
        setIsLoggedIn(true);
        setUsername(storedUsername);
        setSteamID64(storedSteamID64);
      }
    }
  }, []);

  const handleLogin = async () => {
    try {
      // Redirect to backend for Steam login
      window.location.href = "https://test123-six-kappa.vercel.app/auth/steam";
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error state or display error to user
    }
  };

  const handleLogout = () => {
    // Function to handle logout, clear localStorage and state
    localStorage.removeItem("steamID64");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    setSteamID64("");
  };

  return (
    <div>
      {!isLoggedIn && (
        <div className="w-40 p-2">
          <button id="loginButton" onClick={handleLogin}>
            <img
              src="https://community.akamai.steamstatic.com/public/shared/images/header/logo_steam.svg"
              alt=""
            />
          </button>
        </div>
      )}
      {isLoggedIn && (
        <div className="flex gap-x-8">
          <div className="flex gap-x-12 items-center">
            <DepositModel />
            {/* <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
                fill="#9B9BA1"
              />
            </svg>
            <svg
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <title>sound-loud-filled</title>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="icon"
                  fill="#9B9BA1"
                  transform="translate(42.666667, 85.333333)"
                >
                  <path
                    d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z"
                    id="Shape"
                  ></path>
                </g>
              </g>
            </svg> */}
            {/* <div className="text-xs text-white font-normal" id="username">
              <Image src={SteamUser} alt="" className="w-10 h-10 mx-auto" />
            </div> */}
          </div>
          {/* <button id="logoutButton" onClick={handleLogout}>
            <Image src={SteamLogout} alt="" className="w-10 h-10" />
          </button> */}

          {/* <div className="flex gap-x-1 items-center">
            <div className="w-10 h-10 rounded-full bg-blue-800">

            </div>
            <div className="text-white flex gap-x-1 items-center">
            user@gmail.com
            {username}
            </div>
          </div> */}

          <AccountSetting user={username} />
        </div>
      )}
    </div>
  );
};

export default SteamLogin;
