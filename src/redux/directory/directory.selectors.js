import { createSelector } from "reselect";

const selectDirectory = state => state.directory; //input selector

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)