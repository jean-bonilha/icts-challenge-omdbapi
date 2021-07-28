import { combineReducers, createStore } from 'redux';

const INITIAL_STATE = {
  videos: [],
  inputSearch: ''
};

const videosReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { videos } = state;
  switch (type) {
    case 'CHANGE_INPUT_SEARCH':
      return { ...state, inputSearch: payload };
    case 'FILL_VIDEOS':
      return { ...state, videos: [...videos, payload] };
    case 'CLEAR_VIDEOS':
      return { ...state, videos: videos.filter(video => video !== payload) };
    default:
      return state;
  };
};

const reducers = combineReducers({
  videosReducer
});

const store = createStore(reducers);

const actions = {
  changeInputSearch: input => ({
    payload: input,
    type: 'CHANGE_INPUT_SEARCH'
  }),
  add: video => ({
    payload: video,
    type: 'FILL_VIDEOS'
  }),
  remove: video => ({
    payload: video,
    type: 'CLEAR_VIDEOS'
  })
};

export { actions, store };
