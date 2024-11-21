// Import images
import WebImage1 from '../images/Sevigo.jpg';
import WebImage2 from '../images/Memoir.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/oceanweb.jpg';
import UIImage2 from '../images/gameweb.jpg';

export const projectsData = [
	{
		id: 1,
		title: 'Memoir',
		category: 'Web Application',
		img: WebImage2,
		ProjectHeader: {
			title: 'Project Management UI - From Context',
			publishDate: 'Jul 26, 2021',
			tags: 'UI / Frontend',
		},
	},
	{
		id: 2,
		title: 'instagram',
		category: 'Mobile Application',
		img: MobileImage2,
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'UI/UX Design',
		img: UIImage1,
	},
	{
		id: 4,
		title: 'Cloud Storage Platform',
		category: 'UI/UX Design',
		img: UIImage2,
	},
	{
		id: 5,
		title: 'React Social App',
		category: 'Mobile Application',
		img: MobileImage1,
	},
	{
		id: 6,
		title: 'Sevigo',
		category: 'Web Application',
		img: WebImage1,
	},
];
