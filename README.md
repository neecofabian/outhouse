# Outhouse
## Phase 2 - team29

## About Outhouse
Outhouse allows the UofT community to find the best washrooms on campus. Users can find washrooms, leave reviews for washrooms they’ve visited, and view the latest reports that other users have shared.

## Installation
1. Ensure that [node.js](https://nodejs.org/en/download/) is installed.
2. Clone this repository: `git clone https://github.com/csc309-fall-2021/team29.git`
3. Go to the `team29/outhouse` directory.
4. Install dependencies with `npm install`
5. Run `npm start`
6. Log in using one of the credentials
      - username: `user`, password: `user`
      - username: `admin`, password: `admin`

## Dependencies
Outhouse uses the following:
- `react`
- `@material-ui/core`
- `react-router-dom`
- `react-feather`
- `react-responsive-modal`
- `styled-components`
- `dotenv`
- `@react-google-maps/api`

## Usage
### User Functionality
- Log in using credentials username: `user`, password: `user`
- Upon logging in, users are redirected to the  **Map** tab.
    - Scroll through a list of all washrooms in the side bar.
    - Browse the interactive campus map for washrooms, indicated by red pins.
    - Click a pin to reveal the restroom’s information in the side bar.
    - Read some of the reviews for a particular washroom
    - Press `Show More` to be redirected to a page containing all reviews for a particular washroom.
    - Click `LEAVE A REVIEW` to be taken to a review form for the given washroom. Use the sliders and text input boxes to submit a review. Reviews are long-form opinions about the washroom.
        - Rate the washroom based on Cleanliness, Functionality, and Privacy.
        - Provide an additional message for longer thoughts.
    - Click `MAKE A REPORT` to complete a report form about a specific restroom. Reports are short-form alerts that uses post to notify others of updates related to washrooms.
    - Search for a building containing a restroom with the search bar.
- The **Reports** tab contains reports from all users, with the most recent alerts at the top, for a quick way to learn about what is happening in and around the washrooms on campus.
- The **Profile** tab shows the user’s username and gender. These may be changed at any point and the input boxes will reflect any edits. 

### Admin Functionality
- Admin users can do everything users can do, plus access the **Portal** tab.
- Log in using credentials username: `admin`, password: `admin`
- Admin users have all the capabilities of users.
- Upon logging in, admins are redirected to the admin **Portal**.
- Admins are presented with all users, washrooms, reviews, and reports in Outhouse.
- Click `+ New User` to open a modal to create a new user or admin.
- Click `+ New Washroom` to create a new washroom.
- Press the garbage can icons to delete washrooms, reviews, reports, and users, except for oneself.
- Press the pencil icon to open a modal and be prompted to edit washroom information.
- Actions are persistent and many some are confirmed by a Success modal after completion.

## Notes
- Users start in the Login page and can switch to the Sign-up page to create a new user account.
- All users can press the ‘Logout’ button to sign out of Outhouse.
- After 20 minutes, a user is logged out.

## API Routes Overview
### Session Management
- post `/users/login`
- get `/users/logout`
- get `/users/check-session`

### Post Requests
- `/api/users` - add a new user
- `/api/washrooms` - add a new washroom
- `/api/reviews/:washroom_id/:user_id` - make a new review about washroom `washroom_id` from the user `user_id`
- `/api/reports/:washroom_id/:user_id` - make a new report about washroom `washroom_id` from the user `user_id`

### Get Requests
- `/api/users` - retrieve all users, used in admin Portal
- `/api/washrooms` - retrieve all washrooms, used in admin Portal
- `/api/reports` - retrieve all reports, used in admin Portal
- `/api/reviews` - retrieve all reviews, used in admin Portal
- `/api/washrooms/:washroom_id` - retrieve a washroom by its id
- `/api/reviews/washroom/:washroom_id` - retrieve all reviews about a specific washroom
- `/api/reviews/:review_id` - retrieve a review by its id
- `/api/reviews/user/:user_id` - retrieve all reviews written by a specific user

### Patch Requests
- `/api/user/:user_id` - modify attribute of a specific user
- `/api/washrooms/:washroom_id` modify attributes of a specific washroom

### Delete Requests
- `/api/users/:user_id` - remove a specific user
- `/api/reviews/:user_id/:review_id` - remove a specific user
- `/api/washrooms/:washroom_id` - remove a specific user
- `/api/reports/:report_id` - remove a specific user



