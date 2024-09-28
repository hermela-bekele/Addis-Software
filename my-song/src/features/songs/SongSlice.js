import { createSlice } from '@reduxjs/toolkit';
import { songs } from "../../Mocks/handler";

const initialState = {
  songs: songs,
  status: 'idle',
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongs(state) {
      state.status = 'loading';
    },
    fetchSongsSuccess(state, action) {
      state.status = 'succeeded';
      state.songs = action.payload;
    },
    fetchSongsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    songAdded(state, action) {
      const maxId = state.songs.length > 0 ? Math.max(...state.songs.map(song => song.id)) : 0;
      const newId = maxId + 1;
      state.songs.push({ ...action.payload, id: newId });
    },
    songUpdated(state, action) {
      const { id, title, artist,imageUrl, url } = action.payload; 
      const existingSong = state.songs.find((song) => song.id === id);
      if (existingSong) {
        existingSong.title = title;
        existingSong.artist = artist;
        existingSong.imageUrl = imageUrl;
        existingSong.url = url; 
      }
    },
    songDeleted(state, action) {
      const { id } = action.payload;
      const existingSong = state.songs.find((song) => song.id === id);
      if (existingSong) {
        
        deleteAudioFile(existingSong.url);
      }
    
      
      state.songs = state.songs.filter((song) => song.id !== id);
    
      
      state.songs.forEach((song, index) => {
        song.id = index + 1; 
      });
    },
  },
});

const deleteAudioFile = async (audioUrl) => {
  try {
    await fetch(audioUrl, {
      method: 'DELETE', 
    });
  } catch (error) {
    console.error("Failed to delete audio file:", error);
  }
};

export const { fetchSongs, fetchSongsSuccess, fetchSongsFailure, songDeleted, songAdded, songUpdated } = songsSlice.actions;
export default songsSlice.reducer;