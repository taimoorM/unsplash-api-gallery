//API KEY = jEqSp5oLpN_zkdDWsAfws8ePcJw5BhPmCOrz5Qa6hx8

// namespace object
const galleryApp = {};

galleryApp.url = "https://api.unsplash.com/photos";
//api key
galleryApp.key = "jEqSp5oLpN_zkdDWsAfws8ePcJw5BhPmCOrz5Qa6hx8";

//method to call API

galleryApp.getPhotos = () => {
  //construct the URL
  const url = new URL(galleryApp.url);

  //parameter for our api key
  url.search = new URLSearchParams({
    //where we will pass our api key
    client_id: galleryApp.key,
  });
  //use fetch method
  fetch(url).then((res) => {
    console.log(res);
    return res.json();
  });
};

//init method

galleryApp.init = () => {
  console.log("ready to go!");

  galleryApp.getPhotos();
};

galleryApp.init();
