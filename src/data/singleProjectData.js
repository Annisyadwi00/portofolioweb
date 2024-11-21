// Import images
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/gameweb.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/oceanweb.jpg';
import Image6 from '../images/ui-project-2.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = {
	ProjectHeader: {
		title: 'Project Management UI',
		publishDate: 'Jul 26, 2021',
		tags: 'UI / Frontend',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Kabul Project Management UI',
			img: Image1,
		},
		{
			id: 2,
			title: 'Kabul Project Management UI',
			img: Image2,
		},
		{
			id: 3,
			title: 'Kabul Project Management UI',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'About Client',
		CompanyInfo: [
			{
				id: 1,
				title: 'Program',
				details: 'Fullstack Web Develop',
			},
			{
				id: 2,
				title: 'Sebagai',
				details: 'UI Design & Frontend Development',
			},
			{
				id: 3,
				title: 'Mitra',
				details: 'Productzilla',
			},
			{
				id: 4,
				title: 'Phone',
				details: '0851500000000',
			},
		],
		ObjectivesHeading: 'Objective',
		ObjectivesDetails:
			'Sebagai mahasiswa Teknik Informatika, saya berkomitmen untuk mengembangkan solusi teknologi inovatif yang berdampak positif pada masyarakat. Portofolio ini mencerminkan dedikasi saya terhadap penguasaan teknologi, kolaborasi, dan pembelajaran berkelanjutan demi mencapai tujuan profesional di dunia teknologi informasi.',
		Technologies: [
			{
				title: 'Tools',
				techs: [
					'HTML',
					'CSS',
					'JavaScript',
					'Vue.js',
					'TailwindCSS',
					'AdobeXD',
				],
			},
		],
		ProjectDetailsHeading: 'Challenge',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Saya percaya bahwa setiap tantangan adalah peluang untuk tumbuh dan belajar. Dalam perjalanan saya di dunia teknologi, saya menghadapi berbagai tantangan, mulai dari memahami algoritma kompleks hingga mengimplementasikan solusi teknologi yang efektif. Portofolio ini adalah bukti bagaimana saya menghadapi dan mengatasi tantangan tersebut dengan dedikasi dan kreativitas.',
			},
			{
				id: 2,
				details:
					'Tantangan bukanlah hambatan, melainkan pijakan untuk mencapai potensi terbaik. Dari proyek IoT hingga pengembangan aplikasi dengan kriptografi, setiap tantangan telah membentuk saya menjadi seorang profesional yang lebih tangguh dan inovatif.',
			},
			{
				id: 3,
				details:
					'Dalam dunia teknologi yang dinamis, tantangan selalu hadir, baik itu dalam memahami teknologi baru, mengatasi keterbatasan sumber daya, atau memastikan solusi yang dikembangkan benar-benar relevan. Saya menganggap setiap tantangan tersebut sebagai motivasi untuk terus belajar dan berinovasi.',
			},
			{
				id: 4,
				details:
					'Dalam dunia teknologi yang dinamis, tantangan selalu hadir, baik itu dalam memahami teknologi baru, mengatasi keterbatasan sumber daya, atau memastikan solusi yang dikembangkan benar-benar relevan. Saya menganggap setiap tantangan tersebut sebagai motivasi untuk terus belajar dan berinovasi.',
			},
		],
		SocialSharingHeading: 'Share This',
		SocialSharing: [
			{
				id: 1,
				name: 'Twitter',
				icon: <FiTwitter />,
				url: 'https://twitter.com',
			},
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/_haru0604',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://facebook.com',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/in/annisyadwi0604/',
			},
			{
				id: 5,
				name: 'Youtube',
				icon: <FiYoutube />,
				url: 'https://www.youtube.com',
			},
		],
	},
	RelatedProject: {
		title: 'Related Projects',
		Projects: [
			{
				id: 1,
				title: 'Mobile UI',
				img: Image4,
			},
			{
				id: 2,
				title: 'Web Application',
				img: Image5,
			},
			{
				id: 3,
				title: 'UI Design',
				img: Image6,
			},
			{
				id: 4,
				title: 'Kabul Mobile App UI',
				img: Image3,
			},
		],
	},
};
