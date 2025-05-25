// Lista de músicas
const songs = [
  { name: "Ferrugem - Pirata e Tesouro", file: "../audios/pirataTesouro.mp3" },
  { name: "Ferrugem - Minha namorada", file: "../audios/minhaNamorada.mp3" },
  { name: "Ferrugem - Sinto sua falta", file: "../audios/sintoSuaFalta.mp3" }
];

// Elementos
const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');
const searchInput = document.getElementById('search-input');
const musicList = document.getElementById('music-list');
const currentSong = document.getElementById('current-song');

// Renderizar lista de músicas
// function renderList(filter = "") {
//   musicList.innerHTML = "";
//   const filteredSongs = songs.filter(song => song.name.toLowerCase().includes(filter.toLowerCase()));

//   filteredSongs.forEach(song => {
//       const li = document.createElement('li');
//       li.textContent = song.name;
//       li.classList.add('music-item');

//       li.addEventListener('click', () => {
//           audio.src = song.file;
//           audio.play();
//           playPauseBtn.textContent = "Pause";
//           currentSong.textContent = song.name;
//       });

//       musicList.appendChild(li);
//   });

//   // Mensagem se não encontrar músicas
//   if (filteredSongs.length === 0) {
//       const li = document.createElement('li');
//       li.textContent = "Nenhuma música encontrada.";
//       musicList.appendChild(li);
//   }
// }

// Inicializar lista
renderList();

// Play/Pause
playPauseBtn.addEventListener('click', () => {
  if (audio.src === "") return; // Nenhuma música selecionada

  if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "Pause";
  } else {
      audio.pause();
      playPauseBtn.textContent = "Play";
  }
});

// Controle de volume
volumeControl.addEventListener('input', () => {
  audio.volume = volumeControl.value;
});

// Busca
searchInput.addEventListener('input', () => {
  renderList(searchInput.value);
});

// Reset botão Play/Pause quando a música terminar
audio.addEventListener('ended', () => {
  playPauseBtn.textContent = "Play";
});