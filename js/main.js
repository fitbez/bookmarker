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

  // local Storage Test
  //   localStorage.setItem("test", "hello world");

  // to get an Item from the local storage
  //   console.log(localStorage.getItem("test"));

  // to delete from the local storage
  //   localStorage.removeItem("test");
  //   console.log(localStorage.getItem("test"));
  // Prevent form from submiting
  e.preventDefault();
}
