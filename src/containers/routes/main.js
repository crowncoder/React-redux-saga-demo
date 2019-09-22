import React from 'react';
import mainStyle from 'styles/main.scss';
const Main = () => {
	return (
		<div>
			<div className={mainStyle.userImage}></div>
			<div className={mainStyle.settingImage}></div>
			<article>
				<header>
					<h1 className={mainStyle.welcome}>Welcome to GTC's Demo</h1>
				</header>
			</article>
		</div>
	);
};

export default Main;
