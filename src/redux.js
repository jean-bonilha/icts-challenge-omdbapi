import { combineReducers, createStore } from 'redux';

//https://www.omdbapi.com/?apikey=8b816f1c&s=super
const urlApi = 'https://www.omdbapi.com/?apikey=8b816f1c&s=';

const INITIAL_STATE = {
  videos: [],
  inputSearch: ''
};

const findMovies = (text) => {
  fetch(`${urlApi}${text}`)
    .then(response => response.json())
    .then(data => data.Search)
    .then(data => console.log(data));
};

const videosReducer = (state = INITIAL_STATE, action) => {
  const { payload, type } = action;
  const { videos } = state;
  switch (type) {
    case 'FIND_MOVIES':
      findMovies(payload);
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
  findMovies: input => ({
    payload: input,
    type: 'FIND_MOVIES'
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
