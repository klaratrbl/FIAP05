document.addEventListener("DOMContentLoaded", function() {
    var alternancia = document.getElementById("alternancia");
    alternancia.addEventListener("change", function() {
        if (this.checked) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    });


    // Função para carregar o vídeo do YouTube
    function loadYouTubeVideo(videoId, containerId) {
        const container = document.getElementById(containerId); // Seleciona o contêiner do vídeo pelo ID
        // Insere o iframe do vídeo do YouTube no contêiner
        container.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <button class="close-button" onclick="closeMiniPlayer('${containerId}')">&times;</button>
        `;
    }

    // Função para fechar o miniplayer do YouTube
    window.closeMiniPlayer = function(containerId) {
        const container = document.getElementById(containerId); // Seleciona o contêiner do vídeo pelo ID
        container.innerHTML = ''; // Remove o conteúdo do contêiner
    }

    // Adiciona eventos de clique aos títulos dos jogos para abrir o miniplayer do YouTube
    document.getElementById('no-place-for-bravery').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('ju3H1cQuOx4', 'video-no-place-for-bravery'); // Carrega o vídeo do YouTube para o jogo 'No Place for Bravery'
    });

    document.getElementById('horizon-chase-2').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('Fnklq_CCDfQ', 'video-horizon-chase-2'); // Carrega o vídeo do YouTube para o jogo 'Horizon Chase 2'
    });

    document.getElementById('hazel-sky').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('fwHocVxDKv0', 'video-hazel-sky'); // Carrega o vídeo do YouTube para o jogo 'Hazel Sky'
    });

    document.getElementById('fobia-st-dinfna-hotel').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('AAP16NU871E', 'video-fobia-st-dinfna-hotel'); // Carrega o vídeo do YouTube para o jogo 'Fobia – St. Dinfna Hotel'
    });

    document.getElementById('paozito').addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        loadYouTubeVideo('fS_wVuvNHo4', 'video-paozito'); // Carrega o vídeo do YouTube para o jogo 'Pãozito'
    });
});
