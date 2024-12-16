import React, {useEffect, useState} from 'react'
import {Chart} from "react-google-charts";
import axios from "../utils/requisition/citRequisition";
import Loading from '../components/Loading';

export default function Indicator() {
	const [data, setData] = useState({});

	function setTicketData(tickets) {
		setData({...data, tickets})
	}

	function setVisitorData(visitors) {
		setData({...data, visitors})
	}

	function setNoticeData(notices) {
		setData({...data, notices})
	}

	useEffect(() => {
		axios.get("/report/ticket")
			.then(res => {
				setTicketData(res.data);
			})
			.catch(err => {
				console.error(err);
			});
		
		axios.get("/report/visitors")
			.then(res => {
				setVisitorData(res.data);
			})
			.catch(err => {
				console.error(err);
			});
		
		axios.get("/report/notice")
			.then(res => {
				setNoticeData(res.data);
			})
			.catch(err => {
				console.error(err);
			});
	}, [data, setData, setVisitorData, setTicketData, setNoticeData]);

	return (
		<main>
			<Chart
				chartType="ColumnChart"
				data={[
					["Mêses", "Sugestão", "Reclamação", "Outro", "Total"],
					["2024/jan", 5, 10, 5, 20],
					["2024/fev", 6, 8, 4, 18],
					["2024/mar", 10, 5, 3, 18],
					["2024/abr", 12, 10, 5, 27],
					["2024/mai", 6, 8, 4, 18],
					["2024/jun", 10, 5, 3, 18],
					["2024/jul", 11, 10, 5, 26],
					["2024/ago", 6, 8, 4, 18],
					["2024/set", 10, 5, 3, 18],
					["2024/out", 14, 10, 5, 29],
					["2024/nov", 6, 8, 4, 18],
					["2024/dez", 10, 5, 3, 18],
				]}
				options={{
					title: "Tickts abertos por mês",
					series: {3: {type: 'line'}},
					vAxis: {title: 'Tickts'},
					hAxis: {title: 'Meses'},
				}}
			/>
			<Chart
				chartType="LineChart"
				data={[
					["Mês", "Quantidade"],
					['2024/jan', 25],
					['2024/fev', 4],
					['2024/mar', 2],
					['2024/abr', 5],
					['2024/mai', 7],
					['2024/jun', 3],
					['2024/jul', 6],
					['2024/ago', 8],
					['2024/set', 9],
					['2024/out', 10],
					['2024/nov', 11],
					['2024/dez', 12],
				]}
				options={{
					title: "Novos visitantes registrados"
				}}
			/>
			<Chart
				chartType="LineChart"
				data={[
					["Mês", "Taxa de Atualização"],
					['2024/jan', 5],
					['2024/fev', 7],
					['2024/mar', 6],
					['2024/abr', 8],
					['2024/mai', 5],
					['2024/jun', 9],
					['2024/jul', 4],
					['2024/ago', 6],
					['2024/set', 7],
					['2024/out', 8],
					['2024/nov', 5],
					['2024/dez', 6],
				]}
				options={{
					title: "Taxa de Atualização do Mural de Avisos",
					vAxis: { title: 'Taxa de Atualização' },
					hAxis: { title: 'Meses' },
				}}
			/>
		</main>
	)

	// return (
	// 	<div>
	// 		{
	// 			data.tickets && (
	// 				<Chart
	// 					chartType="PieChart"
	// 					data={[
	// 						["Ticket", "Quantidade"],
	// 						Object.entries(data.tickets).map((key, value) => {
	// 							return [key, value];
	// 						})
	// 					]}
	// 					options={{
	// 						title: "Ticket"
	// 					}}
	// 					legendToggle
	// 				/>
	// 			)
	// 		}
	// 		<Chart
	// 			chartType="PieChart"
	// 			data={[
	// 				["Ticket", "Quanintidade"],
	// 				["Reclamação", 16],
	// 				["Sugestao", 25],
	// 				["Manutenção", 40],
	// 				["Outros", 55],
	// 			]}
	// 			options={{
	// 				title: "Ticket",
	// 			}}
	// 			legendToggle
	// 		/>
	// 		<Chart
	// 		chartType="PieChart"
	// 		data={[
	// 		["Ticket", "Quanintidade"],
	// 		["Reclamação", 16],
	// 		["Sugestao", 25],
	// 		["Manutenção", 40],
	// 		["Outros", 55],
	// 	]}
	// 	options={{
	// 	title: "Ticket",
	// 	}}
	// 		legendToggle
	// 	/>
	// </div>
	// )
}
