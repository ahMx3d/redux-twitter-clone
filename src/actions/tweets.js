import { RECEIVE_TWEETS } from "../constants/tweets";

export const receiveTweets = (tweets) => {
	return {
		type: RECEIVE_TWEETS,
		tweets
	};
};
