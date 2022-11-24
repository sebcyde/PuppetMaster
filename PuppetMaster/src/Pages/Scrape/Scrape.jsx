import React, { useState } from 'react';
import OptionsBanner from '../../Components/Scrape/OptionsBanner';
import '../../Themes/Scrape.scss';
import { Button } from 'react-bootstrap';
// import { Scraper } from '../../Components/Scrape/Scraper';

function Scrape() {
	const [SearchQuery, setSearchQuery] = useState(
		'https://developers.google.com/web/'
	);

	const ExecuteScrape = () => {
		// Scraper(SearchQuery);
		console.log('Scrape');
	};

	return (
		<div className="Page">
			<OptionsBanner />
			<div className="ControlPanel">
				<input type="text" placeholder="Search Query" />
				<Button
					onClick={() => {
						ExecuteScrape();
					}}
				>
					Execute
				</Button>
			</div>
		</div>
	);
}

export default Scrape;
