# Description

This is a movie database web application that allows users to view information about movies. Users can also track their favourites, and keep a list of their own personal Films Trip (watched movies).

Designed and developed by Adam H.

This project uses the [TMDb API](https://themoviedb.org) but is not endorsed or certified by TMDb.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Pages

In the project directory, you can run:

### `Home Page`

Displays 12 movies by default. The page allows users to "show more" by displaying an additional 12 movies each time. The default filter is "most popular." Users can change the filter to now playing, top rated, or upcoming.

Each movie is displayed as a movie poster, framed by a border. Hover or click (mobile) opens the movie details, which displays the title, rating, and synopsis. There is a star icon to add the movie to userfavourites list, and a more info link to take the user to the individual movie details page.

The search bar is present at the top of the page, under the navigation. On mobile, the search is in the mobile navigation drawer.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `About`

Description of the application and attribution. Links to social media channels. Random background image from movie backdrop.

### `Favourites`

Favourites page displays similarly to the home page. Grid of movie posters with click/hover function to reveal more info, and a link to individual movie page. Displays movies stored as "favourites" by user in local storage. If user has no favourites stored, a message with a random background image is displayed. Users may remove favourites on the page directly.

### `My Trip`

Similar to the Favourites page, it displays movies stored by the user. This list is meant as a historical record of all films the user has viewed. Displayed as a bulleted (unbulleted on mobile) list in a wrapped flex arrangement. Each title links to the individual movie page. Users are not able to remove from trip list via this page (must go directly to single movie page)

### `Search Page`

Displays the results of the search query, in the same layout as the home page. Grid of movie posters with hover/click functionality.

### `Individual Movie Page`

Shows a large poster, and more details about the movie (tagline, run time, release date, genres, rating, and synopsis).
Under the details section are 6 cast photos of the most prominent cast members. Each photo has hover/click functionality with a link to the cast members' TMDb biography page.
