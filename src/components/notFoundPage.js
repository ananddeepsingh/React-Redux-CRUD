import React, { Component } from 'react';

class NotFoundPage extends Component {
  render(){
    return(
			<div className="page-not-found">
				<h1>Page Not Found =^( </h1>
				<p>Sorry, there is nothing to see here.</p>
				<p><a href="/"> Back to Home </a></p>
			</div>
		);
	}
};
export default NotFoundPage;