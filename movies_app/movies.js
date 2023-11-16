// movies.js

$(document).ready(function() {
    // Array to store movie data
    var movies = [];
  
    // Function to add a new movie
    function addMovie(title, rating) {
      var movie = { title: title, rating: rating };
      movies.push(movie);
      updateTable();
    }
  
    // Function to update the table with movie data
    function updateTable() {
      var tableBody = $('#movie-table-body');
      tableBody.empty();
  
      for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        var row = '<tr><td>' + movie.title + '</td><td>' + movie.rating + '</td><td><button class="btn btn-danger btn-sm" onclick="deleteMovie(' + i + ')">Delete</button></td></tr>';
        tableBody.append(row);
      }
    }
  
    // Function to handle form submission
    $('#new-movie-form').submit(function(event) {
      event.preventDefault();
  
      var title = $('#title').val();
      var rating = $('#rating').val();
  
      // Validate input
      if (title && rating && !isNaN(rating)) {
        addMovie(title, rating);
        // Clear the form fields after adding a movie
        $('#title').val('');
        $('#rating').val('');
      } else {
        alert('Please enter a valid title and rating.');
      }
    });
  
    // Function to delete a movie
    window.deleteMovie = function(index) {
      movies.splice(index, 1);
      updateTable();
    };
  });
  