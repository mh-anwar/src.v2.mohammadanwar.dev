import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Virtual } from 'swiper/modules';
import ArrowBack from '../../assets/arrow_back.svg';
import ArrowForward from '../../assets/arrow_forward.svg';
import Quibble from '../../assets/quibble.png';
import GPTDetector from '../../assets/gptdetector.png';
import Symbar from '../../assets/symbar.png';
import ProjectCard from '../../Components/ProjectCard';
import './index.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';

export default function Projects() {
	const ProjectList = {
		'Quibble: A Real Marketplace': {
			image: Quibble,
			techUsed: ['React', 'Node.js', 'Heroku', 'Deta'],
			description:
				'Quibble is a platform that connects online buyers to online sellers. Buyers can range from people who enjoy the art of haggling, to money-conscious individuals.',
			num: 1,
			githubLink: 'https://github.com/mh-anwar/quibble',
			liveDemoLink: 'https://quibble.anwar.app',
		},
		'GPT Detector For StackOverflow': {
			image: GPTDetector,
			techUsed: ['HTML', 'CSS', 'JavaScript', 'Chat GPT', 'Extensions'],
			description: `GPTDetector uses Chat GPT to generate answers for StackOverflow questions, and determine similiarity of other answers.
      While you are browsing StackOverflow, ChatGPT sums up all the answers, saving you time.`,
			num: 0,
			githubLink: null,
			liveDemoLink:
				'https://chrome.google.com/webstore/detail/gpt-detector-for-stackove/lblhlbnnagmgddncifjahdigccdjndmn',
		},
		Symbar: {
			image: Symbar,
			techUsed: ['HTML', 'CSS', 'JavScript', 'Extensions'],
			description: `A toolbar to easily access symbols and accents. 
      Initially developed for students who had to search up symbols each time they had to use them,
      this extensions lets you add your own and use pre-added symbols and accents.`,
			num: 1,
			githubLink: 'https://github.com/mh-anwar/symbar',
			liveDemoLink:
				'https://chrome.google.com/webstore/detail/symbar-accents-symbols-ma/hljljfcdpdhjnclioogdnekngnnfhnnk',
		},
	};
	return (
		<section id='projects' className='projects-section'>
			<h1>My Projects</h1>
			<div className='projects-display'>
				<img src={ArrowBack} className='swiper-prev' />
				<Swiper
					modules={[Navigation, A11y, Virtual]}
					navigation={{
						nextEl: '.swiper-next',
						prevEl: '.swiper-prev',
					}}
					className='project-swiper'
					slidesPerView={1}
					spaceBetween={100}
					virtual
				>
					{Object.entries(ProjectList).map(([title, project]) => (
						<SwiperSlide
							key={title}
							className='project-swiper-slide'
						>
							<ProjectCard title={title} project={project} />
						</SwiperSlide>
					))}
				</Swiper>
				<img src={ArrowForward} className='swiper-next' />
			</div>
		</section>
	);
}
