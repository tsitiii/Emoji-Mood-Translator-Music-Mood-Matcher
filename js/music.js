// Mood to songs mapping
const musicData = {
  happy: [
    { title: "What Makes You Beautiful", artist: "One Direction", file: "musics/One_Direction_What_Makes_You_Beautiful_Official_Video_QJO3ROT_A4E.mp3", cover: "images/music2.jpg" },
    { title: "Tennis Court", artist: "Lorde", file: "musics/01 Tennis Court.mp3", cover: "images/music3.jpg" },
    { title: "Unchain My Heart", artist: "Ray Charles", file: "musics/Unchain My Heart   Rey Charles.mp3", cover: "images/music.jpg" }
  ],
  sad: [
    { title: "Your Power", artist: "Billie Eilish", file: "musics/12. Billie Eilish - Your Power.mp3", cover: "images/sad.jpeg" },
    { title: "Male Fantasy", artist: "Billie Eilish", file: "musics/16. Billie Eilish - Male Fantasy.mp3", cover: "images/sad.jpeg" },
    { title: "Let You Down (Remix)", artist: "NF", file: "musics/NF-Let_you_dawn_(remix).mp3", cover: "images/sad.jpeg" }
  ],
  energetic: [
    { title: "Back To Strangers", artist: "Rehash", file: "musics/Back To Strangers - Rehash (320).mp3", cover: "images/music2.jpg" },
    { title: "Gave It All I Got", artist: "Kodak Black", file: "musics/Gave It All I Got   Kodak Black.mp3", cover: "images/music3.jpg" },
    { title: "Mary On A Cross", artist: "Ghost", file: "musics/Ghost - Mary On A Cross.mp3", cover: "images/music.jpg" }
  ],
  chill: [
    { title: "Music To Watch Boys To", artist: "Lana Del Rey", file: "musics/Lana Del Rey - Music To Watch Boys To (Official Au.mp3", cover: "images/relaxed.jpeg" },
    { title: "Relieved", artist: "Unknown", file: "musics/19_Nick_Cave_&_The_Bad_Seeds_Red.mp3", cover: "images/relaxed.jpeg" }
  ],
  romantic: [
    { title: "Love The Way You Lie", artist: "Eminem ft. Rihanna", file: "musics/eminem_-_love_the_way_you_lie_feat_rihanna.mp3", cover: "images/lov.jpeg" },
    { title: "Not You Too", artist: "Drake ft. Chris Brown", file: "musics/Drake-Not-You-Too-(Ft-Chris-Brown)-320.mp3", cover: "images/lov.jpeg" }
  ]
};


function renderSongs(songs) {
  const list = document.getElementById('song-list');
  list.innerHTML = '';
  songs.forEach(song => {
    const card = document.createElement('div');
    card.className = 'song-card';
    card.innerHTML = `
      <img src="${song.cover}" alt="Album cover" />
      <h3>${song.title}</h3>
      <p>${song.artist}</p>
      <audio controls src="${song.file}"></audio>
    `;
    list.appendChild(card);
  });
}


document.querySelectorAll('.mood-buttons button').forEach(btn => {
  btn.addEventListener('click', function() {
    const mood = btn.getAttribute('data-mood');
    renderSongs(musicData[mood] || []);
  });
});

document.getElementById('shuffle-btn').addEventListener('click', function() {
  const moodBtns = document.querySelectorAll('.mood-buttons button');
  let activeMood = null;
  moodBtns.forEach(btn => {
    if (btn.classList.contains('active')) activeMood = btn.getAttribute('data-mood');
  });

  if (!activeMood) {
    const moods = Object.keys(musicData);
    activeMood = moods[Math.floor(Math.random() * moods.length)];
  }

  const songs = [...(musicData[activeMood] || [])];
  for (let i = songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }
  renderSongs(songs);
});
