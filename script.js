function Person(){
	
	return(
		
		<div class="person">

			<h1>Max</h1>
			<p>Your age 28</p>
		</div>
	);
	ReactDOM.render(<Person />,
	document.querySelector('#p1'));
}