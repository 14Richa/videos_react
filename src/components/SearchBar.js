import './SearchBar.css';


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
						<label ><h1 className = {`heading`}> Search Anything </h1>  </label>
							<input 
								type = "text" 
								placeholder = "Type here...."
								value = {this.state.term}
								onChange = {this.onInputChange}
								/>
					</div>

					<div className = {`button`}> <button className = "ui primary button" onClick = {this.onFormSubmit}> Search </button> </div>




				</form>  
			</div>
			
			
		);
	}
}




export default SearchBar;