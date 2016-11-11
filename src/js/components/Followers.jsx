var React = require('react');
var $ = require('jquery');
var GithubUser = require('./GithubUser');



var Followers = React.createClass({
    
    getInitialState: function() {
        return {
            page: 1,
            loading: false,
            followers: []
        };
    },
    
    fetchData: function() {
        
        var follow = this.state.followers;
        var page = this.state.page
        this.setState({
            loading: true
        })
    var that = this; // allowes you to use the this keyword in the jQuery allowing it not to get confused with the this keyword in React...often people will call it 'that' but you can call it whatever variable you want
        $.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?page=${this.state.page}&access_token=1a66df422c51d62ef138f4a81e2b4b26e6289aaf`)
            .then(
                function(user) {
                    that.setState({
                        followers: follow.concat(user),
                        loading: false,
                        page: page.page + 1
                    });
                }
            );
    },
    componentDidMount: function(){
        this.fetchData();
    },    
    
    render: function () {
        if (!this.state.followers) {
            return <div>LOADING FOLLOWERS...</div>
        }
        return (
            
            <div className="followers-page">
                 <h3>{this.props.params.username}'s followers</h3>
                <ul>
                        {this.state.followers.map(
                            function (follower){
                                return (
                                    <GithubUser user={follower} key={follower.id} />
                                );
                            }
                        )}
                </ul>
            </div>
            
            
        )    
        
    }
    
})



module.exports = Followers;