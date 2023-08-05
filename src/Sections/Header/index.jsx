import Websites from '../../Components/Websites';
import './index.scss';
export default function Header() {
	return (
		<div className='header'>
			<div className='py-4 '>
				<h1 className='header-text'>
					<Websites />
				</h1>
			</div>

			<div className='sections'>
				{[
					['About', '#about'],
					['Tech', '#tech-stack'],
					['Projects', '#projects'],
					['Contact', '#contact'],
				].map(([title, url]) => (
					<a key={title} href={url}>
						{title}
					</a>
				))}
			</div>
		</div>
	);
}
