# Roadmap
- Built the UI
  - Create most of components you are going to use
    - Login: modify current view to something like in the nuxt app, remove the image and create some sort of musical animation
    - Sign In: pretty much the same as the login except that is for sign in 
    - Header: Create menu for when user is not logged in, and make current user menu only visible when user is logged in
    - Navs: Create correct navs and figure out how to create variables for routes and name pages
    - Song details page: this page should look super attractive and it should have a way to download the song stuff as an image, it should also have a way to share their songs through facebook, instagram, and twitter
    - Admin page: this will contain a reference to all the songs a user has created and some sort of form to create another song
    - Admin preference page: here user can change its password, delete its account, view its credit details
    - Payment page: here we need to connect with stripe to create a way for them to pay
    - Landing page: an overview of the app
    - Contact page: use some simple form to get feedback from user, should be available for logged in users too
    - About: a page to explain more in detail about the page and also to show off some stuff
    - Preview page: probably a page to show some popular songs, pretty much the same as the admin page but for the general public, it will link to a song details page of the free popular songs
  - Get Icons and logos for the app


  TODO: Understand how to pass parameters to firebase cloud functions, apperantly you need to send a RequestData object, no idea how that looks...



# Flow

Users will typically land in the landing page, it will contain a brief presentation of what the page is about and top 5 songs of spotify plus 5 random songs of my playlist
They'll be able to download the song description along side with an AI generated image
There will be a button to "generate a new song", if user is not logged in it will be redirected to the signup page, once the user is logged in then it will be possible for him to generate a song
The user should have a page where to view all of his generated songs
And a page to generate a new one, alongside with a view to see the generated song

When searching for a song I'll use the spotify api to find the actual song, maybe get the lyrics if they exists
Seems Like i will also need to create at some point some sort of song lyrics scrapper

Probably for now, the beta is just create a simple form, pass the name of the song and artist and let gpt figure out the rest. I'll probably need to add this in another step, after the intial project is complete.

- Create the models 








- Create users and authenticate them
- Then define the model for the songs and the users
- Add form to generate song pero user
- Display them according to the user
- Add form so to search data based off spotify
- Add way to find lyrics and use them in search
 