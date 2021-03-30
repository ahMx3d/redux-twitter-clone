import React, { Component } from "react"
import { connect } from "react-redux"
import Tweet from "./Tweet"
import NewTweet from "./NewTweet"

class TweetPage extends Component {
	render() {
		const { id, replies, tweet } = this.props
		return (
			<div>
				{tweet && (
					<React.Fragment>
						<Tweet id={id} />
						<NewTweet id={id} />
						{replies.length !== 0 && (
							<React.Fragment>
								<h3 className="center">Replies</h3>
								<ul>
									{replies.map((replyId) => (
										<li key={replyId}>
											<Tweet id={replyId} />
										</li>
									))}
								</ul>
							</React.Fragment>
						)}
					</React.Fragment>
				)}
			</div>
		)
	}
}

const mapStateToProps = ({ authUser, tweets, users }, props) => {
	const { id } = props.match.params
	return {
		tweet   : tweets[id],
		id,
		replies : !tweets[id]
			? []
			: tweets[id].replies.sort(
					(a, b) => tweets[b].timestamp - tweets[a].timestamp,
				),
	}
}

export default connect(mapStateToProps)(TweetPage)
