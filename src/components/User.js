var React = require('react');

var UserById = React.createClass({
  render: function(){
    return (
      <div className="ui message">
        <h1 className="ui header">User screen by Id!</h1>
        <p>User ID:{this.props.params.userID} (This is coming from the URL and routed as userID<br/>
            User screen by ID routed  by react-router</p>
      </div>
    );
  }
});

module.exports = UserById;
