import React, { Component } from 'react';

class About extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<div class="container text-center my-5 text">
					<p>
						{' '}
						A
						<span class="color-1"> Online Library </span>
						is an online database of
						<span class="color-2"> Digital Objects </span>
						<br />that can include
						<span class="color-3">
							{' '}
							text, still images, audio, video, or<br /> other digital media formats.{' '}
						</span>
					</p>
				</div>
				<div class="features text-center">
					<div class="heading">FEATURES OF ONLINE LIBRARY</div>
                    <div class=" my-3">
					The advantages of online libraries as a means of easily and rapidly accessing books, archives and
					images of various types are now widely recognized by commercial interests <br/>and public bodies alike.
                    Traditional libraries are limited by storage space; online libraries have the potential to store 
                    much more information, simply because online information<br/> requires very little physical space to 
                    contain it. As such, the cost of maintaining a online library can be much lower than that of a 
                    traditional library. A physical library must spend<br/> large sums of money paying for staff, book maintenance,
                    rent, and additional books. Online libraries may reduce or, in some instances, do away with these fees.
                    Both types of  <br/>library require cataloging input to allow users to locate andr etrieve material. Online 
                    libraries may be more willing to adopt innovations in technology providing users with<br/> improvements in
                    electronic and audio book technology as well as presenting new forms of communication such as wikis and 
                    blogs; conventional libraries may consider that <br/>providing online access to their OP AC catalog is 
                    sufficient. An important advantage to digital conversion is increased accessibility to users. They also 
                    increase availability<br/> to individuals who may not be traditional patrons of a library, due to geographic
                    location or organizational affiliation.
                    </div>
                    </div>
			</div>
		);
	}
}

export default About;
