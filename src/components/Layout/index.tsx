"use client";
import "@/assets/css/tailwind.css";
import { Box } from "@mui/material";
import { usePathname } from "next/navigation";
import Header from "../Header";

type Prop = {
  children: JSX.Element;
};
export default function Layout({ children }: Prop) {
  const pathname = usePathname();
  return (
    <Box>
      {pathname !== "/login" && <Header />}
      {children}
    </Box>
  );
}
