import { getInitialData } from "../utils/api"
import { receiveUsers } from "../actions/users"
import { receiveTweets } from "../actions/tweets"
import { setAuthUser } from "../actions/auth"
import { AUTH_ID } from "../constants/shared"
import { showLoading, hideLoading } from "react-redux-loading"

export const handleInitialData = () => {
	return (dispatch) => {
		dispatch(showLoading())
		getInitialData().then(({ users, tweets }) => {
			dispatch(receiveUsers(users))
			dispatch(receiveTweets(tweets))
			dispatch(setAuthUser(AUTH_ID))
			dispatch(hideLoading())
		})
	}
}
