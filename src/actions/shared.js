import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';
import { setAuthUser } from '../actions/auth';
import { AUTH_ID } from '../constants/shared';

export const handleInitialData = () => {
	return (dispatch) => {
		getInitialData().then(({ users, tweets }) => {
			dispatch(receiveUsers(users));
			dispatch(receiveTweets(tweets));
			dispatch(setAuthUser(AUTH_ID));
		});
	};
};
