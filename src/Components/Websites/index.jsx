import './index.scss';
import open_in_new from '../../assets/open_in_new.svg';
import { useState } from 'react';

export default function Websites() {
	const [websiteLink, setWebsite] = useState('anwar.app');
	const websites = [
		'anwar.app',
		'birthday.anwar.app',
		'bookmark.anwar.app',
		'chat.anwar.app',
		'chess.anwar.app',
		'outfit.anwar.app',
		'quibble.anwar.app',
		'rescue.anwar.app',
		'sakura.anwar.app',
		'tech.anwar.app',
	];
	return (
		<div>
			<form className='website-select'>
				<select className='websites' name='websites' id='websites'>
					{websites.map((website, index) => {
						return (
							<option
								onClick={() => {
									setWebsite(website);
								}}
								key={index}
								value={website}
							>
								{website}
							</option>
						);
					})}
				</select>
				<img
					className='open-in-new'
					src={open_in_new}
					onClick={() => {
						window.open('https://' + websiteLink, '_blank');
					}}
				/>
			</form>
			<p className='really-small-text'>Click here!</p>
		</div>
	);
}
