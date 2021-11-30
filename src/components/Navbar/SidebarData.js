import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text ",
  },
  {
    title: "Trabajadores",
    path: "/workers",
    icon: <AiIcons.AiOutlineUser />,
    cName: "nav-text ",
  },
  {
    title: "Servicios",
    path: "/services",
    icon: <IoIcons.IoIosFolder />,
    cName: "nav-text ",
  },
  {
    title: "Mensajes",
    path: "/messaje",
    icon: <AiIcons.AiFillMessage />,
    cName: "nav-text ",
  },
];
