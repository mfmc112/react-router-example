var React = require('react');
var Link = require('react-router').Link;

var MenuOption = React.createClass({
    render: function(){
        return (
            <div className="two wide column">
                <Link to={this.props.linkTo}>{this.props.linkDescription}</Link>
            </div>
        );
    }
});

module.exports = MenuOption;
