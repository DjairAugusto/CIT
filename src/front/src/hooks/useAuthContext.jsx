import { useContext } from 'react'
import { authContext } from '../providers/authContext'

export default function useAppContext() {
	const context = useContext(authContext)
	
	if (context === undefined) {
		throw new Error('Não está dentro do contexto')
	}

	return context
}