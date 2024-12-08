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
		<div>
			{
				data.tickets && (
					<Chart
						chartType="PieChart"
						data={[
							["Ticket", "Quantidade"],
							Object.entries(data.tickets).map((key, value) => {
								return [key, value];
							})
						]}
						options={{
							title: "Ticket"
						}}
						legendToggle
					/>
				)
			}
			<Chart
				chartType="PieChart"
				data={[
					["Ticket", "Quanintidade"],
					["Reclamação", 16],
					["Sugestao", 25],
					["Manutenção", 40],
					["Outros", 55],
				]}
				options={{
					title: "Ticket",
				}}
				legendToggle
			/>
			<Chart
			chartType="PieChart"
			data={[
			["Ticket", "Quanintidade"],
			["Reclamação", 16],
			["Sugestao", 25],
			["Manutenção", 40],
			["Outros", 55],
		]}
		options={{
		title: "Ticket",
		}}
			legendToggle
		/>
	</div>
	)
}
