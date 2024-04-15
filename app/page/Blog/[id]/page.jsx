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

  const useStateCode = `import React, { useState } from 'react';

    const Counter = () => {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );
    };
    
    export default Counter;
    `;

  const useEffectCode = `
    import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DataFetcher;
`;

  const useContextCode = `import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const ThemedButton = () => {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.color }}>
      Themed Button
    </button>
  );
};

export default ThemedButton;
`;

  const useReducerCode = `
import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default Counter;
`;
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
          To create a reusable React component in React.js, you can define a
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
        <Typography variant="h5" className="my-4 text-black font-extrabold	">
          Rect Hooks
        </Typography>
        <Typography className="leading-8">
          React hooks are functions that let you use state and other React
          features in functional components instead of class components. They
          were introduced in React 16.8 and provide a simpler and more concise
          way to manage state and side effects in your components.
        </Typography>
        <Typography variant="h6" className="my-2 text-black font-extrabold	">
          Use State Hook:
        </Typography>
        <Typography className="leading-8">
          <ul>
            <li>Allows functional components to manage state.</li>
            <li>Returns a stateful value and a function to update it.</li>
            <li>Here's an example:</li>
          </ul>
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
              {useStateCode}
            </DynamicSyntaxHighlighter>
          )}
        </Typography>
        <Typography variant="h6" className="my-2 text-black font-extrabold	">
          Use Effect Hook:
        </Typography>
        <Typography className="leading-8">
          <ul>
            <li>
              Allows performing side effects in functional components (e.g.,
              data fetching, subscriptions, DOM manipulations).
            </li>
            <li>
              Similar to componentDidMount, componentDidUpdate, and
              componentWillUnmount lifecycle methods combined. Runs after every
              render by default.
            </li>
            <li>Here's an example:</li>
          </ul>
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
              {useEffectCode}
            </DynamicSyntaxHighlighter>
          )}
        </Typography>
        <Typography variant="h6" className="my-2 text-black font-extrabold	">
          useContext() Hook:
        </Typography>
        <Typography className="leading-8">
          <ul>
            <li>
              Allows accessing the context (global state) in functional
              components.
            </li>
            <li>
              Takes a context object created by React.createContext() as an
              argument.
            </li>
            <li>Here's an example:</li>
          </ul>
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
              {useContextCode}
            </DynamicSyntaxHighlighter>
          )}
        </Typography>
        <Typography variant="h6" className="my-2 text-black font-extrabold	">
          useReducer() Hook:
        </Typography>
        <Typography className="leading-8">
          <ul>
            <li>
              Alternative to useState() for managing more complex state logic.
            </li>
            <li>
              Accepts a reducer function and initial state, returns the current
              state and a dispatch function to update it.
            </li>
            <li>Here's an example:</li>
          </ul>
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
              {useReducerCode}
            </DynamicSyntaxHighlighter>
          )}
        </Typography>
        <Typography className="leading-8">
          These are just a few examples of React hooks. There are several other
          hooks like useCallback(), useMemo(), useRef(), etc., which serve
          various purposes in React functional components.
        </Typography>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <div class="envelope">
          <div class="back"></div>
          <div class="letter">
            <div class="text">Thanks For Reading !</div>
          </div>
          <div class="front"></div>
          <div class="top"></div>
          <div class="shadow"></div>
        </div>
      </Box>
    </>
  );
};
export default BlogContent;
