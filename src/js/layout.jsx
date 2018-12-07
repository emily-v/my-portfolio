import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./stores/AppContext.jsx";

import { Home } from "./views/Home.jsx";

export default class Layout extends React.Component {
	constructor() {
		super();

		this.state = {
			projects: [
				{
					image:
						"https://image.ibb.co/dwhNkz/final_project_screenshot_home.png",
					//image: "https://image.ibb.co/npJA5q/Screen-Shot-2018-10-28-at-4-57-10-PM.png",
					title: "Blog, Gallery and E-Commerce app",
					description:
						"Final class project with user and shopping cart functionality using Bootstrap, React.js with React Router and Context API, headless WordPress and PHP",
					repoUrl:
						"https://github.com/emily-v/final-project-emily-keshaunda",
					liveUrl: null,
					demoUrl: "https://streamable.com/c847n"
				},
				{
					image:
						"https://image.ibb.co/hWkH59/meetup_clone_home_screenshot.png",
					title: "'Meetup' website clone",
					description:
						"Reinvention of popular events and social networking app featuring login and RSVP functionality using Bootstrap, React.js, React Router, Context API",
					repoUrl: "https://github.com/emily-v/react-meetup-clone",
					liveUrl: null,
					demoUrl:
						"https://media.giphy.com/media/WNTQowAjukSwzRYolP/giphy.gif"
				},
				{
					image:
						"https://image.ibb.co/bXR5tU/music_website_recreation_screenshot2.png",
					title: "'Unplugged' website recreation from PSD",
					description:
						"Recreated static layout and styling of mock website from Photoshop mockup using HTML and custom CSS",
					repoUrl:
						"https://github.com/emily-v/unplugged-music-project",
					liveUrl:
						"https://emily-v.github.io/unplugged-music-project/",
					demoUrl: null
				},
				{
					image:
						"https://preview.ibb.co/bEamXp/bootstrap_photo_feed_screenshot2.png",
					title: "Photo feed and gallery layout",
					description:
						"Recreated responsive layouts from example images using Bootstrap",
					repoUrl: "https://github.com/emily-v/bootstrap-photo-feed",
					liveUrl: "https://emily-v.github.io/bootstrap-photo-feed/",
					demoUrl: null
				},
				{
					image:
						"https://image.ibb.co/iikODU/to_do_app_screenshot.png",
					title: "React To Do list",
					description:
						"Simple to-do list using State and JavaScript ES6 arrow functions to bind methods to 'this'",
					repoUrl: "https://github.com/emily-v/to-do-list-react",
					liveUrl: "https://emily-v.github.io/to-do-list-react/",
					demoUrl: null
					//gifUrl: "https://media.giphy.com/media/FDtZgR9yZJVMOxJTCT/giphy.gif"
				},
				{
					image:
						"https://image.ibb.co/fJF4np/button_value_counter_screenshot.png",
					title: "Button Value Counter",
					description:
						"Used React stateful and functional components to set State and pass to children as props",
					repoUrl:
						"https://github.com/emily-v/button-value-counter-react",
					liveUrl:
						"https://emily-v.github.io/button-value-counter-react/",
					demoUrl: null
					//gifUrl: "https://media.giphy.com/media/l2S6skBwrBBEjTYj3W/giphy.gif"
				}
			]
		};
	}

	render() {
		return (
			<React.Fragment>
				<BrowserRouter>
					<Switch>
						<Provider value={{ state: this.state }}>
							<Route exact path="/" component={Home} />
						</Provider>
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}
