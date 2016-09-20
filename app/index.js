var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({
	render: function () {
		console.log(this.props)
		return (
			<div>Hello Friend we work at {this.props.name}. 
			{this.props.name} has {this.props.employees} employees</div>
		
		)
	}
})


ReactDOM.render(
	<HelloWorld name="Qubit" employees={550}/>,
	document.getElementById('app')
)
