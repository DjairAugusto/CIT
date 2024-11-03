import axios from 'axios';

// TODO Pegar cookie de autenticação

const instance =axios.create({
	baseURL: 'http://localhost:8080/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default instance;