var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({
	render: function () {
		console.log(this.props)
		return (
			<div>Hello Friend</div>
		)
	}
})


ReactDOM.render(
	<HelloWorld name="qubit" employees={550}/>,
	document.getElementById('app')
)
