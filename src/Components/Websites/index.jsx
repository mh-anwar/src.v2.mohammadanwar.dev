import './index.scss';

export default function Websites() {
	const websites = [
		'anwar.app',
		'birthday.anwar.app',
		'bookmark.anwar.app',
		'chat.anwar.app',
		'chess.anwar.app',
		'outfit.anwar.app',
		'quibble.anwar.app',
		'sakura.anwar.app',
		'tech.anwar.app',
	];
	return (
		<select className='websites' name='cars' id='cars'>
			{websites.map((website, index) => {
				return (
					<option
						onClick={() => {
							window.open('https://' + website, '_blank');
						}}
						key={index}
						value={website}
					>
						{website}
					</option>
				);
			})}
		</select>
	);
}
