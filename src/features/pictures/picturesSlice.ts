import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { hundredPaintings } from '../../data/api';
import { imageAddress } from '../../data/api';

export const getHundredPaintings = createAsyncThunk(
  'pictures/getHundredPaintings',
  async (page: number) => {
    const address = hundredPaintings(page);
    const response = await axios.get(address);
    return response.data;
  }
);

export const loadMore = createAsyncThunk(
  'pictures/loadMore',
  async (page: number) => {
    const address = hundredPaintings(page);
    const response = await axios.get(address);
    return response.data;
  }
);

interface Picture {
  link: string;
  title: string;
  artist: string;
}

interface PicturesSliceState {
  status: 'idle' | 'loading' | 'fulfilled' | 'rejected';
  pictureLinks: Picture[];
  currentPage: number | null;
}

const initialState: PicturesSliceState = {
  status: 'idle',
  pictureLinks: [],
  currentPage: null,
};

const picturesSlice = createSlice({
  name: 'pictures',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHundredPaintings.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(getHundredPaintings.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.currentPage = action.payload.pagination.current_page;
      const links = [];
      for (const elem of action.payload.data) {
        if (elem.image_id) {
          const link = imageAddress(elem.image_id);
          const artist = elem.artist_title;
          const title = elem.title;
          links.push({ link: link, artist: artist, title: title });
        }
      }
      state.pictureLinks = links;
    });
    builder.addCase(loadMore.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(loadMore.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.currentPage ? (state.currentPage += 1) : state.currentPage;
      for (const elem of action.payload.data) {
        if (elem.image_id) {
          const link = imageAddress(elem.image_id);
          const artist = elem.artist_title;
          const title = elem.title;
          state.pictureLinks.push({ link: link, artist: artist, title: title });
        }
      }
    });
  },
});

export default picturesSlice.reducer;
