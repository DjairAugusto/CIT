import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routers
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
import AccountabilityAdmin from "./pages/AccountabilityAdmin";
import Login from "./pages/Login";
import ContactResident from "./pages/ContactResident";
import CommonAreaList from "./pages/CommonArea/List";
import CommonAreaDetails from "./pages/CommonArea/Details";
import CommonAreaEdit from "./pages/CommonArea/Edit";
import ShipsOrders from "./pages/ShipsOrders";
import ShipsOrdersAdm from "./pages/ShipsOrdersAdm";
import LostFound from "./pages/LostFound/LostFound";
import LostFoundList from "./pages/LostFound/Details";
import HowWeWork from "./pages/HowWeWork";
import OmbudsmanList from "./pages/Ombudsman/List";
import OmbudsmanDetails from "./pages/Ombudsman/Details";
import Rules from "./pages/Rules";
import FinancialADM from "./pages/FinancialADM";
import Financial from "./pages/Financial";
import AssemblyAdm from "./pages/Assembly/AssemblyAdm";

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
			{
				path: "/howwework",
				element: <HowWeWork />,
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
				path: "/register/apartment/:token",
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
		path: "/condominium/contacts",
		element: <ContactResident />,
	},
	{
		path: "/signin",
		element: <Login />,
	},
	{
		path: "/demo",
		element: <Demo />,
	},
	{
		path: "/common-area",
		children: [
			{
				index: true,
				element: <CommonAreaList />,
			},
			{
				path: "/common-area/details",
				element: <CommonAreaDetails />,
			},
			{
				path: "/common-area/edit",
				element: <CommonAreaEdit />,
			},
		],
	},
	{
		path: "/accountabilityAdmin",
		element: <AccountabilityAdmin />,
	},
	{
		path: "/accountability",
		element: <Accountability />,
	},
	{
		path: "/financialadm",
		element: <FinancialADM />,
	},
	{
		path: "/financial",
		element: <Financial />,
	},
	
	{
		path: "/lost-found",
		children: [
			{
				element: <LostFound />,
				index: true,
			},
			{
				path: "/lost-found/Details",
				element: <LostFoundList />,
			},
		],
	},
	{
		path: "/ships",
		element: <ShipsOrders />,
	},
	{
		path: "/shipsadm",
		element: <ShipsOrdersAdm />,
	},
	{
		path: "/rules",
		element: <Rules />,
	},
	{
		path: "/ombudsman",
		children: [
			{
				element: <OmbudsmanList />,
				index: true,
			},
			{
				element: <OmbudsmanDetails />,
				path: "/ombudsman/:id",
			},
		],
	},
	{
		path: "/assembly",
		children: [
			{
				element: <AssemblyAdm/>,
				index: true,
			},
		],
	},
]);

// Renderizando a aplicação
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// Medição de performance
reportWebVitals();
