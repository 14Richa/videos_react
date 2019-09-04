import React from 'react';

class SearchBar extends React.Component {

	state = {term: ''};

	onInputChange = event => {
		this.setState({term:event.target.value});

	};

	onFormSubmit = event => { 
		event.preventDefault();


		this.props.onFormSubmit(this.state.term);

	};

	render() {
		return (

		


			<div className = "ui category search">
				<div className = "ui icon input">
					

				<form onSubmit = {this.onFormSubmit} className = "ui form">
					<div className = "field">
						<label><h2> Search video </h2>  </label>
							<input 
								type = "text" 
								value = {this.state.term}
								name = "video"
								onChange = {this.onInputChange} />
								<div className = "results"></div>

								</div>
	
								

						
				</form>  
			</div>
			</div>
			
		);
	}
}




export default SearchBar;