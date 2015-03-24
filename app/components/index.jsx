'use strict';

var React = require('react');
var Router = require('react-router');
var { RouteHandler } = Router;

module.exports = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>Welcome</h1>
                <RouteHandler {...this.props}/>
            </div>
        );
    }
});