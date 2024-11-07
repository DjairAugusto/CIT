import { useEffect } from 'react';

const updateMetaTags = ({title, meta}) => {

	document.title = `CIT`;
	if(title) document.title = `${title} | CIT`;

	if(meta) {
		const existingMetaTags = document.querySelectorAll('meta[name], meta[property]');
		existingMetaTags.forEach(tag => tag.remove());
		
		Object.keys(meta).forEach((key) => {
			const metaTag = document.createElement('meta');
			metaTag.setAttribute(meta[key].attribute, key);
			metaTag.content = meta[key].content;
			document.head.appendChild(metaTag);
		});
	}

};

export default updateMetaTags;