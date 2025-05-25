        // Lista de músicas
        const songs = [
            { name: "Pirata e Tesouro (Ao vivo)", file: "../audios/pirataTesouro.mp3", id: "pirataTesouro" },
            { name: "Minha Namorada (Ao vivo)", file: "../audios/minhaNamorada.mp3", id: "minhaNamorada" },
            { name: "Sinto Sua Falta (Ao vivo)", file: "../audios/sintoSuaFalta.mp3", id: "sintoFalta" }
        ];

        // Elementos
        const audioPlayer = document.getElementById('audio-player');
        const currentSong = document.getElementById('current-song');

        // Função para tocar música
        function pauseAndPlay(song) {
            audioPlayer.pause();
            audioPlayer.src = song.file;
            audioPlayer.load();
            audioPlayer.play();
            currentSong.textContent = song.name;
        }

        // Adiciona eventos nos links dos cards
        songs.forEach(song => {
            const link = document.getElementById(song.id);
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    pauseAndPlay(song);
                });
            }
        });

        // Quando a música terminar, volta para texto padrão
        audioPlayer.addEventListener('ended', () => {
            currentSong.textContent = "Ferrugem";
        });

        const searchInput = document.getElementById('search-input');
const allCards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    allCards.forEach(card => {
        const songName = card.querySelector('.nameArtista').textContent.toLowerCase();
        if (songName.includes(searchTerm)) {
            card.style.display = 'flex'; // ou 'block', dependendo do seu CSS
        } else {
            card.style.display = 'none';
        }
    });
});