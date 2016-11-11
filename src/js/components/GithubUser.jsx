var React = require("react")
var $ = require('jquery')
var Link = require("react-router").Link;

var GithubUser = React.createClass({
    render: function() {
        return (
            <li>
                <Link className="follow" to={"/user/"+this.props.user.login}>
                    <img className="user-info__avatar" src={this.props.user.avatar_url} />
                </Link>
            </li>
        );
    }
})




module.exports = GithubUser;