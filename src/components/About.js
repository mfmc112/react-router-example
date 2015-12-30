var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div className="ui message">
        <h1 className="ui header">About this test!</h1>
        <p>This is a simple test to show how the react-router version 1.xx is working.</p>
        <p>There are a lot of examples on the internet but it is a bit confusing when a breaking version comes along.</p>
        <p>I was trying to develop a simple ap to learn react. It took me longer then I expected because of different versions.</p>
        <br/>
        This is a working example so start your own project now!.
        <div className="ui info message">
          Cheers<br/>
          Marcos Costa
        </div>
      </div>
    );
  }
});

module.exports = About;
