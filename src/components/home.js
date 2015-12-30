var React = require('react');

var Home = React.createClass({
  render: function(){
    return (
      <div className="ui message">
        <h1 className="ui header">Home Screen!</h1>
        <p>This is the home screen. This is called by default or using "/"</p>
      </div>
    );
  }
});

module.exports = Home;