* liri

** App Link: https://fathomless-lowlands-26190.herokuapp.com/ **

Below are the instruction if you want to clone and run the repo on your computer:
* To run this app on locally you need to install the following:
* Once you have the github repo cloned in git bash run command 'npm i' without the quotes. 
  That will install all the packages required to run the app.
  
* Next, create a file named **.env** in the root folder, add the following to it, replacing the values with your API keys (no quotes) once you have them:
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a client id and client secret:
Step One: Visit https://developer.spotify.com/my-applications/#!/
Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.
Step Three: Once logged in, navigate to https://developer.spotify.com/my-applications/#!/applications/create to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.
Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the node-spotify-api package.
