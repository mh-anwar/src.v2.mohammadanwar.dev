import './index.scss';
import Me from '../../assets/me.jpg';

export default function About() {
	return (
		<section id='about' className='about-section'>
			<h1>About Me</h1>
			<div className='about'>
				<img className='my-image' src={Me}></img>
				<div className='card'>
					<p>
						I&apos;m a grade 12 student from the beautiful province
						of Ontario! I am a self-taught web developer with a
						passion for learning about anything related to
						technology.
					</p>{' '}
					<p>
						From a young age, I&apos;ve been keen to use and learn
						about computers. I started programming, when I learned
						Python <i>the Hard Way</i> and I then proceeded to learn
						about web development. I started off by co-developing{' '}
						<a
							href='https://chat.reesechong.com'
							target='_blank'
							rel='noreferrer'
						>
							Genius Chat
						</a>{' '}
						a chat application for me and my friends to use!
					</p>
					<p>
						{' '}
						Since then, I&apos;ve developed advanced React, Node and
						Python applications for fun and for work! I&apos;m also
						interested in Browser Extensions and I tend to find
						unique applications for them.
					</p>
					<p>
						{' '}
						Currently, I&apos;m developing an application with
						experimenting with LLaMA 2, as well as building a
						scalable version of{' '}
						<a
							href='https://chess.anwar.app'
							target='_blank'
							rel='noreferrer'
						>
							Wilson&apos;s Chess CMS
						</a>
						!{' '}
					</p>
				</div>
			</div>
		</section>
	);
}
