"use client";
import Box from "@mui/material/Box";
import PersonIcon from "@mui/icons-material/Person";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Make it responsive
  maxWidth: 800, // Ensure it doesn't exceed 800px width
  height: "auto", // Adjust height for content
  maxHeight: "90vh", // Ensure it doesn't exceed viewport height
  overflowY: "auto", // Add vertical scrollbar if needed
  bgcolor: "white",
  boxShadow: 24,
  borderRadius: 4,
  paddingX: 4,
  paddingY: 2,
};

type ProfileModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileModal({ open, onClose }: ProfileModalProps) {
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    // Function to fetch SteamID64 and username from URL or localStorage
    const urlParams = new URLSearchParams(window.location.search);
    const usernameFromURL = urlParams.get("username");

    if (usernameFromURL) {
      localStorage.setItem("username", usernameFromURL);
      setUsername(usernameFromURL);
    } else {
      const storedUsername = localStorage.getItem("username");

      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  const handleBoxClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} onClick={handleBoxClick}>
        <div className="w-full relative">
          <div className="flex items-center gap-x-5">
            <div className="h-40 w-40 bg-blue-500 rounded-full flex justify-center items-center">
              <PersonIcon
                className="object-cover w-full h-full rounded-full"
                htmlColor="white"
              />
            </div>
            <div className="text-4xl font-[900] flex flex-col uppercase">
              {/* FirstName */}
              {username}
              <span className="text-sm text-gray-400 font-normal mt-1">
                EZskin.com
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight uppercase text-center">
              Statistics
            </h1>
            <div className="mt-2 w-full flex justify-center gap-x-10">
              <div className="px-3 py-1 text-center">
                <div className="bg-green-500 shadow-lg px-5 py-3 rounded-lg transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 cursor-pointer">
                  <p className="text-white text-4xl">$32.00</p>
                </div>
                <h4 className="text-base font-medium text-gray-400">
                  Deposited
                </h4>
              </div>
              <div className="px-3 py-1 text-center">
                <div className="bg-green-500 shadow-lg px-5 py-3 rounded-lg transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300 cursor-pointer">
                  <p className="text-white text-4xl">$9.00</p>
                </div>
                <h4 className="text-base font-medium text-gray-400">
                  Total Won
                </h4>
              </div>
              <div className="px-3 py-1 text-center">
                <div className="bg-red-500 shadow-lg px-5 py-3 rounded-lg transition ease-out delay-100 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 cursor-pointer">
                  <p className="text-white text-4xl">$-23.00</p>
                </div>
                <h4 className="text-base font-medium text-gray-400">Profit</h4>
              </div>
            </div>
          </div>
          <div className="mt-5 py-2">
            <h3 className="font-medium text-2xl mb-2">
              Save Your <span className="font-bold">Trade URL</span>:
            </h3>
            <p>
              There should be some content to display. You can find your{" "}
              <span className="uppercase">trade url</span>{" "}
              <a
                href="https://steamcommunity.com/my/tradeoffers/privacy#trade_offer_access_url"
                target="_blank"
                className="text-blue-500"
              >
                here!
              </a>{" "}
            </p>
            <div className="flex gap-x-0 mt-1">
              <input
                type="text"
                name=""
                id=""
                className="border-r-0 rounded-r-none w-full p-2 bg-slate-100 rounded-lg border border-gray-700 font-normal focus:outline-none"
                placeholder="Enter Your Trade Url Here"
              />
              <button className="rounded-l-none px-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition text-sm text-white font-medium">
                Save
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center gap-x-5">
            <div className="w-1/2">
              <div className="mt-5">
                <h3 className="font-semibold text-2xl">Referral Code:</h3>
                <div className="flex gap-x-0 mt-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-r-0 rounded-r-none w-3/4 p-2 bg-slate-100 rounded-lg border border-gray-700 font-normal focus:outline-none"
                    placeholder="Enter Claim Code"
                  />
                  <button className="rounded-l-none px-2 rounded-lg bg-blue-500 hover:bg-blue-700 transition text-sm text-white font-medium">
                    Claim
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="mt-5">
                <div className="flex justify-start items-center gap-x-3">
                  <h3 className="capitalize text-2xl font-semibold">
                    Double Up!
                  </h3>
                  <input type="checkbox" name="" id="" className="w-4 h-4" />
                  <span className="font-medium">Enabled</span>
                </div>
                <p className="text-sm">
                  Now winning a coinflip. Selected games under 20 Skins will be
                  given the opportunity to instantly relist your winnings tax
                  free.
                </p>
              </div>
            </div>
          </div>
          <table className="table mx-auto mt-10 px-0">
            <thead>
              <tr className="flex gap-x-0 justify-center text-sm">
                <th className="border border-gray-800 px-8 py-3 flex items-center">
                  Winner
                </th>
                <th className="border border-gray-800 px-8 flex items-center">
                  Amount
                </th>
                <th className="border border-gray-800 px-8 flex items-center">
                  Chance
                </th>
                <th className="border border-gray-800 px-8 flex items-center">
                  Gamemode
                </th>
                <th className="border border-gray-800 px-8 flex items-center">
                  Winning Trade
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
        <div
          className="absolute top-0 right-0 p-4 cursor-pointer ease-out hover:scale-y-150  duration-300"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={25}
            height={25}
            viewBox="0 0 50 50"
            className="hover:fill-red-700"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z" />
          </svg>
        </div>
      </Box>
    </Modal>
  );
}
