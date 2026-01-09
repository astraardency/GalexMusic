// DOM Elements
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

// Sample songs data
const songsData = {
    'GVPrakash': [
        {
            title: 'Pookkal Pookkum',
            artist: 'GV Prakash Kumar',
            album: 'Madharasa pattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Pookkal Pookkum - G. V. Prakash, Roop Kumar Rathod, Harini, Andrea Jeremiah.mp3'
        },
        {
            title: 'Engeyum Eppothum',
            artist: 'GV Prakash Kumar',
            album: 'Darling',
            duration: '3:45',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Engeyum Eppothum - From  Polladhavan  - G. V. Prakash Kumar, Yogi. B, Kaviyarasu Kannadasan, Yugabharathi, S. P. Balasubrahmanyam, Sunitha Sarathy.mp3'
        },
        {
            title: 'Kutti Pisase',
            artist: 'GV Prakash Kumar',
            album: 'Silambattam',
            duration: '3:58',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Kutti Pisase - G. V. Prakash, Silambarasan TR, Suchitra.mp3'
        },
        {
            title: 'Un Mela Aasadhaan',
            artist: 'GV Prakash Kumar',
            album: 'Aadukalam',
            duration: '4:20',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Un Mela Aasadhaan - G. V. Prakash, Dhanush, Aishwarya R Dhanush, Andrea Jeremiah.m4a'
        },
        {
            title: 'Ayyayo',
            artist: 'GV Prakash Kumar',
            album: 'Aadukalam',
            duration: '4:05',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Ayyayo - G. V. Prakash, S. P. Balasubrahmanyam, S.P. Charan, Prashanthini.mp3'
        },
        {
            title: 'Golden Sparrow',
            artist: 'GV Prakash Kumar',
            album: 'Nilavuku En Mel Ennadi Kobam',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Golden Sparrow (From  Nilavuku En Mel Ennadi Kobam ) - G. V. Prakash, Arivu, Dhanush, Sublahshini.mp3'
        },
        {
            title: 'Hey Minnale',
            artist: 'GV Prakash Kumar',
            album: 'Amaran',
            duration: '4:12',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Hey Minnale (From  Amaran ) (Tamil) - G. V. Prakash, Haricharan, Shweta Mohan, Karthik Netha.mp3'
        },
        {
            title: 'Kuchi Kuchi Rakkamma',
            artist: 'GV Prakash Kumar',
            album: 'boombey',
            duration: '4:25',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Kuchi Kuchi Rakkamma - Hariharan, Swarnalatha, G. V. Prakash, Sharadha.mp3'
        },
        {
            title: 'Manasellam Mazhaiye',
            artist: 'GV Prakash Kumar',
            album: 'Veyil',
            duration: '5:00',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Manasellam Mazhaiye - Sonu Nigam, Saindhavi, G. V. Prakash.mp3'
        },
        {
            title: 'Minikki Minikki',
            artist: 'GV Prakash Kumar',
            album: 'Thangalaan',
            duration: '3:40',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Minikki Minikki (From  Thangalaan ) - Tamil - G. V. Prakash, Sinduri Vishal, Uma Devi.mp3'
        },
        {
            title: 'Otha Sollaala',
            artist: 'GV Prakash Kumar',
            album: 'Aadukalam',
            duration: '4:10',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Otha Sollaala - G. V. Prakash, Velmurugan.mp3'
        },
        {
            title: 'Padichi Parthen',
            artist: 'GV Prakash Kumar',
            album: 'Polladhavan',
            duration: '3:55',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Padichi Parthen - From  Polladhavan  - Kabilan, G. V. Prakash, Shankar Mahadevan.mp3'
        },
        {
            title: 'Un Mela Aasadhaan',
            artist: 'GV Prakash Kumar',
            album: 'arerathil Oruvan',
            duration: '4:20',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Un Mela Aasadhaan - G. V. Prakash, Dhanush, Aishwarya R Dhanush, Andrea Jeremiah.mp3'
        },
        {
            title: 'Vaa Vaathi',
            artist: 'GV Prakash Kumar',
            album: 'Vaathi',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Vaa Vaathi - G. V. Prakash, Shweta Mohan.mp3'
        },
    ],
    'hiphopadhi': [
        {
            title: 'Chennai City Gangstar',
            artist: 'Hiphop Adhi',
            album: 'Vanakkam Chennai',
            duration: '3:45',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Chennai City Gangsta - Anirudh Ravichander, Hard Kaur, Hiphop Tamizha, Country Chicken.mp3'
        },
        {
            title: 'Breakup Song',
            artist: 'Hiphop Adhi',
            album: 'Misaiya Murukku',
            duration: '4:10',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Breakup Song - From  Naan Sirithal  - Hiphop Tamizha.mp3'
        },
        {
            title: 'Boombastic',
            artist: 'Hiphop Adhi',
            album: 'Kadaisi Ulaga Por',
            duration: '3:55',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Boombastic - From  Kadaisi Ulaga Por  - Hiphop Tamizha, Chinna Ponnu, Rajan Chelliah.mp3'
        },
        {
            title: 'Vaadi Pulla Vaadi',
            artist: 'Hiphop Adhi',
            album: 'Meesaya Murukku',
            duration: '4:05',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Vaadi Pulla Vaadi - Hiphop Tamizha.mp3'
        }
    ],
    'vijayantony': [
        {
            title: 'Naaka Mukka',
            artist: 'Vijay Antony',
            album: 'Kadhalil Vizhunthen',
            duration: '4:15',
            cover: 'https://i.pinimg.com/736x/e2/e9/b5/e2e9b54e371b7bc861e40789bf6b7720.jpg',
            audio: 'https://assets.mixkit.co/music/preview/mixkit-game-show-suspense-waiting-667.mp3'
        },
        {
            title: 'Yamma Yamma',
            artist: 'Vijay Antony',
            album: 'Saithan',
            duration: '3:30',
            cover: 'https://i.pinimg.com/736x/e2/e9/b5/e2e9b54e371b7bc861e40789bf6b7720.jpg',
            audio: 'https://assets.mixkit.co/music/preview/mixkit-drum-and-bass-intro-229.mp3'
        }
    ],
    'Deva': [
        {
            title: 'Aadiyae Attam Enna',
            artist: 'Deva',
            album: 'Aadiyae Attam Enna',
            duration: '4:00',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Aadiyae-Attam-Enna-MassTamilan.fm.mp3'
        },
        {
            title: 'Aaha Yehi Hai II',
            artist: 'Deva',
            album: 'Aaha Yehi Hai II',
            duration: '3:45',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Aaha-Yehi-Hai-II-MassTamilan.com.mp3'
        },
        {
            title: 'Aasaiyil Oor Kaditham',
            artist: 'Deva',
            album: 'Aasaiyil Oor Kaditham',
            duration: '4:20',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Aasaiyil-Oor-Kaditham-MassTamilan.com.mp3'
        },
        {
            title: 'Adiye Flowere (I)',
            artist: 'Deva',
            album: 'Adiye Flowere (I)',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Adiye-Flowere-(I)-MassTamilan.com.mp3'
        },
        {
            title: 'Alli Alli',
            artist: 'Deva',
            album: 'Alli Alli',
            duration: '4:10',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Alli-Alli.mp3'
        },
        {
            title: 'Anju Pathu Kadanai',
            artist: 'Deva',
            album: 'Anju Pathu Kadanai',
            duration: '3:55',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Anju-Pathu-Kadanai-MassTamilan.com.mp3'
        },
        {
            title: 'Annamalai Annamalai',
            artist: 'Deva',
            album: 'Annamalai Annamalai',
            duration: '4:25',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Annamalai-Annamalai.mp3'
        },
        {
            title: 'Arumugam',
            artist: 'Deva',
            album: 'Arumugam',
            duration: '4:15',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Arumugam-MassTamilan.io.mp3'
        },
        {
            title: 'Athanda Ithanda',
            artist: 'Deva',
            album: 'Athanda Ithanda',
            duration: '4:05',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Athanda-Ithanda.mp3'
        },
        {
            title: 'Australia',
            artist: 'Deva',
            album: 'Australia',
            duration: '3:35',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Australia.mp3'
        },
        {
            title: 'Azhage Bhramanidam',
            artist: 'Deva',
            album: 'Azhage Bhramanidam',
            duration: '4:00',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Azhage-Bhramanidam.mp3'
        },
        {
            title: 'Azhagu Azhagu Nee',
            artist: 'Deva',
            album: 'Azhagu Azhagu Nee',
            duration: '4:20',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Azhagu-Azhagu-Nee.mp3',
        },
        {
            title: 'Baatcha Paaru',
            artist: 'Deva',
            album: 'Baatcha Paaru',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Baatcha-Paaru.mp3',
        },
        {
            title: 'Chinnanchiru Poove',
            artist: 'Deva',
            album: 'Chinnanchiru Poove',
            duration: '4:10',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Chinnanchiru-Poove-MassTamilan.fm.mp3'
        },
        {
            title: 'Chitraiyae Adi Chitraiyae',
            artist: 'Deva',
            album: 'Chitraiyae Adi Chitraiyae',
            duration: '4:30',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Chitraiyae-Adi-Chitraiyae-MassTamilan.fm.mp3'
        },
        {
            title: 'Ele Elanguyile',
            artist: 'Deva',
            album: 'Ele Elanguyile',
            duration: '3:55',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Ele-Elanguyile-MassTamilan.fm.mp3'

        },
        {
            title: 'Endhan Rajadhi Mass',
            artist: 'Deva',
            album: 'Endhan Rajadhi Mass',
            duration: '4:15',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Endhan-Rajadhi-MassTamilan.io.mp3'
        },
        {
            title: 'Enna Idhu Vayasu Mass',
            artist: 'Deva',
            album: 'Enna Idhu Vayasu Mass',
            duration: '4:05',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Enna-Idhu-Vayasu-MassTamilan.com.mp3'
        },
        {
            title: 'French Classile',
            artist: 'Deva',
            album: 'French Classile',
            duration: '3:40',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/French-Classile-MassTamilan.com.mp3'
        },
        {
            title: 'Hip Hip',
            artist: 'Deva',
            album: 'Hip Hip',
            duration: '4:20',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Hip-Hip-MassTamilan.com.mp33'
        },
        {
            title: 'I Love You',
            artist: 'Deva',
            album: 'I Love You',
            duration: '4:00',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/I-Love-You.mp3'
        },
        {
            title: 'Kaadhal Kiligale',
            artist: 'Deva',
            album: 'Kaadhal Kiligale',
            duration: '3:55',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Kaadhal-Kiligale-MassTamilan.fm.mp3'
        },
        {
            title: 'Karthigai Mass',
            artist: 'Deva',
            album: 'Karthigai Mass',
            duration: '4:10',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Karthigai-MassTamilan.com.mp3'
        },
        {
            title: 'Karu Karu Karupayi',
            artist: 'Deva',
            album: 'Karu Karu Karupayi',
            duration: '4:25',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Karu-Karu-Karupayi-MassTamilan.dev.mp3'
        },
        {
            title: 'Kondayil Thaazham Poo',
            artist: 'Deva',
            album: 'Kondayil Thaazham Poo',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/e1/d8/37/e1d837f583ddc85852f262b90648cb4b.jpg',
            audio: 'songs/Deva/Kondayil-Thaazham-Poo.mp3'
        }
    ]
};

// Sample playlists
const samplePlaylists = [
    {
        id: 'favorites',
        name: 'My Favorites',
        count: 12,
        icon: 'fas fa-heart'
    },
    {
        id: 'tamil_hits',
        name: 'Tamil Hits',
        count: 25,
        icon: 'fas fa-bolt'
    },
    {
        id: 'workout',
        name: 'Workout Mix',
        count: 18,
        icon: 'fas fa-running'
    },
    {
        id: 'chill',
        name: 'Chill Vibes',
        count: 15,
        icon: 'fas fa-coffee'
    },
    {
        id: 'party',
        name: 'Party Time',
        count: 22,
        icon: 'fas fa-glass-cheers'
    },
    {
        id: 'old_is_gold',
        name: 'Old is Gold',
        count: 30,
        icon: 'fas fa-crown'
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

// Initialize application
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
    currentUser = JSON.parse(localStorage.getItem('galexUser'));
    if (currentUser) {
        updateUIForLoggedInUser();
    }
}

function updateUIForLoggedInUser() {
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'block';
    verifyIcon.style.display = 'block';
    galexText.textContent = `Hi, ${currentUser.username}`;
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
    // Login/Signup
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

    // Logout
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

    // Close account modal when clicking outside
    account.onclick = (e) => {
        if (e.target === account) {
            closeAccountModal();
        }
    };

    // Signup
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

    // Login
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

    // Artist selection
    document.getElementById('hiphopadhi').onclick = () => showArtistSongs('hiphopadhi');
    document.getElementById('GVPrakash').onclick = () => showArtistSongs('GVPrakash');
    document.getElementById('vijayantony').onclick = () => showArtistSongs('vijayantony');
    document.getElementById('Deva').onclick = () => showArtistSongs('Deva');

    // Navigation buttons
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

    // Back button
    backBtn.onclick = showHomePage;

    // Player controls
    document.querySelector('.play-btn').onclick = togglePlay;
    document.querySelector('.prev-btn').onclick = playPrev;
    document.querySelector('.next-btn').onclick = playNext;

    // Repeat and Shuffle
    repeatBtn.onclick = toggleRepeat;
    shuffleBtn.onclick = toggleShuffle;

    // Progress bar
    document.getElementById('progressBar').onclick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (audioPlayer.duration) {
            audioPlayer.currentTime = percent * audioPlayer.duration;
        }
    };

    // Volume control
    document.getElementById('volumeSlider').onclick = (e) => {
        const rect = e.target.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const volume = Math.max(0, Math.min(1, percent));
        audioPlayer.volume = volume;
        localStorage.setItem('galexVolume', volume);
        updateVolumeProgress(volume);
        updateVolumeIcon(volume);
    };

    // Volume icon click to mute/unmute
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

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.classList.remove('active');
        }
    });

    // Settings
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

    // Audio events
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

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && account.classList.contains('show')) {
            closeAccountModal();
        }
    });
}

function handleSongEnd() {
    switch (repeatMode) {
        case 'one':
            audioPlayer.currentTime = 0;
            audioPlayer.play().catch(e => console.error('Play error:', e));
            break;
        case 'all':
            playNext();
            break;
        default:
            isPlaying = false;
            document.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
            document.getElementById('playerCover').classList.remove('playing');
            break;
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

function createShuffledPlaylist() {
    if (!currentArtist) return;

    originalPlaylist = [...songsData[currentArtist]];
    shuffledPlaylist = [...originalPlaylist];

    // Fisher-Yates shuffle
    for (let i = shuffledPlaylist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledPlaylist[i], shuffledPlaylist[j]] = [shuffledPlaylist[j], shuffledPlaylist[i]];
    }

    // Find current song index in shuffled playlist
    if (currentSong) {
        const currentIndex = shuffledPlaylist.findIndex(
            song => song.title === currentSong.title && song.artist === currentSong.artist
        );
        if (currentIndex > -1) {
            // Move current song to the beginning
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

    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : songsData[currentArtist];
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
}

function getArtistName(artistId) {
    const names = {
        'hiphopadhi': 'Hiphop Adhi',
        'GVPrakash': 'GV Prakash',
        'vijayantony': 'Vijay Antony',
        'Deva': 'Deva',
        'yuvan': 'Yuvan',
        'aniruth': 'Aniruth',
        'harris jayaraj': 'Harris Jayaraj',
        'D Imman': 'D Imman',
        'S P B': 'S P B'
    };
    return names[artistId] || artistId;
}

function populateSongLists() {
    Object.keys(songsData).forEach(artistId => {
        const container = document.getElementById(artistId + 'songs');
        if (!container) return;

        const songList = container.querySelector('.song-list');
        songList.innerHTML = '';

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
        card.className = 'playlist-card';
        card.innerHTML = `
            <div class="playlist-icon">
                <i class="${playlist.icon}"></i>
            </div>
            <div class="playlist-name">${playlist.name}</div>
            <div class="playlist-count">${playlist.count} songs</div>
        `;
        playlistsGrid.appendChild(card);
    });
}

function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('galexSettings')) || {};
    document.getElementById('autoPlay').checked = savedSettings.autoPlay || false;
    document.getElementById('showQueue').checked = savedSettings.showQueue !== false;
    document.getElementById('darkMode').checked = savedSettings.darkMode !== false;
    document.getElementById('animations').checked = savedSettings.animations !== false;

    // Save settings when changed
    document.querySelectorAll('#settingsContainer input, #settingsContainer select').forEach(element => {
        element.addEventListener('change', saveSettings);
    });
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

function toggleLikeSong(artistId, songIndex, event) {
    event.stopPropagation();

    if (!currentUser) {
        showNotification('Please login to like songs');
        return;
    }

    const song = songsData[artistId][songIndex];
    const likeBtn = event.target.closest('.like-btn');

    if (!currentUser.likedSongs) {
        currentUser.likedSongs = [];
    }

    const songIndexInLiked = currentUser.likedSongs.findIndex(
        s => s.title === song.title && s.artist === song.artist
    );

    if (songIndexInLiked === -1) {
        currentUser.likedSongs.push({
            ...song,
            originalArtist: artistId,
            originalIndex: songIndex
        });
        likeBtn.classList.add('liked');
        likeBtn.innerHTML = '❤️';
        likeBtn.style.animation = 'pulse 0.3s ease';
        setTimeout(() => likeBtn.style.animation = '', 300);
        showNotification(`Added "${song.title}" to liked songs`);
    } else {
        currentUser.likedSongs.splice(songIndexInLiked, 1);
        likeBtn.classList.remove('liked');
        likeBtn.innerHTML = '🤍';
        showNotification(`Removed "${song.title}" from liked songs`);
    }

    localStorage.setItem('galexUser', JSON.stringify(currentUser));

    if (likedSongsContainer.classList.contains('active')) {
        displayLikedSongs();
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
    likedSongsList.innerHTML = '';

    if (!currentUser || !currentUser.likedSongs || currentUser.likedSongs.length === 0) {
        emptyLiked.style.display = 'block';
        return;
    }

    emptyLiked.style.display = 'none';

    currentUser.likedSongs.forEach((song, index) => {
        const li = document.createElement('li');
        li.className = 'song-item';
        li.onclick = () => {
            const artist = song.originalArtist;
            const songIndex = song.originalIndex;
            if (artist && songIndex !== undefined) {
                playSong(artist, songIndex);
            }
        };

        li.innerHTML = `
            <div class="song-number">${index + 1}</div>
            <img src="${song.cover}" alt="${song.title}" class="song-cover">
            <div class="song-info">
                <div class="song-title">${song.title}</div>
                <div class="song-details">${song.album} • ${song.duration} • ${song.artist}</div>
            </div>
            <button class="like-btn liked" onclick="removeFromLiked('${song.title}', '${song.artist}', event)">
                ❤️
            </button>
        `;

        likedSongsList.appendChild(li);
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

function playSong(artistId, songIndex) {
    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : songsData[artistId];
    const song = songs[songIndex];

    currentSong = song;
    currentSongIndex = songIndex;
    currentArtist = artistId;

    document.getElementById('playerTitle').textContent = song.title;
    document.getElementById('playerArtist').textContent = `${song.artist} • ${song.album}`;
    document.getElementById('playerCover').src = song.cover;

    document.querySelector('.play-btn').innerHTML = '<div class="loading"></div>';

    audioPlayer.src = song.audio;

    playerContainer.classList.remove('hidden');
    updateQueueDisplay();

    audioPlayer.play().then(() => {
        document.querySelector('.play-btn').innerHTML = '<i class="fas fa-pause"></i>';
        document.getElementById('playerCover').classList.add('playing');
    }).catch(e => {
        console.error('Play error:', e);
        showNotification('Error playing audio. Please try again.');
        document.querySelector('.play-btn').innerHTML = '<i class="fas fa-play"></i>';
        document.getElementById('playerCover').classList.remove('playing');
    });

    document.querySelectorAll('.song-item').forEach(item => {
        item.classList.remove('active');
    });

    const activeSong = document.querySelector(`.song-item[data-artist="${artistId}"][data-index="${songIndex}"]`);
    if (activeSong) activeSong.classList.add('active');
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

    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : songsData[currentArtist];
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(currentArtist, currentSongIndex);
}

function playNext() {
    if (!currentArtist) return;

    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : songsData[currentArtist];
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

    const songs = shuffleMode && shuffledPlaylist.length ? shuffledPlaylist : songsData[currentArtist];
    const songIndex = songs.findIndex(
        song => song.title === currentSong.title && song.artist === currentSong.artist
    );

    if (songIndex !== -1) {
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

// Make functions available globally
window.toggleLikeSong = toggleLikeSong;
window.removeFromLiked = removeFromLiked;