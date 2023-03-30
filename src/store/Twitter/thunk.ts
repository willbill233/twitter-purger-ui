import { ThunkAction } from 'redux-thunk';
import getTweets from '../../services/Twitter/TwitterService';
import { getTweetsFailure, getTweetsRequest, getTweetsSuccess, TwitterResponseActionTypes } from './reduxActions';
import { RootState } from './store';

export const fetchTweets = (): ThunkAction<void, RootState, unknown, TwitterResponseActionTypes> => {
  return async (dispatch) => {
    try {
      dispatch(getTweetsRequest());
      const tweets = await getTweets();
      dispatch(getTweetsSuccess(tweets));
    } catch (error) {
      dispatch(getTweetsFailure(error.message));
    }
  };
};
