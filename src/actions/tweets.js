import { RECEIVE_TWEETS, TOGGLE_TWEET, ADD_TWEET } from "../constants/tweets"
import { saveLikeToggle, saveTweet } from "../utils/api"
import { showLoading, hideLoading } from "react-redux-loading"

export const receiveTweets = (tweets) => {
	return {
		type   : RECEIVE_TWEETS,
		tweets,
	}
}

const toggleTweet = ({ id, authUser, hasLiked }) => ({
	type     : TOGGLE_TWEET,
	id,
	authUser,
	hasLiked,
})

export const handleToggleTweet = (info) => {
	return (dispatch) => {
		dispatch(toggleTweet(info))
		return saveLikeToggle(info).catch((e) => {
			console.warn("Error in toggle tweet:", e)
			dispatch(toggleTweet(info))
			alert("There is an error liking the tweet, try again")
		})
	}
}

const addTweet = (tweet) => ({
	type  : ADD_TWEET,
	tweet,
})

export const handleAddTweet = (text, replyingTo) => {
	return (dispatch, getState) => {
		const { authUser } = getState()

		dispatch(showLoading())
		return saveTweet({ text, author: authUser, replyingTo })
			.then((tweet) => dispatch(addTweet(tweet)))
			.then(() => dispatch(hideLoading()))
	}
}
