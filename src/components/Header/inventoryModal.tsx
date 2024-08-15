import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Image from "next/image";
import HistoryIMG from "@/assets/images/history.png";
import RewardIMG from "@/assets/images/rewards.png";
import SkinsData from "./skinsdata";
import MoneyImg from "@/assets/images/money-bag.png";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#3D3A40",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function InventoryModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(true);
  };
  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent event propagation
    setOpen(false);
  };

  const handleModalContentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <div className="flex items-center gap-x-2 font-normal text-white font-[Poppins] tracking-tight text-base bg-green-600 p-2 rounded-md hover:-translate-y-1 transition">
          <Image src={MoneyImg} alt="" className="w-7 h-7" />
          Deposit
        </div>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            height: "90%",
            width: "90%",
            borderRadius: 4,
          }}
          onClick={handleModalContentClick}
        >
          <div className="h-full w-full flex mx-auto">
            <div className="w-full grid grid-cols-4 items-center gap-x-5">
              <div className="col-span-1 h-[80%] border border-white rounded-md">
                <div className="h-10 bg-white rounded-t-md text-center flex justify-center items-center">
                  Rewards
                </div>
                <div className="h-[90%] flex flex-col justify-between items-center">
                  <div className="flex flex-col gap-y-3 text-center text-white py-2">
                    <h1 className="text-xl font-semibold my-2">
                      Available Grub Bucks $0.00
                    </h1>
                    <p className="text-lg font-normal">Selected $0.00</p>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <button className="w-96 h-10 flex justify-center items-center bg-white rounded-md font-medium">
                      Jackpot Deposit
                    </button>
                    <button className="w-96 h-10 flex justify-center items-center bg-white rounded-md font-medium">
                      Create Coinflip
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-span-3 h-[80%] border border-white rounded-md">
                <div className="h-10 bg-white rounded-t-md text-center flex justify-center items-center">
                  Shop
                </div>
                <div className="mt-3 h-10 text-center flex justify-center items-center gap-x-2">
                  <Image
                    src={HistoryIMG}
                    alt="History Png"
                    className="w-6 h-6"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={25}
                    height={25}
                    viewBox="0 0 50 50"
                    fill="white"
                  >
                    <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
                  </svg>
                  <input
                    type="search"
                    name=""
                    className="w-[70%] p-2 focus:border focus:border-blue-500 focus:outline-none focus:transition bg-slate-600 text-white text-sm rounded-md"
                    placeholder="Search Reward Inventory"
                  />
                  <Image
                    src={RewardIMG}
                    className="w-7 h-7"
                    alt="reward Image"
                  />
                </div>
                <div className="mt-5 mx-auto p-3">
                  <SkinsData />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 right-0 p-4 cursor-pointer ease-out hover:scale-y-125 duration-300"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={20}
              height={20}
              viewBox="0 0 50 50"
              fill="white"
              className="hover:fill-red-700"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
