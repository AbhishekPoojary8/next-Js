"use client";
import { Box, Typography } from "@mui/material";
import Coding from "../../../assest/Blog/Coding.jpg";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DynamicSyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((module) => module.Prism),
  { ssr: false }
);

const BlogContent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const codeString = `
    // components/ReusableComponent.js
    import React from 'react';
    
    const ReusableComponent = ({ title, items }) => {
      return (
        <div>
          <h2>{title}</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      );
    };
    
    export default ReusableComponent;`;
  return (
    <>
      <Box className="p-[8%]">
        <Typography className="text-gray-500">React Js</Typography>
        <Box>
          <Typography className="font-semibold mt-2 " variant="h4">
            A Complete Tour on React Js, Set-up and working of Hooks
          </Typography>
        </Box>
      </Box>
      <Box>
        <Image
          src={Coding}
          layout="responsive"
          objectFit="cover"
          quality={100}
          height={300}
        />
      </Box>
      <Box className="p-[8%] text-gray-500 ">
        <Typography className="leading-8">
          <b>React.js</b>, developed by Facebook, is a JavaScript library for
          building user interfaces. It utilizes a component-based architecture,
          where UIs are composed of reusable and encapsulated components. This
          approach promotes modularization, code reusability, and
          maintainability, making it an ideal choice for large-scale
          applications. One of the core principles of React.js is declarative
          rendering, where developers describe the desired UI state, and React
          takes care of updating the DOM efficiently to reflect those changes.
          This paradigm simplifies the development process by abstracting away
          the complexities of managing DOM manipulation manually.
        </Typography>

        <Typography className="leading-8">
          <b>React.js</b> promotes a component-based architecture, allowing
          developers to break down complex UIs into smaller, reusable
          components. Components encapsulate their own state and behavior,
          fostering a modular and scalable codebase. This approach enhances code
          readability, facilitates code organization, and encourages
          collaboration among team members.React.js employs a virtual DOM
          (Document Object Model), a lightweight representation of the actual
          DOM. When changes occur in the application state, React constructs a
          new virtual DOM tree and efficiently calculates the minimal set of DOM
          updates needed to synchronize with the actual DOM. This optimization
          significantly improves performance and enhances the user experience.
        </Typography>
        <Typography variant="h5" className="my-4 text-black font-extrabold	">
          React Js Set-up
        </Typography>
        <ul>
          <li>
            <Typography className="leading-8">
              React.js applications are built using Node.js and npm (Node
              Package Manager). First, you need to install Node.js, which
              includes npm, on your computer. You can download and install
              Node.js from the official website.
            </Typography>
          </li>
          <li>
            <Typography className="leading-8">
              Once Node.js and npm are installed, you can create a new React.js
              project using the create-react-app command-line tool. Open your
              terminal or command prompt and run the following command:
            </Typography>
            <Typography className="text-black font-bold my-4">
              npx create-react-app my-react-app
            </Typography>
            <Typography>
              Replace my-react-app with the name you want to give to your
              project. This command will create a new directory with the
              specified name and set up a new React.js project inside it.
            </Typography>
          </li>
          <li>
            <Typography className="leading-8">
              Once inside the project directory, you can start the development
              server by running:
            </Typography>
            <Typography className="text-black font-bold my-4">
              npm start
            </Typography>
            <Typography>
              This command will start the development server and open your
              default web browser to view your React.js application running
              locally. By default, the development server runs on:
              <b>{""}`http://localhost:3000.`</b>
            </Typography>
          </li>
        </ul>
        <Typography variant="h5" className="my-4 text-black font-extrabold	">
          Re-usable Component
        </Typography>
        <Typography>
          To create a reusable React component in Next.js, you can define a
          functional component that accepts props and renders content based on
          those props.
        </Typography>
        <Typography
          className="text-black font-bold my-4"
          style={{ whiteSpace: "pre-line" }}
        >
          {isClient && (
            <DynamicSyntaxHighlighter
              className="text-black "
              language="javascript"
              style={dark}
            >
              {codeString}
            </DynamicSyntaxHighlighter>
          )}
        </Typography>
      </Box>
    </>
  );
};
export default BlogContent;
