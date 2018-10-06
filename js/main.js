// Listen form submint

document.getElementById("myForm").addEventListener("submit", saveBookmarks);

// Save Bookmark
function saveBookmarks(e) {
  // Get form values

  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  var bookmark = {
    name: siteName,
    url: siteUrl
  };

  // Test if a lacal store is null
  if (localStorage.getItem("bookmarks") === null) {
    //Init array
    var bookmarks = [];

    // Add to array
    bookmarks.push(bookmark);

    // Set to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  } else {
    //Get to localStorage
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    // Add to array
    bookmarks.push(bookmark);

    // Set to localStorage
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }

  // Prevent form from submiting
  e.preventDefault();
}

// fetch Bookmarks
function fetchBookmarks() {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  console.log(bookmarks);

  // Get output id
  var bookmarksResults = document.getElementById("bookmarksResults");

  // Build output
  bookmarksResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      "<div class='well'>" + "<h3>" + name + "</h3>" + "</div>";
  }
}
