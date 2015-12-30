"use strict";
var React = require("react");
var MenuOption = require('./MenuOption');


var Header = React.createClass({
  render: function(){
    return (
      <div className="ui inverted segment">
        <div className="ui grid">
          <MenuOption linkTo="home" linkDescription="Home"/>
          <MenuOption linkTo="user" linkDescription="Users"/>
          <MenuOption linkTo="user/12312" linkDescription="User Passing ID"/>
          <MenuOption linkTo="about" linkDescription="About"/>
        </div>
      </div>
    );
  }
});

module.exports = Header;
