//****ABDUL WAHEED****//            //****04/10/2022****//

// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

//40
console.log("***Q40***");
let music_album = {};
let dict = {};
function Dictionary(val) {
  dict = { ...dict, ...val };
}
function create_album(artist, title, No_of_tracks) {
  music_album["ArtistName"] = artist;
  music_album["Album_title"] = title;

  if (No_of_tracks) {
    music_album = { ...music_album, No_of_tracks };
  } else if (!No_of_tracks) {
    music_album = { ...music_album };
  }

  return music_album;
}
// const d = new Dictionary();
Dictionary({ first_album: create_album("abc", "alb1") });
// console.log(create_album("abc", "alb1"));
Dictionary({ second_album: create_album("lmno", "alb2") });
Dictionary({ thired_album: create_album("xyz", "alb3", 432) });
// console.log(d.create_album("Atif", "abc"));
// console.log(d.create_album("Anne-Marie", "efg"));
// console.log( d.create_album("Ariana Grande", "ghi", 432));
// console.log(Object.entries(music_album));
//Wrong >>No dictioary is added
console.log("Here is dictionary: ", dict);
