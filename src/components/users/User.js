import React, { Component } from 'react'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
    }
    render() {

        const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user

        const { loading } = this.props
        return (
            <div>
                <h1>{name}</h1>
                <img src={avatar_url} style={{ width: '100px' }} />
                <h3>{location}</h3>
                <h3>{public_repos}</h3>
                <h3>{public_gists}</h3>
                <h3>{bio}</h3>
            </div>
        )
    }
}

export default User
