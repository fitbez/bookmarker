// Listen form submint

document.getElementById("myForm").addEventListener("submit", saveBookmarks);

// Save Bookmark
function saveBookmarks(e) {
  // Get form values

  var siteName = document.getElementById("siteName").value;
  var siteUrl = document.getElementById("siteUrl").value;

  if (!validateForm(siteName, siteUrl)) {
    return false;
  }

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

  // clear form after submiting the form
  document.getElementById("myForm").reset();

  // Refetch the bookmarks
  fetchBookmarks();

  // Prevent form from submiting
  e.preventDefault();
}

// Delete bookmark

function deleteBookmark(url) {
  // Get bookmark from local storage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  // loop through bookmarks
  for (var i = 0; i < bookmarks.length; i++) {
    if (bookmarks[i].url == url) {
      // Remove from array
      bookmarks.splice(i, 1);
    }
  }
  // Re set the localStorage
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  // Refetch the bookmarks
  fetchBookmarks();
}

// fetch Bookmarks
function fetchBookmarks() {
  // Get bookmarks from localStorage
  var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));

  // console.log(bookmarks);

  // Get output id
  var bookmarksResults = document.getElementById("bookmarksResults");

  // Build output
  bookmarksResults.innerHTML = "";
  for (var i = 0; i < bookmarks.length; i++) {
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML +=
      "<div class='well'>" +
      "<h3>" +
      name +
      '<a class="btn btn-default" target="_blank" href="' +
      url +
      '"> Visit </a>' +
      "<a onclick=\"deleteBookmark('" +
      url +
      '\')"class="btn btn-danger" href="#"> Delete </a>' +
      "</h3>" +
      "</div>";
  }
}

function validateForm(siteName, siteUrl) {
  if (!siteName || !siteUrl) {
    alert("please fill the form");
    return false;
  }

  var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  var regex = new RegExp(expression);

  if (!siteUrl.match(regex)) {
    alert("Please use a valid url");
    return false;
  }

  return true;
}
