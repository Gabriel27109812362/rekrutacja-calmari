import {
  PayloadAction,
  createEntityAdapter,
  createSelector,
  createSlice,
} from '@reduxjs/toolkit';
import { Profile } from '../../types/profile';
import { RootState } from '../store';

const profileAdapter = createEntityAdapter({
  selectId: (profile: Profile) => profile.id,
});

export const profileSlice = createSlice({
  name: 'profiles',
  initialState: profileAdapter.getInitialState({
    allSpecialists: true,
    searchQuery: '',
  }),
  reducers: {
    applyProfiles: profileAdapter.setAll,
    updateScore: (
      state,
      action: PayloadAction<{ profileId: string; mark: number }>,
    ) => {
      const { mark, profileId } = action.payload;
      const item = state.entities[profileId];

      profileAdapter.updateOne(state, {
        id: profileId,
        changes: {
          actualRank: mark,
          count: item.count + 1,
          avg: (item.avg * item.count + mark) / (item.count + 1),
        },
      });
    },
    setupFavourite: (
      state,
      action: PayloadAction<{ profileId: string; isFavourite: boolean }>,
    ) => {
      const { isFavourite, profileId } = action.payload;
      profileAdapter.updateOne(state, {
        id: profileId,
        changes: {
          favourite: isFavourite,
        },
      });
    },
    switchSpecialistsList: (
      state,
      action: PayloadAction<{ allSpecialists: boolean }>,
    ) => {
      const { allSpecialists } = action.payload;
      state.allSpecialists = allSpecialists;
    },
    updateSearchQuery: (state, action: PayloadAction<string>) => {
      const query = action.payload;
      state.searchQuery = query;
    },
  },
});

export const {
  applyProfiles,
  updateScore,
  setupFavourite,
  switchSpecialistsList,
  updateSearchQuery,
} = profileSlice.actions;

export const ProfilesSelectors = profileAdapter.getSelectors<RootState>(
  state => state.profiles,
);

export const AllSpecialistsActiveSelector = (state: RootState) =>
  state.profiles.allSpecialists;

export const SearchQuerySelector = (state: RootState) =>
  state.profiles.searchQuery;

export const FilteredSpecialists = createSelector(
  ProfilesSelectors.selectAll,
  AllSpecialistsActiveSelector,
  SearchQuerySelector,
  (profiles, isActiveSpecialists, query) => {
    const profilesFilteredByQuery = profiles.filter(profile =>
      profile.name.toLowerCase().includes(query.toLowerCase()),
    );

    return isActiveSpecialists
      ? profilesFilteredByQuery
      : profilesFilteredByQuery.filter(x => x.favourite);
  },
);
