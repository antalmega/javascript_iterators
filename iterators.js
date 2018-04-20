// Write a function called listNames which takes in an array of songs and console.logs the name of each one.

function listNames(songs) {
    songs.forEach(song => console.log(song.name));
}

// Write a function called listSongDetails which takes in an array of songs and console.logs details about each one. The details should be in the following example format: "Smooth, by Santana featuring Rob Thomas (4:00)".

function listSongDetails(songs) {
    songs.forEach(song => console.log(`${song.name}, by ${song.artist} (${song.duration})`));
}

// Write a function called summerJamCount which takes in an array of songs and returns the number of songs which hit #1 on the charts in June, July, or August.

function summerJamCount(songs) {
    let months = [6,7,8];
    let counter = 0;
    songs.forEach(song =>{
        if (months.includes(song.month)) counter++
    })
    return counter;
}

// Write a function called getDurations which takes in an array of songs and returns an array of each song's duration.

function getDurations(songs) {
    return songs.map(song => song.duration);
}

// Write a function called getDurationInSeconds which takes in an array of songs and returns an array of each song's duration in seconds.

function getDurationsInSeconds(songs) {
    return songs.map(song => {
        return song.duration.split(":")
        .map((num, index) => index < 1 ? +num * 60 : +num)
        .reduce((acc, next) => acc + next);
    })
}

// Write a function called getMainArtists which takes in an array of songs and returns an array of the primary artists on the recordings. If there's only one artist, that artist should be returned; if there are featured artists, they should be ignored (so only the artist to the left of "featuring" is kept.)

// Write a function called getBigHits which takes an array of songs and returns an array of songs which were number one for 10 or more weeks.

// Write a function called getShortSongs which takes an array of songs and returns an array of songs which shorter than 3 minutes.

// Write a function called getSongsByArtist which takes in an array of artists and the name of an artist and returns an array of songs by that artist.

// Refactor summerJamCount to use reduce!

// Write a function called getTotalDurationInSeconds which takes in an array of songs and returns the total amount of time (in seconds) it would take to listen to all of the songs. (Hint: can you use anything you've written already to help solve this problem?)

// Write a function called getSongCountByArtist which takes in an array of songs and returns an object. The keys in the object should be artist names, and the values should be the number of songs by that artist in the orignal array.

// Write a function called averageWeeksAtNumberOne which takes in an array of songs and returns the average number of weeks that songs on the list were #1.
































