"use client";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";

export default function RightMenu({ name, setName }) {
  let menuBarContent = [
    { title: "About Me", link: "aboutMe" },
    { title: "Resume", link: "Resume" },
    { title: "Blog", link: "Blog" },
    { title: "Projects", link: "Projects" },
    { title: "Contact", link: "Contact" },
  ];
  let router = useRouter();

  return (
    <>
      <Box className="ml-auto flex flex-wrap w-1/2 justify-end text-sm">
        {menuBarContent.map((data, index) => {
          return (
            <div
              key={index}
              className={` text-base grow border-b cursor-pointer ${
                data.title == name ? "text-customGreen" : ""
              }`}
              onClick={() => {
                setName(data.title);
                router.push(`/page/${data.link}`);
              }}
            >
              <a
                className={`group transition decoration-0 w-full	 no-underline duration-300 border-b ${
                  data.title == name ? "text-customGreen" : "text-black text"
                }`}
              >
                {data.title}
                <span
                  className={`block max-w-0 w-16 max-w-full transition-all duration-500 h-0.5 ${
                    data.title == name ? "bg-customGreen" : ""
                  }`}
                ></span>
              </a>
            </div>
          );
        })}
      </Box>
    </>
  );
}
