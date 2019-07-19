import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {
      title: 'Brainpower',
      duration: '2:33'
    },
    {
      title: 'Room to fall',
      duration: '3:46'
    },
    {
      title: 'Yes',
      duration: '4:23'
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
