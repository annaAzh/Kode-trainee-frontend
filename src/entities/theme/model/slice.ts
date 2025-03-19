import { getUserTheme } from '@/shared/lib/hooks';
import { THEME } from '@/shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: THEME;
}

const initialState: ThemeState = {
  theme: THEME.LIGHT,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<THEME>) => {
      state.theme = action.payload;
    },
    initTheme: (state) => {
      if (typeof window !== 'undefined') {
        state.theme = getUserTheme();
      }
    },
  },
});

export const { setTheme, initTheme } = themeSlice.actions;

export default themeSlice.reducer;
