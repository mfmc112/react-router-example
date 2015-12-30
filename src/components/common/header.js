"use strict";
var React = require("react");
var Link = require('react-router').Link;


var Header = React.createClass({
  render: function(){
    return (
      <div className="ui inverted segment">
        <div className="ui grid">
          <div className="two wide column"><Link to="home">Home</Link></div>
          <div className="two wide column"><Link to="user">User</Link></div>
          <div className="two wide column"><Link to="user/12312">User Passing ID</Link></div>
          <div className="two wide column"><Link to="about">About</Link></div>
        </div>
      </div>
    );
  }
});

module.exports = Header;