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
import AssemblyList from "./pages/Assembly/AssemblyList";
import Indicator from "./pages/indicator";
import HomeResident from "./pages/HomeResident";
import CommonAreaCreate from "./pages/CommonArea/Create";
import RootCondominium from "./routers/RootCondominium";

const router = createBrowserRouter([
	// Paginas iniciais
	{
		path: "/",
		element: <Main />,
		errorElement: <PageError />,
		children: [
		{
				index: true,
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
			}
		]
	},
	// Paginas de login
	{
		path: "/auth/signin",
		element: <Login />,
	},
	// Registro de condominio
	{
		path: "/register/condominium",
		element: <CondominiumRegistration />,
	},
	// Registro de apartamento
	{
		path: "/register/apartment/:token",
		element: <ApartmentRegistration />,
	},
	// Paginas internas do condiminio
	{
		path: "/condominium",
		element: <RootCondominium />,
		errorElement: <PageError />,
		children: [
			// Paginas Dos residentes
			{
				index: true,
				element: <HomeResident />,
			},
			{
				path: "/condominium/financial",
				element: <Financial />,
			},
			{
				path: "/condominium/accountability",
				element: <Accountability />,
			},
			{
				path: "/condominium/ships",
				element: <ShipsOrders />,
			},
			{
				path: "/condominium/rules",
				element: <Rules />,
			},
			{
				path: "/condominium/contact",
				element: <ContactResident />,
			},
			{
				path: "/condominium/lost-found",
				children: [
					{
						element: <LostFound />,
						index: true,
					},
					{
						path: "/condominium/lost-found/Details",
						element: <LostFoundList />,
					},
				],
			},
			{
				path: "/condominium/common-area",
				children: [
					{
						index: true,
						element: <CommonAreaList />,
					},
					{
						path: "/condominium/common-area/details",
						element: <CommonAreaDetails />,
					},
					{
						path: "/condominium/common-area/edit",
						element: <CommonAreaEdit />,
					},
					{
						path: "/condominium/common-area/create",
						element: <CommonAreaCreate />,
					}
				],
			},
			{
				path: "/condominium/ombudsman",
				children: [
					{
						element: <OmbudsmanList />,
						index: true,
					},
					{
						element: <OmbudsmanDetails />,
						path: "/condominium/ombudsman/details",
					},
				],
			},
			{
				path: "/condominium/assembly",
				children: [
					{
						element: <AssemblyList />,
						index: true,
					},
					{
						element: <AssemblyAdm />,
						path: "/condominium/assembly/publish",
					}
				],
			},

			// Paginas exclusivas para o ADM
			{
				path: "/condominium/admin/indicator",
				element: <Indicator />,
			},
			{
				path: "/condominium/admin/accountability",
				element: <AccountabilityAdmin />,
			},
			{
				path: "/condominium/admin/financial",
				element: <FinancialADM />,
			},
			{
				path: "/condominium/admin/indicator",
				element: <Indicator />,
			},
		]
	},
	// Paginas de registro
	{
		path: "/condominium/register/functionary",
		element: <FunctionaryRegistration />,
	},
	{
		path: "/condominium/register/visitor",
		element: <VisitorRegistration />,
	},
])

// Renderizando a aplicação
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// Medição de performance
reportWebVitals();
