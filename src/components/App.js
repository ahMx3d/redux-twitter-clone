import React, { Component } from "react"
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading"
import { BrowserRouter as Router, Route } from "react-router-dom"

import { handleInitialData } from "../actions/shared"

import Dashboard from "./Dashboard"
import NewTweet from "./NewTweet"
import TweetPage from "./TweetPage"
import Nav from "./Nav"

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
			<Router>
				<div className="container">
					<LoadingBar />
					<Nav />
					{this.props.loading ? null : (
						<div>
							<Route path="/" exact component={Dashboard} />
							<Route path="/tweet/:id" component={TweetPage} />
							<Route path="/new" component={NewTweet} />
						</div>
					)}
				</div>
			</Router>
		)
	}
}

const mapStateToProps = ({ authUser }) => ({
	loading : authUser === null,
})

export default connect(mapStateToProps)(App)
