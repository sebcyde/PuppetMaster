import React from 'react';
import { FadeLoader } from 'react-spinners';

function LoadingScreen() {
	return (
		<div className="LoadingPage">
			<FadeLoader color="black" />
		</div>
	);
}

export default LoadingScreen;
