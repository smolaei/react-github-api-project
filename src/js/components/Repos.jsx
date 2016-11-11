var React = require("react");
var $ = require("jquery");
var GithubRepo = require("./GithubRepo");






var Repos = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var that = this;

        $.getJSON(`https://api.github.com/users/${this.props.params.username}/repos?access_token=1a66df422c51d62ef138f4a81e2b4b26e6289aaf`)
            .then(
                function(repo) {
                    that.setState({
                        repo: repo
                    });
                }
            );
    },
    render: function() {
        if (!this.state.repo) {
            return <div>LOADING REPO'S...</div>;
        }
        return (
            <div className="repos">
                <h2>Repo's of {this.props.params.username}</h2>
                <ul>
                {this.state.repo.map(
                    function (eachRepo){
                        return (
                            <GithubRepo user={eachRepo} key={eachRepo.id} />
                        );
                    }
                )}
                </ul>
            </div>
        );
    }
});

module.exports = Repos;