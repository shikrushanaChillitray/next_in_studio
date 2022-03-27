import React from "react";
import {Layout, Typography, Button} from "antd";
import { useCookies } from "react-cookie";
import Pintest from "./3d/pintest";
import Panel from "./3d/panel";
import Pepsi from "./3d/pepsi";
import logo from "../images/logo1.PNG"
import Contact from "./3d/contact";
import Profile from "./3d/profile";
import Blog from "./3d/Blog";
const Home = (props) => {
  return(
<div><Pepsi/><Panel/><Blog/><Contact/><Pintest/></div>
  )
  };

export default Home;
