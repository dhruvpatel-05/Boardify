![Boardify Logo](./frontend/src/assets/logo.png)


# Boardify
Boardify is a creative way to display a user's music taste by generating a custom boarding pass based on their Spotify data. 
It combines user’s Spotify listening patterns with a fun, travel-themed personalization can be shared with others on the platform. 
**Note:** This is a project created for UCLA's COM SCI 35L class taught by Professor Eggert in the Winter 2025 quarter.


## Features
- **Connect to Spotify:** The website is integrated with the Spotify API, allowing for seamless integration.
- **Boarding Passes:** Once connected to Spotify, users can generate personalized passes based on their account.
- **Search Bar:** Users can search for their friend's profiles to learn more about them and their music tastes.
- **Interactive Feed Page:** Allows users to like and comment on others' boarding passes, and supports dynamic updates.
- **QR Codes & Barcodes:** Each pass has a scannable QR code and Spotify barcode, allowing for ease of sharing passes and profiles.
- **Deployed:** We deployed our website to a public domain at the following link: https://boardify-1hwa.onrender.com/


## Technologies
- **JavaScript** 
- **Node** 
- **React** 
- **MongoDB** 
- **Express**


## Setup Instructions
- First, clone a copy of this repository to your local machine
- Make sure that your node version is at least v23.7.0, you can chck this by running the following code
```
node --version
```
- Then, in the Boardify directory, run the following code to install the node modules for the website to properly work
```
npm i
cd backend
npm i
cd ..
cd server
npm i
cd ..
cd frontend
npm i
```
- Next, create a .env file in the root of the directory with the following contents, using the secrets if given to you by the developers
```
SPOTIFY_CLIENT_ID=<Paste the Spotify client ID>
SPOTIFY_CLIENT_SECRET=<Paste the Spotify client secret>
SPOTIFY_REDIRECT_URI=https://boardify-6f5u.onrender.com/api/callback
REACT_APP_API_URL=https://boardify-6f5u.onrender.com
JWT_SECRET=<Paste the JWT secret>
```
- Finally, run the following code in the boardify directory to start the website on your local Chrome browser.
```
npm start
```


# Note
Due to limitations of the free version of the Spotify API, new users can't connect their Spotify accounts to their Boardify ones.
We have to add emails manually to the Spotify developer page for users to conect their Spotify accounts, so new users must ask us for approval.


## Authors
- Ethan Tran - Did most of the backend, including the database setup and all requests to the database for user auth and information retrieval. Set up most of the front end calls to the backend. Helped create and debug the backend calls to spotify api. Set up the browser routing.
- Dhruv Patel - Full User Authentication, Full Search Bar Functionality, Full QR Code Implementation for Boarding Pass, Logic for Profile Page and Home Page display.
- Aditya Patil - Full Frontend for Profile page, Spotify API connection backend frontend connection, Entire ReadMe, Backend connection for boarding pass data collection.
- Pauline Vu - Frontend for Boarding Pass page, made the boarding pass and save ticket buttons, Styled the boarding pass to display data, helped fetch Spotify data to frontend, set up like and comment functions, Created a posting function.
- Darel Morado
