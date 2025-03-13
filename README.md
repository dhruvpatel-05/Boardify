# Boardify
Boardify is a creative way to display a user's music taste by generating a custom boarding pass based on their Spotify data. 
It combines user’s Spotify listening patterns with a fun, travel-themed personalization can be shared with others on the platform. 
**Note:** This is a project created for UCLA's COM SCI 35L class taught by Professor Eggert in the Winter 2025 quarter.


## Features
- **Connect to Spotify:** The website is integrated with the Spotify API, allowing for seamless integration.
- **Boarding Passes:** Once connected to Spotify, users can generate personalized passes based on their account.
- **Search Bar:** Users can search for their friend's profiles to learn more about them and their music tastes.
- **Feed Page:** Allows users to like and comment on others' boarding passes, and supports dynamic updates.


## Technologies
- **JavaScript** 
- **Node** 
- **React** 
- **MongoDB** 
- **Express**


## Setup Instructions
- First, clone a copy of this repository to your local machine
- Then, run the following code to install dependencies for the backend in order for it to work
```
cd backend
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
- Finally, run the following code to start the website on the link http://localhost:3000 on your local Chrome browser.
```
cd boardify
npm start
```


## Authors
- Ethan Tran
- Dhruv Patel
- Aditya Patil
- Pauline Vu
- Darel Morado