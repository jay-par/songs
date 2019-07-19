export const selectsong = song => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
