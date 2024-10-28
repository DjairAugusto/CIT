import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//rotes
import Main from "./routers/RootMain";
import Register from "./routers/RootRegister";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import PageError from "./pages/PageError";
import Demo from "./pages/Demo";
import CondominiumRegistration from "./pages/CondominiumRegistration";
import ApartmentRegistration from "./pages/ApartmentRegistration";
import FunctionaryRegistration from "./pages/FunctionaryRegistration";
import VisitorRegistration from "./pages/VisitorRegistration";
import Accountability from "./pages/Accountability";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <PageError />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/services",
				element: <Services />,
			},
			{
				path: "/contacts",
				element: <Contacts />,
			},
		],
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <PageError />,
		children: [
			{
				path: "/register/condominium",
				element: <CondominiumRegistration />,
			},
			{
				path: "/register/apartment",
				element: <ApartmentRegistration />,
			},
			{
				path: "/register/functionary",
				element: <FunctionaryRegistration />,
			},
			{
				path: "/register/visitor",
				element: <VisitorRegistration />,
			},
		],
	},
	{
		path: "/demo",
		element: <Demo />,
		children: [],
	},
	{
		path: "/accountability",
		element: <Accountability />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
