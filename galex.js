const account = document.getElementById('account');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginDiv = document.getElementById('login');
const signupDiv = document.getElementById('signup');
const galexText = document.getElementById('galexText');
const verifyIcon = document.getElementById('verifyIcon');
const mainplayer = document.getElementById('mainplayer');
const backBtn = document.getElementById('back');
const artistContainer = document.getElementById('artistcontainer');
const playerContainer = document.getElementById('playerContainer');
const audioPlayer = document.getElementById('audioPlayer');
const likedSongsContainer = document.getElementById('likedSongsContainer');
const likedSongsList = document.getElementById('likedSongsList');
const emptyLiked = document.getElementById('emptyLiked');
const likedPlaylistBtn = document.getElementById('likedplaylistbtn');
const homeBtn = document.getElementById('homebtn');
const playlistBtn = document.getElementById('playlistbtn');
const settingsBtn = document.getElementById('settingsbtn');
const aboutBtn = document.getElementById('aboutbtn');
const playlistsContainer = document.getElementById('playlistsContainer');
const playlistsGrid = document.getElementById('playlistsGrid');
const settingsContainer = document.getElementById('settingsContainer');
const aboutContainer = document.getElementById('aboutContainer');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const notification = document.getElementById('notification');
const notificationText = document.getElementById('notificationText');
const repeatBtn = document.getElementById('repeatBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const volumeIcon = document.getElementById('volumeIcon');
const queueList = document.getElementById('queueList');
const maximizeBtn = document.getElementById('maximizeBtn');
const exitFsBtn = document.getElementById('exitFsBtn');

const samplePlaylists = [
    {
        id: 'vijay',
        name: 'Thalapathy Vijay',
        image: 'https://i.pinimg.com/736x/35/f2/45/35f245a8d68c4f110dd405cecb90d798.jpg'
    },
    {
        id: 'ajith',
        name: 'Ajith Kumar',
        image: 'https://i.pinimg.com/736x/85/ea/82/85ea8230a1d48f67399856d1e790ce3c.jpg'
    },
    {
        id: 'rajini',
        name: 'Superstar Rajini',
        image: 'https://i.pinimg.com/1200x/8d/2f/42/8d2f424e4641f44b4b82e8da8e74de89.jpg'
    },
    {
        id: 'kamal',
        name: 'Kamal Haasan',
        image: 'https://i.pinimg.com/736x/f5/ae/6f/f5ae6f4f6d5ad0ba6f948c33b126c262.jpg'
    },
    {
        id: 'surya',
        name: 'Suriya',
        image: 'https://i.pinimg.com/1200x/9e/40/72/9e407264d0266a737b88f34d718cf443.jpg'
    },
    {
        id: 'dhanush',
        name: 'Dhanush',
        image: 'https://i.pinimg.com/736x/fb/25/e1/fb25e18fe8dc9ce14f0ea7ccdacf96a0.jpg'
    },
    {
        id: 'vikram',
        name: 'Chiyaan Vikram',
        image: 'https://i.pinimg.com/1200x/67/f1/13/67f113bcbf1e1154debcbe9687ac7a31.jpg'
    },
    {
        id: 'sk',
        name: 'Sivakarthikeyan',
        image: 'https://i.pinimg.com/1200x/b3/62/63/b36263bc52ce50fc4692ca2002ada449.jpg'
    },
    {
        id: 'simbu',
        name: 'Simbu',
        image: 'https://i.pinimg.com/736x/e8/ef/f3/e8eff3989fe6209b117e087e534ab6de.jpg'
    },
    {
        id: 'vishal',
        name: 'Vishal',
        image: 'https://i.pinimg.com/736x/7a/ca/95/7aca95cc48b21f6c3821156a224d92f0.jpg'
    },
    {
        id: '00shits',
        name: '00\'s Hits',
        image: 'https://i.pinimg.com/1200x/d4/03/5d/d4035d986c180d4f3a1759e115b5f511.jpg'
    },
    {
        id: '00sromance',
        name: '00\'s Romance',
        image: 'https://i.pinimg.com/1200x/d4/03/5d/d4035d986c180d4f3a1759e115b5f511.jpg'
    }
];

let currentSong = null;
let currentSongIndex = 0;
let currentArtist = '';
let isPlaying = false;
let currentUser = null;
let repeatMode = 'off';
let shuffleMode = false;
let originalPlaylist = [];
let shuffledPlaylist = [];
let searchTimeout = null;


document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    setupEventListeners();
    populateSongLists();
    populatePlaylists();
    loadLikedSongs();
    setupKeyboardShortcuts();
    setupAudioPlayer();
    loadSettings();
    updateQueueDisplay();
});

function checkLoginStatus() {
    const savedUser = localStorage.getItem('galexUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        if (!currentUser.likedSongs) {
            currentUser.likedSongs = [];
        }
        updateUIForLoggedInUser();
    }
}
function updateUIForLoggedInUser() {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    verifyIcon.style.display = 'block';
    galexText.textContent = currentUser.username.charAt(0).toUpperCase();
    galexText.style.color = '#6495ed';
}

function setupAudioPlayer() {
    const savedVolume = localStorage.getItem('galexVolume');
    audioPlayer.volume = savedVolume ? parseFloat(savedVolume) : 0.7;
    updateVolumeProgress(audioPlayer.volume);
    updateVolumeIcon(audioPlayer.volume);
    audioPlayer.addEventListener('error', (e) => {
        console.error('Audio error:', e);
        showNotification('Error loading audio. Please try another song.');
        document.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        document.getElementById('playerCover').classList.remove('playing');
        isPlaying = false;
    });
}

function setupEventListeners() {
    if (loginBtn) {
        loginBtn.onclick = () => {
            account.classList.add('show');
        };
    }

    if (document.getElementById('showSignup')) {
        document.getElementById('showSignup').onclick = (e) => { /* ... */ };
    }
    loginBtn.onclick = () => {
        account.classList.add('show');
        loginDiv.classList.add('show');
        signupDiv.classList.remove('show');
        mainplayer.style.opacity = '0.3';
        mainplayer.style.pointerEvents = 'none';
    };

    document.getElementById('showSignup').onclick = (e) => {
        e.preventDefault();
        loginDiv.classList.remove('show');
        signupDiv.classList.add('show');
    };

    document.getElementById('showLogin').onclick = (e) => {
        e.preventDefault();
        signupDiv.classList.remove('show');
        loginDiv.classList.add('show');
    };

    logoutBtn.onclick = () => {
        localStorage.removeItem('galexUser');
        currentUser = null;
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        verifyIcon.style.display = 'none';

        galexText.textContent = 'Galex';

        galexText.style.color = '#fff';
        showHomePage();
        showNotification('Logged out successfully');
    };

    account.onclick = (e) => {
        if (e.target === account) {
            closeAccountModal();
        }
    };

    document.getElementById('signupSubmit').onclick = () => {
        const user = {
            username: document.getElementById('signupUsername').value.trim(),
            email: document.getElementById('signupEmail').value.trim().toLowerCase(),
            password: document.getElementById('signupPassword').value
        };

        if (!user.username || !user.email || !user.password) {
            showNotification('Please fill all fields');
            return;
        }

        if (user.password.length < 6) {
            showNotification('Password must be at least 6 characters');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user.email)) {
            showNotification('Please enter a valid email address');
            return;
        }

        const existingUser = localStorage.getItem('galexUser');
        if (existingUser) {
            const parsedUser = JSON.parse(existingUser);
            if (parsedUser.email === user.email) {
                showNotification('Email already registered. Please login.');
                return;
            }
        }

        user.likedSongs = [];
        localStorage.setItem('galexUser', JSON.stringify(user));
        showNotification('Account created successfully! Please login.');
        signupDiv.classList.remove('show');
        loginDiv.classList.add('show');
    };

    document.getElementById('loginSubmit').onclick = () => {
        const savedUser = JSON.parse(localStorage.getItem('galexUser'));
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value;

        if (!email || !password) {
            showNotification('Please fill all fields');
            return;
        }

        if (!savedUser) {
            showNotification('No account found. Please sign up first.');
            return;
        }

        if (email === savedUser.email && password === savedUser.password) {
            currentUser = savedUser;
            closeAccountModal();
            updateUIForLoggedInUser();
            loadLikedSongs();
            showNotification(`Welcome back, ${currentUser.username}!`);
        } else {
            showNotification('Invalid email or password');
        }
    };

    if (document.getElementById('hiphopadhi')) document.getElementById('hiphopadhi').onclick = () => showArtistSongs('hiphopadhi');
    if (document.getElementById('GVPrakash')) document.getElementById('GVPrakash').onclick = () => showArtistSongs('GVPrakash');
    if (document.getElementById('vijayantony')) document.getElementById('vijayantony').onclick = () => showArtistSongs('vijayantony');
    if (document.getElementById('Deva')) document.getElementById('Deva').onclick = () => showArtistSongs('Deva');
    if (document.getElementById('ilaiyaraja')) document.getElementById('ilaiyaraja').onclick = () => showArtistSongs('ilaiyaraja');
    if (document.getElementById('yuvan')) document.getElementById('yuvan').onclick = () => showArtistSongs('yuvan');
    if (document.getElementById('ARR')) document.getElementById('ARR').onclick = () => showArtistSongs('ARR');
    if (document.getElementById('unnikrishnan')) document.getElementById('unnikrishnan').onclick = () => showArtistSongs('unnikrishnan');
    if (document.getElementById('unnimenan')) document.getElementById('unnimenan').onclick = () => showArtistSongs('unnimenan');
    if (document.getElementById('SPB')) document.getElementById('SPB').onclick = () => showArtistSongs('SPB');
    if (document.getElementById('aniruth')) document.getElementById('aniruth').onclick = () => showArtistSongs('aniruth');
    if (document.getElementById('harrisjayaraj')) document.getElementById('harrisjayaraj').onclick = () => showArtistSongs('harrisjayaraj');
    if (document.getElementById('dImman')) document.getElementById('dImman').onclick = () => showArtistSongs('dImman');
    if (document.getElementById('chithra')) document.getElementById('chithra').onclick = () => showArtistSongs('chithra');
    if (document.getElementById('mano')) document.getElementById('mano').onclick = () => showArtistSongs('mano');
    if (document.getElementById('anuradha')) document.getElementById('anuradha').onclick = () => showArtistSongs('anuradha');
    if (document.getElementById('srikanthdeva')) document.getElementById('srikanthdeva').onclick = () => showArtistSongs('srikanthdeva');

    if (document.getElementById('likedplaylistbtn')) document.getElementById('likedplaylistbtn').onclick = () => showLikedSongs();

    likedPlaylistBtn.onclick = () => {
        if (!currentUser) {
            showNotification('Please login to view liked songs');
            return;
        }
        showLikedSongs();
    };

    playlistBtn.onclick = () => showPlaylists();
    settingsBtn.onclick = () => showSettings();
    aboutBtn.onclick = () => showAbout();
    homeBtn.onclick = showHomePage;

    backBtn.onclick = showHomePage;

    document.querySelector('.play-btn').onclick = togglePlay;
    document.querySelector('.prev-btn').onclick = playPrev;
    document.querySelector('.next-btn').onclick = playNext;

    repeatBtn.onclick = toggleRepeat;
    shuffleBtn.onclick = toggleShuffle;

    document.getElementById('progressBar').onclick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audioPlayer.duration) {
            audioPlayer.currentTime = percent * audioPlayer.duration;
        }
    };

    document.getElementById('volumeSlider').onclick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const volume = Math.max(0, Math.min(1, percent));
        audioPlayer.volume = volume;
        localStorage.setItem('galexVolume', volume);
        updateVolumeProgress(volume);
        updateVolumeIcon(volume);
    };

    volumeIcon.onclick = () => {
        if (audioPlayer.volume > 0) {
            localStorage.setItem('lastVolume', audioPlayer.volume);
            audioPlayer.volume = 0;
            updateVolumeProgress(0);
            updateVolumeIcon(0);
        } else {
            const lastVolume = localStorage.getItem('lastVolume') || 0.7;
            audioPlayer.volume = parseFloat(lastVolume);
            localStorage.setItem('galexVolume', audioPlayer.volume);
            updateVolumeProgress(audioPlayer.volume);
            updateVolumeIcon(audioPlayer.volume);
        }
    };

    // Search functionality
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            handleSearch(e.target.value);
        }, 300);
    });

    searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) {
            handleSearch(searchInput.value);
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    document.getElementById('volumeLevel').addEventListener('change', (e) => {
        const volume = parseFloat(e.target.value);
        audioPlayer.volume = volume;
        localStorage.setItem('galexVolume', volume);
        updateVolumeProgress(volume);
        updateVolumeIcon(volume);
        showNotification(`Volume set to ${e.target.options[e.target.selectedIndex].text}`);
    });

    document.getElementById('clearCache').onclick = () => {
        localStorage.removeItem('galexVolume');
        localStorage.removeItem('lastVolume');
        showNotification('Cache cleared successfully');
    };

    document.getElementById('exportData').onclick = () => {
        const data = {
            user: currentUser,
            volume: audioPlayer.volume,
            settings: {
                autoPlay: document.getElementById('autoPlay').checked,
                showQueue: document.getElementById('showQueue').checked,
                darkMode: document.getElementById('darkMode').checked,
                animations: document.getElementById('animations').checked
            }
        };
        const dataStr = JSON.stringify(data, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'galex-data.json';
        a.click();
        showNotification('Data exported successfully');
    };

    audioPlayer.addEventListener('timeupdate', updateProgress);
    audioPlayer.addEventListener('loadedmetadata', updateDuration);
    audioPlayer.addEventListener('ended', handleSongEnd);
    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        document.querySelector('.play-btn').innerHTML = '<i class="fas fa-pause"></i>';
        document.getElementById('playerCover').classList.add('playing');
    });
    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        document.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        document.getElementById('playerCover').classList.remove('playing');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && account.classList.contains('show')) {
            closeAccountModal();
        }
    });
    // Maximize Player Logic
    maximizeBtn.onclick = () => {
        playerContainer.classList.toggle('fullscreen');
        const icon = maximizeBtn.querySelector('i');

        if (playerContainer.classList.contains('fullscreen')) {
            icon.className = 'fas fa-compress';
            maximizeBtn.title = 'Minimize';
            document.body.style.overflow = 'hidden';
        } else {
            icon.className = 'fas fa-expand';
            maximizeBtn.title = 'Maximize';
            document.body.style.overflow = '';
        }
    };
    exitFsBtn.onclick = () => {
        playerContainer.classList.remove('fullscreen');

        document.body.style.overflow = '';

        if (maximizeBtn) {
            const icon = maximizeBtn.querySelector('i');
            if (icon) icon.className = 'fas fa-expand';
            maximizeBtn.title = 'Maximize';
        }
    };
}

function handleSongEnd() {
    const isAutoPlayOn = document.getElementById('autoPlay').checked;

    if (repeatMode === 'one') {
        audioPlayer.currentTime = 0;
        audioPlayer.play().catch(e => console.error('Play error:', e));
    }
    else if (repeatMode === 'all' || isAutoPlayOn) {
        playNext();
    }
    else {
        isPlaying = false;
        document.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        document.getElementById('playerCover').classList.remove('playing');
    }
}

function toggleRepeat() {
    const modes = ['off', 'one', 'all'];
    const currentIndex = modes.indexOf(repeatMode);
    repeatMode = modes[(currentIndex + 1) % modes.length];

    repeatBtn.classList.toggle('active', repeatMode !== 'off');

    const icon = repeatBtn.querySelector('i');
    if (repeatMode === 'one') {
        icon.className = 'fas fa-redo-alt';
        repeatBtn.title = 'Repeat One';
    } else if (repeatMode === 'all') {
        icon.className = 'fas fa-redo';
        repeatBtn.title = 'Repeat All';
    } else {
        icon.className = 'fas fa-redo';
        repeatBtn.title = 'Repeat Off';
    }

    showNotification(`Repeat: ${repeatMode}`);
}

function toggleShuffle() {
    shuffleMode = !shuffleMode;
    shuffleBtn.classList.toggle('active', shuffleMode);
    shuffleBtn.title = shuffleMode ? 'Shuffle: On' : 'Shuffle: Off';
    showNotification(shuffleMode ? 'Shuffle: On' : 'Shuffle: Off');

    if (shuffleMode && currentArtist) {
        createShuffledPlaylist();
        updateQueueDisplay();
    } else if (!shuffleMode) {
        updateQueueDisplay();
    }
}

function getContextSongs(contextId) {
    if (contextId === 'liked_songs') {
        return currentUser ? currentUser.likedSongs : [];
    }
    return songsData[contextId] || [];
}

function createShuffledPlaylist() {
    if (!currentArtist) return;

    originalPlaylist = [...getContextSongs(currentArtist)];
    shuffledPlaylist = [...originalPlaylist];

    // Fisher-Yates shuffle
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
    }

    if (currentSong) {
        const currentIndex = shuffledPlaylist.findIndex(
            song => song.title === currentSong.title && song.artist === currentSong.artist
        );
        if (currentIndex > -1) {
            const [current] = shuffledPlaylist.splice(currentIndex, 1);
            shuffledPlaylist.unshift(current);
            currentSongIndex = 0;
        }
    }
}

function updateVolumeIcon(volume) {
    const icon = volumeIcon.querySelector('i');
    if (volume === 0) {
        icon.className = 'fas fa-volume-mute';
    } else if (volume < 0.3) {
        icon.className = 'fas fa-volume-off';
    } else if (volume < 0.7) {
        icon.className = 'fas fa-volume-down';
    } else {
        icon.className = 'fas fa-volume-up';
    }
}

function updateVolumeProgress(volume) {
    document.getElementById('volumeProgress').style.width = (volume * 100) + '%';
}

function updateQueueDisplay() {
    queueList.innerHTML = '';

    if (!currentArtist) {
        queueList.innerHTML = '<div style="padding: 10px; color: #b0b0d0; text-align: center;">No songs in queue</div>';
        return;
    }

    const baseSongs = getContextSongs(currentArtist);
    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : baseSongs;

    const startIndex = currentSongIndex + 1;
    const endIndex = Math.min(startIndex + 3, songs.length);

    if (startIndex >= songs.length) {
        queueList.innerHTML = '<div style="padding: 10px; color: #b0b0d0; text-align: center;">End of queue</div>';
        return;
    }

    for (let i = startIndex; i < endIndex; i++) {
        const song = songs[i];
        const queueItem = document.createElement('li');
        queueItem.className = 'queue-item';
        queueItem.onclick = () => playSong(currentArtist, i);

        queueItem.innerHTML = `
            <img src="${song.cover}" alt="${song.title}" class="queue-item-cover">
            <div class="queue-item-info">
                <div class="queue-item-title">${song.title}</div>
                <div class="queue-item-artist">${song.artist}</div>
            </div>
        `;

        queueList.appendChild(queueItem);
    }

    if (queueList.children.length === 0) {
        queueList.innerHTML = '<div style="padding: 10px; color: #b0b0d0; text-align: center;">End of queue</div>';
    }
}

function handleSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (!searchTerm) {
        searchResults.classList.remove('active');
        return;
    }

    searchResults.classList.add('active');
    let hasResults = false;

    Object.keys(songsData).forEach(artistId => {
        songsData[artistId].forEach((song, index) => {
            if (song.title.toLowerCase().includes(searchTerm) ||
                song.artist.toLowerCase().includes(searchTerm) ||
                song.album.toLowerCase().includes(searchTerm)) {

                hasResults = true;
                const resultItem = document.createElement('div');
                resultItem.className = 'search-result-item';
                resultItem.onclick = () => {
                    playSong(artistId, index);
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                };

                resultItem.innerHTML = `
                    <img src="${song.cover}" alt="${song.title}" style="width: 40px; height: 40px; border-radius: 5px;">
                    <div style="min-width: 0;">
                        <div style="font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${song.title}</div>
                        <div style="font-size: 12px; color: #b0b0d0;">${song.artist} • ${song.album}</div>
                    </div>
                `;

                searchResults.appendChild(resultItem);
            }
        });
    });

    if (!hasResults) {
        searchResults.innerHTML = '<div style="padding: 20px; text-align: center; color: #b0b0d0;">No results found</div>';
    }
}

function showNotification(message) {
    notificationText.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

function closeAccountModal() {
    account.classList.remove('show');
    mainplayer.style.opacity = '1';
    mainplayer.style.pointerEvents = 'auto';
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('signupUsername').value = '';
    document.getElementById('signupEmail').value = '';
    document.getElementById('signupPassword').value = '';
}

function showArtistSongs(artistId) {
    artistContainer.style.display = 'none';
    likedSongsContainer.classList.remove('active');
    playlistsContainer.classList.remove('active');
    settingsContainer.classList.remove('active');
    aboutContainer.classList.remove('active');
    backBtn.style.display = 'flex';
    document.getElementById('currentSection').textContent = getArtistName(artistId);

    document.querySelectorAll('.songs-container').forEach(container => {
        container.classList.remove('active');
        if (container.id === artistId + 'songs') {
            container.classList.add('active');
        }
    });
}

function showLikedSongs() {
    artistContainer.style.display = 'none';
    document.querySelectorAll('.songs-container').forEach(container => {
        container.classList.remove('active');
    });
    playlistsContainer.classList.remove('active');
    settingsContainer.classList.remove('active');
    aboutContainer.classList.remove('active');
    likedSongsContainer.classList.add('active');
    backBtn.style.display = 'flex';
    document.getElementById('currentSection').textContent = 'Liked Songs';
    displayLikedSongs();
}

function showPlaylists() {
    artistContainer.style.display = 'none';
    document.querySelectorAll('.songs-container').forEach(container => {
        container.classList.remove('active');
    });
    likedSongsContainer.classList.remove('active');
    settingsContainer.classList.remove('active');
    aboutContainer.classList.remove('active');
    playlistsContainer.classList.add('active');
    backBtn.style.display = 'flex';
    document.getElementById('currentSection').textContent = 'Playlists';
}

function showSettings() {
    artistContainer.style.display = 'none';
    document.querySelectorAll('.songs-container').forEach(container => {
        container.classList.remove('active');
    });
    likedSongsContainer.classList.remove('active');
    playlistsContainer.classList.remove('active');
    aboutContainer.classList.remove('active');
    settingsContainer.classList.add('active');
    backBtn.style.display = 'flex';
    document.getElementById('currentSection').textContent = 'Settings';
}

function showAbout() {
    artistContainer.style.display = 'none';
    document.querySelectorAll('.songs-container').forEach(container => {
        container.classList.remove('active');
    });
    likedSongsContainer.classList.remove('active');
    playlistsContainer.classList.remove('active');
    settingsContainer.classList.remove('active');
    aboutContainer.classList.add('active');
    backBtn.style.display = 'flex';
    document.getElementById('currentSection').textContent = 'About Galex';
}

function showHomePage() {
    artistContainer.style.display = 'grid';
    document.querySelectorAll('.songs-container').forEach(container => {
        container.classList.remove('active');
    });
    likedSongsContainer.classList.remove('active');
    playlistsContainer.classList.remove('active');
    settingsContainer.classList.remove('active');
    aboutContainer.classList.remove('active');
    backBtn.style.display = 'none';
    document.getElementById('currentSection').textContent = 'Featured Artists';
    searchResults.classList.remove('active');
    searchInput.value = '';
    playerContainer.classList.remove('fullscreen');
    document.body.style.overflow = '';
    if (maximizeBtn.querySelector('i')) maximizeBtn.querySelector('i').className = 'fas fa-expand';
}

function getArtistName(artistId) {
    const names = {
        'hiphopadhi': 'Hiphop Adhi',
        'GVPrakash': 'GV Prakash',
        'vijayantony': 'Vijay Antony',
        'Deva': 'Deva',
        'yuvan': 'Yuvan',
        'aniruth': 'Aniruth',
        'harrisjayaraj': 'Harris Jayaraj',
        'SPB': 'SPB',
        'ilaiyaraja': 'Ilaiyaraja',
        'ARR': 'A R Rahman',
        'unnikrishnan': 'Unni Krishnan',
        'unnimenan': 'Unni Menan',
        'vijay': 'Thalapathy Vijay',
        'ajith': 'Ajith Kumar',
        'rajini': 'Superstar Rajini',
        'kamal': 'Kamal Haasan',
        'surya': 'Suriya',
        'dhanush': 'Dhanush',
        'vikram': 'Chiyaan Vikram',
        'sk': 'Sivakarthikeyan',
        'vishal': 'Vishal',
        'simbu': 'Simbu',
        'janaki': 'S. Janaki',
        'chithra': 'K. S. Chithra',
        'dImman': 'D. Imman',
        'mano': 'Mano',
        'anuradha': 'Anuradha Sriram',
        'srikanthdeva': 'srikanthdeva',
        '00shits': '00\'s Hits',
        '00sromance': '00\'s Romance'
    };
    return names[artistId] || artistId;
}

function populateSongLists() {
    playerContainer.style.display = 'flex';
    Object.keys(songsData).forEach(artistId => {
        const container = document.getElementById(artistId + 'songs');
        if (!container) return;

        const songList = container.querySelector('.song-list');
        songList.innerHTML = '';

        if (songsData[artistId].length === 0) {
            songList.innerHTML = '<div style="padding:20px; text-align:center; color:#888;">No songs available for this artist yet.</div>';
            return;
        }

        songsData[artistId].forEach((song, index) => {
            const li = document.createElement('li');
            li.className = 'song-item';
            li.dataset.index = index;
            li.dataset.artist = artistId;
            li.onclick = () => playSong(artistId, index);

            const isLiked = currentUser && currentUser.likedSongs &&
                currentUser.likedSongs.some(s => s.title === song.title && s.artist === song.artist);

            li.innerHTML = `
                <div class="song-number">${index + 1}</div>
                <img src="${song.cover}" alt="${song.title}" class="song-cover">
                <div class="song-info">
                    <div class="song-title">${song.title}</div>
                    <div class="song-details">${song.album} • ${song.duration} • ${song.artist}</div>
                </div>
                <button class="like-btn ${isLiked ? 'liked' : ''}" onclick="toggleLikeSong('${artistId}', ${index}, event)">
                    ${isLiked ? '❤️' : '🤍'}
                </button>
            `;

            songList.appendChild(li);
        });
    });
}

function populatePlaylists() {
    playlistsGrid.innerHTML = '';
    samplePlaylists.forEach(playlist => {
        const card = document.createElement('div');
        card.className = 'playlist-card hero-card';

        card.onclick = () => showArtistSongs(playlist.id);

        card.innerHTML = `
            <div class="hero-img-container">
                <img src="${playlist.image}" alt="${playlist.name}" class="hero-img">
            </div>
            <div class="playlist-name">${playlist.name}</div>
        `;
        playlistsGrid.appendChild(card);
    });
}

function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('galexSettings')) || {};

    const isDarkMode = savedSettings.darkMode !== false;
    const darkModeToggle = document.getElementById('darkMode');
    if (darkModeToggle) darkModeToggle.checked = isDarkMode;
    applyTheme(isDarkMode);
    const autoPlayToggle = document.getElementById('autoPlay');
    if (autoPlayToggle) autoPlayToggle.checked = savedSettings.autoPlay !== false;

    const showQueueToggle = document.getElementById('showQueue');
    if (showQueueToggle) showQueueToggle.checked = savedSettings.showQueue !== false;

    const animToggle = document.getElementById('animations');
    if (animToggle) animToggle.checked = savedSettings.animations !== false;

    document.querySelectorAll('#settingsContainer input, #settingsContainer select').forEach(element => {
        element.removeEventListener('change', handleSettingChange);
        element.addEventListener('change', handleSettingChange);
    });
}

function handleSettingChange(e) {
    saveSettings();
    if (e.target.id === 'darkMode') {
        applyTheme(e.target.checked);
    }
}

function saveSettings() {
    const settings = {
        autoPlay: document.getElementById('autoPlay').checked,
        showQueue: document.getElementById('showQueue').checked,
        darkMode: document.getElementById('darkMode').checked,
        animations: document.getElementById('animations').checked
    };
    localStorage.setItem('galexSettings', JSON.stringify(settings));
}

function toggleLike(btnElement, contextId, index, fromPlayer = false) {
    if (!currentUser) {
        showNotification('Please login to like songs');
        return;
    }

    if (!currentUser.likedSongs) currentUser.likedSongs = [];

    let targetSong;

    if (fromPlayer) {
        targetSong = currentSong;
    } else {
        const sourceList = (contextId === 'liked_songs') ? currentUser.likedSongs : songsData[contextId];
        targetSong = sourceList[index];
    }

    if (!targetSong) return;

    const existingIndex = currentUser.likedSongs.findIndex(s =>
        s.title === targetSong.title && s.artist === targetSong.artist
    );

    if (existingIndex > -1) {
        currentUser.likedSongs.splice(existingIndex, 1);
        showNotification('Removed from Liked Songs');

        if (contextId === 'liked_songs' && !fromPlayer) {
            displayLikedSongs();
            return;
        }
    } else {
        currentUser.likedSongs.push(targetSong);
        showNotification('Added to Liked Songs');
    }

    localStorage.setItem('galexUser', JSON.stringify(currentUser));

    if (btnElement) {
        const icon = btnElement.querySelector('i');
        const isNowLiked = (existingIndex === -1);
        icon.className = isNowLiked ? 'fas fa-heart' : 'far fa-heart';
        icon.style.color = isNowLiked ? '#e91e63' : '#b0b0d0';
    }
    if (currentSong && targetSong.title === currentSong.title) {
        const playerHeart = document.querySelector('#playerLikeBtn i');
        if (playerHeart) {
            const isLiked = currentUser.likedSongs.some(s => s.title === currentSong.title);
            playerHeart.className = isLiked ? 'fas fa-heart' : 'far fa-heart';
            playerHeart.style.color = isLiked ? '#e91e63' : '#b0b0d0';
        }
    }
}

function loadLikedSongs() {
    if (currentUser && currentUser.likedSongs) {
        Object.keys(songsData).forEach(artistId => {
            songsData[artistId].forEach((song, index) => {
                const isLiked = currentUser.likedSongs.some(s => s.title === song.title && s.artist === song.artist);
                const songElement = document.querySelector(`.song-item[data-artist="${artistId}"][data-index="${index}"]`);
                if (songElement) {
                    const likeBtn = songElement.querySelector('.like-btn');
                    if (likeBtn) {
                        likeBtn.classList.toggle('liked', isLiked);
                        likeBtn.innerHTML = isLiked ? '❤️' : '🤍';
                    }
                }
            });
        });
    }
}

function displayLikedSongs() {
    const list = document.getElementById('likedSongsList');
    const emptyMsg = document.getElementById('emptyLiked');

    list.innerHTML = '';

    if (!currentUser || !currentUser.likedSongs || currentUser.likedSongs.length === 0) {
        if (emptyMsg) emptyMsg.style.display = 'block';
        return;
    }

    if (emptyMsg) emptyMsg.style.display = 'none';

    currentUser.likedSongs.forEach((song, index) => {
        const item = createSongElement(song, 'liked_songs', index);
        list.appendChild(item);
    });
}

function removeFromLiked(songTitle, songArtist, event) {
    event.stopPropagation();

    if (!currentUser || !currentUser.likedSongs) return;

    currentUser.likedSongs = currentUser.likedSongs.filter(
        s => !(s.title === songTitle && s.artist === songArtist)
    );

    localStorage.setItem('galexUser', JSON.stringify(currentUser));
    displayLikedSongs();
    showNotification(`Removed "${songTitle}" from liked songs`);

    Object.keys(songsData).forEach(artistId => {
        songsData[artistId].forEach((song, index) => {
            if (song.title === songTitle && song.artist === songArtist) {
                const songElement = document.querySelector(`.song-item[data-artist="${artistId}"][data-index="${index}"]`);
                if (songElement) {
                    const likeBtn = songElement.querySelector('.like-btn');
                    likeBtn.classList.remove('liked');
                    likeBtn.innerHTML = '🤍';
                }
            }
        });
    });
}

function playSong(contextId, index) {
    currentArtist = contextId;

    let songs;
    if (contextId === 'liked_songs') {
        if (!currentUser || !currentUser.likedSongs) {
            showNotification("Please login to play liked songs");
            return;
        }
        songs = currentUser.likedSongs;
    } else {
        songs = songsData[contextId];
    }

    if (!songs || !songs[index]) {
        console.error("Song not found");
        return;
    }

    if (shuffleMode) {
        if (shuffledPlaylist.length === 0 || !shuffledPlaylist.includes(songs[index])) {
            originalPlaylist = [...songs];
            createShuffledPlaylist();
            const shuffledIndex = shuffledPlaylist.findIndex(s => s.title === songs[index].title);
            currentSongIndex = shuffledIndex !== -1 ? shuffledIndex : 0;
            currentSong = shuffledPlaylist[currentSongIndex];
        } else {
            currentSongIndex = index;
            currentSong = shuffledPlaylist[currentSongIndex];
        }
    } else {
        currentSongIndex = index;
        currentSong = songs[index];
    }

    if (currentSong.audio) {
        audioPlayer.src = currentSong.audio;
        audioPlayer.play().then(() => {
            isPlaying = true;
            updatePlayerUI();
            updateQueueDisplay();
        }).catch(e => {
            console.error("Playback failed", e);
            showNotification("Error playing song url");
        });
    } else {
        showNotification("Song URL missing");
    }
}

function togglePlay() {
    if (!currentSong) {
        const firstArtist = Object.keys(songsData)[0];
        if (firstArtist && songsData[firstArtist].length > 0) {
            playSong(firstArtist, 0);
        }
        return;
    }

    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play().catch(e => {
            console.error('Play error:', e);
            showNotification('Error playing audio');
        });
    }
}

function playPrev() {
    if (!currentArtist) return;

    const baseSongs = getContextSongs(currentArtist);
    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : baseSongs;

    if (songs.length === 0) return;

    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentArtist, currentSongIndex);
}

function playNext() {
    if (!currentArtist) return;

    const baseSongs = getContextSongs(currentArtist);
    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : baseSongs;

    if (songs.length === 0) return;

    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentArtist, currentSongIndex);
}

function updateProgress() {
    if (!audioPlayer.duration || isNaN(audioPlayer.duration)) return;

    const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    document.getElementById('progress').style.width = percent + '%';

    document.getElementById('currentTime').textContent = formatTime(audioPlayer.currentTime);
}

function updateDuration() {
    if (!isNaN(audioPlayer.duration)) {
        document.getElementById('duration').textContent = formatTime(audioPlayer.duration);
    }
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        if (e.target.matches('input, textarea, [contenteditable="true"]')) return;

        switch (e.key) {
            case ' ':
                e.preventDefault();
                togglePlay();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                playPrev();
                break;
            case 'ArrowRight':
                e.preventDefault();
                playNext();
                break;
            case 'm':
            case 'M':
                e.preventDefault();
                volumeIcon.click();
                break;
            case 'l':
            case 'L':
                e.preventDefault();
                if (currentSong) {
                    toggleCurrentSongLike();
                }
                break;
            case 'Escape':
                if (searchResults.classList.contains('active')) {
                    searchResults.classList.remove('active');
                    searchInput.value = '';
                }
                break;
        }
    });
}

function toggleCurrentSongLike() {
    if (!currentUser || !currentSong || !currentArtist) return;

    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : getContextSongs(currentArtist);
    const songIndex = songs.findIndex(
        song => song.title === currentSong.title && song.artist === currentSong.artist
    );

    if (songIndex !== -1) {
        if (currentArtist === 'liked_songs') {
            const fakeEvent = {
                target: document.createElement('div'),
                stopPropagation: () => { }
            };
            removeFromLiked(currentSong.title, currentSong.artist, fakeEvent);
        } else {
            const songElement = document.querySelector(`.song-item[data-artist="${currentArtist}"][data-index="${songIndex}"]`);
            if (songElement) {
                const likeBtn = songElement.querySelector('.like-btn');
                const fakeEvent = {
                    target: likeBtn,
                    stopPropagation: () => { }
                };
                toggleLikeSong(currentArtist, songIndex, fakeEvent);
            }
        }
    }
}
function updatePlayerUI() {
    if (!currentSong) return;

    document.getElementById('playerTitle').textContent = currentSong.title;
    document.getElementById('playerArtist').textContent = currentSong.artist;

    const coverImg = document.getElementById('playerCover');
    coverImg.src = currentSong.cover;
    const playerContainer = document.getElementById('playerContainer');
    playerContainer.style.setProperty('--player-bg', `url('${currentSong.cover}')`);
}

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
    }
}

window.toggleLikeSong = toggleLikeSong;
window.removeFromLiked = removeFromLiked;
