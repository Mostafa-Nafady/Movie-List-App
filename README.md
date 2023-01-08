# Movie-List-App
# Movie Data Management
This code provides functionality for managing movie data, including adding new movies, displaying movie entries in an HTML list, and deleting movies from the list.
### Functions
movieElementAddHandler(title, imageUrl, rating, movieData)
Creates a new movie entry in an HTML list.
Parameters
 title (string): The title of the movie.
imageUrl (string): The URL of an image for the movie.
rating (string): The rating of the movie (a value between 1 and 5).
movieData (object): An object containing the movie data.
addMovieDataHandeler()
Handles the addition of new movie data. Validates the user input values and, if they are valid, adds the movie data to an array and updates the UI.
### Event Listeners
addMovieBtn.addEventListener('click', showAddModel)
Adds a click event listener to the element with the variable addMovieBtn. When the element is clicked, the function showAddModel is called.
backDrob.addEventListener('click', () => { closeAddModel(); closeDeleteModal() })
Adds a click event listener to the element with the variable backDrob. When the element is clicked, the functions closeAddModel and closeDeleteModal are called.
cancelAddMovieBtn.addEventListener('click', () => { closeAddModel(); inputsFieldUpdate() })
Adds a click event listener to the element with the variable cancelAddMovieBtn. When the element is clicked, the functions closeAddModel and inputsFieldUpdate are called.
confirmAddMovieBtn.addEventListener('click', addMovieDataHandeler)
Adds a click event listener to the element with the variable confirmAddMovieBtn. When the element is clicked, the function addMovieDataHandeler is called.
# Note:
The id property of the movieData object is assigned a value using Math.random(), which generates a random floating point number between 0 and 1. While this may produce a unique value, it is not guaranteed to be unique and may not be suitable as a unique identifier for the movie data object.
