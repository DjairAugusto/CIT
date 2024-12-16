import {ChartLine, HandCoins, MessagesSquare, PackageSearch, Phone, PiggyBank, Scale, Settings, TriangleAlert, Truck, Users, Wine} from 'lucide-react';

export default function getMenuItems(role=["RESIDENT"]) {
	if (!Array.isArray(role))
		role = [role];
	const items = [
		{to: "/condominium/financial", icon: <PiggyBank />, name: "Financeiro"},
		{to: "/condominium/contact", icon: <Phone />, name: "Contatos"},
		{to: "/condominium/assembly", icon: <Scale />, name: "Assembleias"},
		{to: "/condominium/accountability", icon: <HandCoins />, name: "Prestação de Contas"},
		{to: "/condominium/register/visitor", icon: <Users />, name: "Visitantes"},
		{to: "/condominium/lost-found", icon: <PackageSearch />, name: "Achados e Perdidos"},
		{to: "/condominium/ships", icon: <Truck />, name: "Entregas e Encomendas"},
		{to: "/condominium/common-area", icon: <Wine />, name: "Área Comum"},
		{to: "/condominium/ombudsman", icon: <MessagesSquare />, name: "Ouvidoria"},
		{to: "/condominium/rules", icon: <TriangleAlert />, name: "Regras e Normas"},
	];
	if(role.includes("ADMIN"))
		items.push({to: "/condominium/admin/indicator", icon: <ChartLine />, name: "Indicadores"});
	return items;
}