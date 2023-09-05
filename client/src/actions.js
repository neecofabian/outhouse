import { users, washrooms, reports, reviews } from "./data.js";

// Methods in this file currently modify hard-coded data in data.js
// For now, some are console logs but in Phase 2, these will call the database.

export const setUsername = (newUsername) => {
  // Requires server call. Will be implemented later.
  console.log('Success! Username changed to "' + newUsername + '"');
};

export const setGender = (newGender) => {
  // Requires server call. Will be implemented later.
  console.log('Success! Gender changed to "' + newGender + '"');
};

export const getUsername = () => {
  // Requires server call. Will be implemented later.
};

export const getGender = () => {
  // Requires server call. Will be implemented later.
};

export const getUsers = () => {
  // Requires server call.
  return users;
};

export const getWashrooms = () => {
  // Requires server call.
  return washrooms;
};

export const getReports = () => {
  // Requires server call.
  return reports;
};

export const getReviews = () => {
  // Requires server call.
  return reviews;
};
