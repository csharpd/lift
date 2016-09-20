var USER_DATA = {
	name: "chloe",
	username: 'csharpd',
	image: 'https://avatars3.githubusercontent.com/u/4848969?v=3&u=c8690a420ccfd7a5ea4f4028bfc479859177e854&s=140'
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}}></img>
	}
});

// whatever the component wraps will become {this.props.children}
// in this case the <Link> component nested in Profile Link wraps {this.props.username}
// we can call this.changeURL in render as it is a function defined within the Link component
var Link = React.createClass({
	changeURL: function () {
		window.location.replace(this.props.href)
	},
	render: function () {
		console.log(this.props.children);
		return (
			<span 
				style={{color: 'blue', cursor: 'pointer'}}
				onClick={this.changeURL}>
				{this.props.children}
			</span>
		)
	}
})

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div>
				<Link href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</Link>
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render: function () {
		return <div>{this.props.name}</div>
	}
})

var Avatar = React.createClass({
  render: function () {
    return(
      <div>
        <ProfilePic imageUrl={this.props.user.image}/>
        <ProfileName name={this.props.user.name}/>
        <ProfileLink username={this.props.user.username}/>
      </div>
    );
  }
});

ReactDOM.render(
	<Avatar user={USER_DATA}/>,
	document.getElementById('app')
)
