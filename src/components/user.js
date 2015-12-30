var React = require('react');

var User = React.createClass({
  render: function(){
    return (
      <div className="ui message">
        <h1 className="ui header">User Screen!</h1>
        <p>User screen routed by react-router</p>
      </div>
    );
  }
});

module.exports = User;