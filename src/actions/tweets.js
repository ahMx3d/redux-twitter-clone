import { RECEIVE_TWEETS, TOGGLE_TWEET } from "../constants/tweets"
import { saveLikeToggle } from "../utils/api"

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
		return saveLikeToggle(info).catch((e)=>{
			console.warn('Error in toggle tweet:', e)
			dispatch(toggleTweet(info))
			alert('There is an error liking the tweet, try again')
		})
	}
}