import React, { Component } from "react"
import { connect } from "react-redux"

class NewTweet extends Component {
	state = {
		text : "",
	}

	handleChange = (e) => {
		const text = e.target.value

		this.setState(() => ({
			text,
		}))
	}

	handleSubmit = (e) => {
		e.preventDefault()

		const { text } = this.state

		// Todo: Add Tweet To Store

		console.log("New Tweet:", text)

		this.setState(() => ({
			text : "",
		}))
	}

	render() {
		const { text } = this.state,
			maxLength = 280,
			tweetLeft = maxLength - text.length
		// redirect to "/" if submitted
		return (
			<div>
				<h3 className="center">Compose The Tweet</h3>
				<form className="new-tweet" onSubmit={this.handleSubmit}>
					<textarea
						className="textarea"
						maxLength={280}
						placeholder="What's happening?"
						value={text}
						onChange={this.handleChange}
					/>
					{tweetLeft <= 100 && (
						<div className="tweet-length">{tweetLeft}</div>
					)}
					<button
						className="btn"
						type="submit"
						disabled={text === ""}
					>
						Submit
					</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default /*connect(mapStateToProps, mapDispatchToProps)*/ NewTweet
