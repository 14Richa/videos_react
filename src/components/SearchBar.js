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
				<form onSubmit = {this.onFormSubmit} className = "ui form">
					<div className = "field">
						<label><h2> Search Anything </h2>  </label>
							<input 
								type = "text" 
								placeholder = "Type here...."
								value = {this.state.term}
								onChange = {this.onInputChange}
								/>
					</div>

					<div> <button class = "ui primary button" onClick = {this.onFormSubmit}> Search </button> </div>




				</form>  
			</div>
			
			
		);
	}
}




export default SearchBar;