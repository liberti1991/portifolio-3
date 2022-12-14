import { CgProfile } from "react-icons/cg";
// import { VscGithubAlt, VscFiles, VscSettingsGear } from "react-icons/vsc"; versao com git
import { VscFiles, VscSettingsGear } from "react-icons/vsc";
import { BiCodeAlt } from "react-icons/bi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
// import { SiTypescript } from "react-icons/si"; versao com git
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";

export const dbMenu = [
  {
    id: 1,
    title: "home.jsx",
    icon1: <FaReact />,
    color: "#61DAFB",
    // color2: '#65C147',
    color2: "#fff",
    icon2: <VscFiles />,
    to: "/home",
  },
  {
    id: 2,
    title: "sobre.php",
    icon1: <FaLaravel />,
    color: "#E6040F",
    color2: "#fff",
    icon2: <CgProfile />,
    to: "/sobre",
  },
  {
    id: 3,
    title: "projetos.js",
    icon1: <IoLogoJavascript />,
    color: "#F0DB4F",
    color2: "#fff",
    icon2: <BiCodeAlt />,
    to: "/projetos",
  },
  // {
  //   id: 4,
  //   title: "github.tsx",
  //   icon1: <SiTypescript />,
  //   color: "#007acc",
  //   color2: '#fff',
  //   icon2: <VscGithubAlt />,
  //   to: "/github",
  // },
  {
    id: 5,
    title: "contatos.css",
    icon1: <DiCss3 />,
    color: "#33A9DC",
    color2: "#fff",
    icon2: <MdOutlineMarkEmailUnread />,
    to: "/contato",
  },

  {
    id: 6,
    title: "",
    icon1: "",
    color: "",
    color2: "#fff",
    icon2: <VscSettingsGear />,
    to: "/home",
  },
];
