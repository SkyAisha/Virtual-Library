// import the Media class:
const Media = require(".//Media");
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }
  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
  }

  static shortestAlbum(songs) {
    let shortestsong = [];
    let shortestLength = 10000;

    for (const song of songs) {
      if (song.length < shortestLength) {
        shortestLength = song.length;
        shortestsong = song;
      }
    }
    return shortestsong;
  }
}
// don't change below
module.exports = Music;
