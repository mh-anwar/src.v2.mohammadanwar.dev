import './index.scss';

export default function Introduction() {
	return (
		<section className='introduction'>
			<div className='text'>
				<h3 className='text-xl md:text-2xl'>Hey, I&apos;m</h3>
				<h1 className='text-2xl font-bold md:text-4xl'>
					Mohammad Anwar
				</h1>
				<p>
					A Grade 12 student captivated by the marvels of the web,
					working to educate and inspire others at{' '}
					<a
						href='https://csya-edu.org'
						target='_blank'
						rel='noreferrer'
					>
						Computer Science Youth of America
					</a>
					.
				</p>
			</div>
		</section>
	);
}
