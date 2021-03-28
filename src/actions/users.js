import { RECEIVE_USERS } from '../constants/users';

export const receiveUsers = (users) => {
	return {
		type: RECEIVE_USERS,
		users
	};
};
