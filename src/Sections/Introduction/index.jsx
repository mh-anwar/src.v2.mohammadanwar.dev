import anime from 'animejs';
import { useEffect, useRef } from 'react';
import './index.scss';

export default function Introduction() {
	const gridRef = useRef(null);

	useEffect(() => {
		const fragment = document.createDocumentFragment();
		const grid = [10, 10];
		for (let i = 0; i < 50; i++) {
			fragment.appendChild(document.createElement('div'));
		}

		gridRef.current.appendChild(fragment);

		const staggersAnimation = anime
			.timeline({
				targets: gridRef.current.children,
				easing: 'easeInOutSine',
				loop: false,
				autoplay: false,
			})
			.add({
				translateX: [
					{
						value: anime.stagger('-.3rem', {
							grid: grid,
							from: 'center',
							axis: 'x',
						}),
					},
				],
				translateY: [
					{
						value: anime.stagger('-.2rem', {
							grid: grid,
							from: 'center',
							axis: 'y',
						}),
					},
				],
				duration: 3000,
				delay: anime.stagger(100, { grid: grid, from: 'center' }),
			});
		staggersAnimation.play();
		setTimeout(() => {
			gridRef.current.remove();
		}, 3000);
	}, []);
	return (
		<section className='introduction'>
			<div className='grid-container' ref={gridRef}></div>
			<div className='text'>
				<h3 className='text-xl md:text-2xl'>Hey, I&apos;m</h3>
				<h1 className='text-2xl font-bold md:text-4xl'>
					Mohammad Anwar
				</h1>
				<p>
					A Grade 12 student captivated by the marvels of the web and
					the boundless world of Artificial Intelligence..
				</p>
			</div>
		</section>
	);
}
