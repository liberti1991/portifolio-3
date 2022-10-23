import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { GoDesktopDownload } from "react-icons/go";

import CurriculumVitae from "../../download/CurriculumVitae-RodrigoLiberti.pdf";

export const dbFooter = [
  {
    id: 1,
    title: "Linkedin",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://www.linkedin.com/in/rodrigo-liberti/",
    svg: <BsLinkedin />,
    className: "#0e76a8",
  },
  {
    id: 2,
    title: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://github.com/liberti1991",
    svg: <BsGithub />,
    className: "purple",
  },
  {
    id: 3,
    title: "Whatsapp",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://api.whatsapp.com/send?phone=5541997000028&text=Olá.%20Gostaria%20de%20fazer%20um%20projeto.%20",
    svg: <BsWhatsapp />,
    className: "green",
  },
  {
    id: 4,
    title: "Liberti1991@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "mailto:liberti1991@gmail.com?subject=Eu fiz uma analise do seu projeto e achei.",
    svg: <SiGmail />,
    className: "red",
  },
  {
    id: 5,
    title: "Currículo",
    target: "_blank",
    rel: "noopener noreferrer",
    url: CurriculumVitae,
    svg: <GoDesktopDownload />,
    // className: "Chocolate",
    className: "DarkKhaki",
  },
];
