import { useEffect } from 'react';

const usePageTitle = (title) => {
	useEffect(() => {
        document.title = `${title} | CIT`;
		if(!title) {
			document.title = "CIT";
		}
    }, [title]);
};

export default usePageTitle;