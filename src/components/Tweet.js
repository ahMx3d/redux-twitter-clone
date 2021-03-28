import React, { Component } from "react"
import { connect } from "react-redux"
import { formatTweet, formatDate } from "../utils/helpers"

import { TiArrowBackOutline } from "react-icons/ti"
import { TiHeartOutline } from "react-icons/ti"
import { TiHeartFullOutline } from "react-icons/ti"

class Tweet extends Component {
	handleLike(e) {
		e.preventDefault()

		// Todo: Handle Like Tweet
	}
	toParent(e, id) {
		e.preventDefault()

		// Todo: Redirect to Parent Tweet
	}
	render() {
		const { tweet } = this.props,
			{
				name,
				avatar,
				timestamp,
				text,
				hasLiked,
				likes,
				replies,
				parent,
			} = tweet
		return !tweet ? (
			<p>This tweet doesn't exist</p>
		) : (
			<div className="tweet">
				<img
					src={avatar}
					alt={`Avatar of ${name}`}
					className="avatar"
				/>
				<div className="tweet-info">
					<div>
						<span>{name}</span>
						<div>{formatDate(timestamp)}</div>
						{parent && (
							<button
								className="replying-to"
								onClick={(e) => this.toParent(e, parent.id)}
							>
								Replying to @{parent.author}
							</button>
						)}
						<p>{text}</p>
					</div>
					<div className="tweet-icons">
						<TiArrowBackOutline className="tweet-icon" />
						<span>{replies !== 0 && replies}</span>
						<button
							className="heart-button"
							onClick={this.handleLike}
						>
							{hasLiked === true ? (
								<TiHeartFullOutline
									color="#e0245e"
									className="tweet-icon"
								/>
							) : (
								<TiHeartOutline className="tweet-icon" />
							)}
						</button>
						<span>{likes !== 0 && likes}</span>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({ authUser, users, tweets }, { id }) => {
	const tweet = tweets[id],
		parentTweet = !tweet ? null : tweets[tweet.replyingTo]

	return {
		authUser,
		tweet    : !tweet
			? null
			: formatTweet(tweet, users[tweet.author], authUser, parentTweet),
	}
}

export default connect(mapStateToProps)(Tweet)
