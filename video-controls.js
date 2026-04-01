let heroPlayer;

// This function is automatically called by the YouTube IFrame API once it's loaded
function onYouTubeIframeAPIReady() {
    heroPlayer = new YT.Player('hero-video-player', {
        events: {
            'onReady': onHeroPlayerReady
        }
    });
}

function onHeroPlayerReady(event) {
    const muteBtn = document.getElementById('mute-toggle');
    const playPauseBtn = document.getElementById('play-pause-toggle');

    // Mute/Unmute Logic
    muteBtn.addEventListener('click', () => {
        if (heroPlayer.isMuted()) {
            heroPlayer.unMute();
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            muteBtn.style.background = 'var(--accent-color)';
            muteBtn.style.color = 'black';
            setTimeout(() => {
                muteBtn.style.background = '';
                muteBtn.style.color = '';
            }, 500);
        } else {
            heroPlayer.mute();
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
    });

    // Play/Pause Logic
    playPauseBtn.addEventListener('click', () => {
        const state = heroPlayer.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            heroPlayer.pauseVideo();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        } else {
            heroPlayer.playVideo();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });
    
    // Sync button state with initial player state
    if (heroPlayer.isMuted()) {
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
}
