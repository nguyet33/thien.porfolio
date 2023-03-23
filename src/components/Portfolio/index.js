import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Little Library',
			description:
				'This is an online version of your neighborhood library. The app allows the users to upload their books while also allow to borrow at no cost.',
			image: 'Lil Lib.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express',
				'SQL and Sequelize',
				'Heroku & AWS S3'
			],
			github: 'https://github.com/HowardLee2022/Little-Library',
			deployed: 'https://littlelibrary.herokuapp.com',
		},
		{
			name: 'Makin Moves',
			description:
				'CURRENTLY BUILDING & SOON TO BE DEPLOY. The app will allow simple trip planning with friends and family. The goal is to build the tools needed for communication, trip information and active itenerary.',
			image: 'Plan A Trip.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
				'React'
			],
			github: 'https://github.com/HowardLee2022/Makin-Moves-be',
			deployed: '',
		},
		{
			name: 'Flash Beats',
			description:
				'A clean and accurate way to search for your favorite songs while also displaying the lyrics.',
			image: 'flash-beats-image.gif',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/OwaisIslam/flash-beats',
			deployed: 'https://teamflash1.github.io/music-app/',
		}
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
