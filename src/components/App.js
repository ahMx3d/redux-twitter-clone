import React, { Component } from "react"
import { connect } from "react-redux"
import LoadingBar from "react-redux-loading"
import { handleInitialData } from "../actions/shared"
import Dashboard from "./Dashboard"
import NewTweet from "./NewTweet"

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}
	render() {
		return (
			<div>
				<LoadingBar />
				{/* {this.props.loading ? null : <Dashboard />} */}
				<NewTweet/>
			</div>
		)
	}
}

const mapStateToProps = ({ authUser }) => ({
	loading : authUser === null,
})

export default connect(mapStateToProps)(App)
