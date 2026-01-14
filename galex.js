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
            title: 'Pookal Pookum',
            artist: 'GV Prakash Kumar',
            album: 'Madharasapattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            audio: 'songs/Pookal Pookum.mp3'
        },
        {
            title: 'Vaamma Duraiyamma',
            artist: 'GV Prakash Kumar',
            album: 'Madharasapattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            audio: 'songs/Vaamma Duraiyamma.mp3'
        },
        {
            title: 'Meghame O Meghame',
            artist: 'GV Prakash Kumar',
            album: 'Madharasapattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            audio: 'songs/Meghame O Meghame.mp3'
        },
        {
            title: 'The Dance Theme of Madharasapattinam',
            artist: 'GV Prakash Kumar',
            album: 'Madharasapattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            audio: 'songs/The Dance Theme of Madharasapattinam.mp3'
        },
        {
            title: 'Kaatrile',
            artist: 'GV Prakash Kumar',
            album: 'Madharasapattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            audio: 'songs/Kaatrile.mp3'
        },
        {
            title: 'Aaruyire',
            artist: 'GV Prakash Kumar',
            album: 'Madharasapattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            audio: 'songs/Aaruyire.mp3'
        },
        {
            title: 'Feel of Love',
            artist: 'GV Prakash Kumar',
            album: 'Madharasapattinam',
            duration: '4:32',
            cover: 'https://i.pinimg.com/736x/5e/04/99/5e049992ef02750dad84fe7d44c061bc.jpg',
            audio: 'songs/Feel of Love.mp3'
        },
        {
            title:'Gum-Zaare',
            artist:'GV Prakash kumar',
            album:'Kadavul-Irukaan-Kumaru',
            duration:'3:56',
            cover:'https://i.pinimg.com/1200x/d1/fe/ee/d1feee5bdeb4d8f7b6900407f3f4a4bc.jpg',
            audio:'songs/Gum-Zaare.mp3'
        },
        {
            title:'Hey-Pathu-Podi',
            artist:'GV Prakash kumar',
            album:'Kadavul-Irukaan-Kumaru',
            duration:'3:56',
            cover:'https://i.pinimg.com/1200x/d1/fe/ee/d1feee5bdeb4d8f7b6900407f3f4a4bc.jpg',
            audio:'songs/Hey-Pathu-Podi.mp3'
        },
        {
            title:'Iravinil-Aattam',
            artist:'GV Prakash kumar',
            album:'Kadavul-Irukaan-Kumaru',
            duration:'3:56',
            cover:'https://i.pinimg.com/1200x/d1/fe/ee/d1feee5bdeb4d8f7b6900407f3f4a4bc.jpg',
            audio:'songs/Iravinil-Aattam.mp3'
        },
        {
            title:'Locality-Boys',
            artist:'GV Prakash kumar',
            album:'Kadavul-Irukaan-Kumaru',
            duration:'3:56',
            cover:'https://i.pinimg.com/1200x/d1/fe/ee/d1feee5bdeb4d8f7b6900407f3f4a4bc.jpg',
            audio:'songs/Locality-Boys.mp3'
        },
        {
            title:'Nee-Pona-Theruvula',
            artist:'GV Prakash kumar',
            album:'Kadavul-Irukaan-Kumaru',
            duration:'3:56',
            cover:'https://i.pinimg.com/1200x/d1/fe/ee/d1feee5bdeb4d8f7b6900407f3f4a4bc.jpg',
            audio:'songs/Nee-Pona-Theruvula.mp3'
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
            audio: 'songs/Golden_Sparrow.mp3'
        },
        {
            title: 'Kaathal Fail',
            artist: 'GV Prakash Kumar',
            album: 'Kaathal Fail',
            duration: '',
            cover: 'https://i.pinimg.com/736x/31/5a/95/315a950f69864de18a94e91315921eb2.jpg',
            audio: 'songs/Kaathal_Fail.mp3'
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
        {
            title: 'Adiye',
            artist: 'GV Prakash Kumar',
            album: 'Bachelor',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/f7/2d/8b/f72d8b58744af5a9c6038de588d574bc.jpg',
            audio: 'songs/Adiye-MassTamilan.fm.mp3'
        },
        {
            title: 'Kaadhal Kanmani',
            artist: 'GV Prakash Kumar',
            album: 'Bachelor',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/f7/2d/8b/f72d8b58744af5a9c6038de588d574bc.jpg',
            audio: 'songs/Kaadhal-Kanmani-MassTamilan.fm.mp3'
        },
        {
            title: 'Kavan',
            artist: 'GV Prakash Kumar',
            album: 'Bachelor',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/f7/2d/8b/f72d8b58744af5a9c6038de588d574bc.jpg',
            audio: 'songs/Kavan-MassTamilan.fm.mp3'
        },
        {
            title: 'Life Of Bachelor',
            artist: 'GV Prakash Kumar',
            album: 'Bachelor',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/f7/2d/8b/f72d8b58744af5a9c6038de588d574bc.jpg',
            audio: 'songs/Life-Of-Bachelor-MassTamilan.fm.mp3'
        },
        {
            title: 'Miss You Baby',
            artist: 'GV Prakash Kumar',
            album: 'Bachelor',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/f7/2d/8b/f72d8b58744af5a9c6038de588d574bc.jpg',
            audio: 'songs/Miss-You-Baby-MassTamilan.fm.mp3'
        },
        {
            title: 'Pachigalam Paravaigalam',
            artist: 'GV Prakash Kumar',
            album: 'Bachelor',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/f7/2d/8b/f72d8b58744af5a9c6038de588d574bc.jpg',
            audio: 'songs/Pachigalam-Paravaigalam-MassTamilan.fm.mp3'
        },
        {
            title: 'A Square B Square (Female-Version)',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/A-Square-B-Square-(Female-Version)-MassTamilan.org.mp3'
        },
        {
            title: 'Enakku-Thaan',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/Enakku-Thaan-MassTamilan.org.mp3'
        },
        {
            title: 'Kannum Kannum Plus',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/Kannum-Kannum-Plus-MassTamilan.org.mp3'
        },
        {
            title: 'Nenjellam Nindrayae',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/Nenjellam-Nindrayae-MassTamilan.org.mp3'
        },
        {
            title: 'A Square B Square (Male-Version)',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/A-Square-B-Square-(Male-Version)-MassTamilan.org.mp3'
        },
        {
            title: 'Oh Balu',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/Oh-Balu-MassTamilan.org.mp3'
        },
        {
            title: 'Oru Vaanam',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/Oru-Vaanam-MassTamilan.org.mp3'
        },
        {
            title: 'That Is Mahalakshmi',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/That-Is-Mahalakshmi-MassTamilan.org.mp3'
        },
        {
            title: 'Thiru Thiru Gananatha',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/Thiru-Thiru-Gananatha-MassTamilan.org.mp3'
        },
        {
            title: 'Yeanadi Yeanadi',
            artist: 'GV Prakash Kumar',
            album: '100% Kadhal',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/df/0f/11/df0f114c63239715c913117d1322d636.jpg',
            audio: 'songs/Yeanadi-Yeanadi-MassTamilan.org.mp3'
        },
        {
            title: 'Avatha Paiyya',
            artist: 'GV Prakash Kumar',
            album: 'Paradesi',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/8d/bf/16/8dbf1691a58b2dd05f4836f7b9939b9c.jpg',
            audio: 'songs/Avatha-Paiyya.mp3'
        },
        {
            title: 'Or Mirugam',
            artist: 'GV Prakash Kumar',
            album: 'Paradesi',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/8d/bf/16/8dbf1691a58b2dd05f4836f7b9939b9c.jpg',
            audio: 'songs/Or-Mirugam.mp3'
        },
        {
            title: 'Sengaade',
            artist: 'GV Prakash Kumar',
            album: 'Paradesi',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/8d/bf/16/8dbf1691a58b2dd05f4836f7b9939b9c.jpg',
            audio: 'songs/Sengaade.mp3'
        },
        {
            title: 'Senneer Thaana',
            artist: 'GV Prakash Kumar',
            album: 'Paradesi',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/8d/bf/16/8dbf1691a58b2dd05f4836f7b9939b9c.jpg',
            audio: 'songs/Senneer-Thaana.mp3'
        },
        {
            title: 'Thannai Thaane',
            artist: 'GV Prakash Kumar',
            album: 'Paradesi',
            duration: '3:50',
            cover: 'https://i.pinimg.com/1200x/8d/bf/16/8dbf1691a58b2dd05f4836f7b9939b9c.jpg',
            audio: 'songs/Thannai-Thaane.mp3'
        },
        {
            title: 'Edhai Ninaithom',
            artist: 'GV Prakash Kumar',
            album: 'Kaaka Muttai',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/be/9f/01/be9f01c2ad236427ee053d0fd2a309c8.jpg',
            audio: 'songs/Edhai-Ninaithom.mp3'
        },
        {
            title: 'Karuppu Karuppu',
            artist: 'GV Prakash Kumar',
            album: 'Kaaka Muttai',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/be/9f/01/be9f01c2ad236427ee053d0fd2a309c8.jpg',
            audio: 'songs/Karuppu-Karuppu.mp3'
        },
        {
            title: 'Manjave Kanjachu',
            artist: 'GV Prakash Kumar',
            album: 'Kaaka Muttai',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/be/9f/01/be9f01c2ad236427ee053d0fd2a309c8.jpg',
            audio: 'songs/Manjave-Kanjachu.mp3'
        },
        {
            title: 'Sel Sel',
            artist: 'GV Prakash Kumar',
            album: 'Kaaka Muttai',
            duration: '3:50',
            cover: 'https://i.pinimg.com/736x/be/9f/01/be9f01c2ad236427ee053d0fd2a309c8.jpg',
            audio: 'songs/Sel-Sel.mp3'
        },
        {
            title: 'IKMS Theme',
            artist: 'GV Prakash Kumar',
            album: 'Irumbu Kottai Murattu Singam',
            duration: '3:50',
            cover: 'https://c.saavncdn.com/641/Irumbu-Kottai-Murattu-Singam-Tamil-2010-20200518122619-500x500.jpg',
            audio: 'songs/IKMS-Theme.mp3'
        },
        {
            title: 'Ilanthamizha',
            artist: 'GV Prakash Kumar',
            album: 'Irumbu Kottai Murattu Singam',
            duration: '3:50',
            cover: 'https://c.saavncdn.com/641/Irumbu-Kottai-Murattu-Singam-Tamil-2010-20200518122619-500x500.jpg',
            audio: 'songs/Ilanthamizha.mp3'
        },
        {
            title: 'Kanna Nee Ennai',
            artist: 'GV Prakash Kumar',
            album: 'Irumbu Kottai Murattu Singam',
            duration: '3:50',
            cover: 'https://c.saavncdn.com/641/Irumbu-Kottai-Murattu-Singam-Tamil-2010-20200518122619-500x500.jpg',
            audio: 'songs/Kanna-Nee-Ennai.mp3'
        },
        {
            title: 'Nenjam Nenjam',
            artist: 'GV Prakash Kumar',
            album: 'Irumbu Kottai Murattu Singam',
            duration: '3:50',
            cover: 'https://c.saavncdn.com/641/Irumbu-Kottai-Murattu-Singam-Tamil-2010-20200518122619-500x500.jpg',
            audio: 'songs/Nenjam-Nenjam.mp3'
        },
        {
            title: 'Raja Singam',
            artist: 'GV Prakash Kumar',
            album: 'Irumbu Kottai Murattu Singam',
            duration: '3:50',
            cover: 'https://c.saavncdn.com/641/Irumbu-Kottai-Murattu-Singam-Tamil-2010-20200518122619-500x500.jpg',
            audio: 'songs/Raja-Singam.mp3'
        },
        {
            title: 'Vellaikari Nee',
            artist: 'GV Prakash Kumar',
            album: 'Irumbu Kottai Murattu Singam',
            duration: '3:50',
            cover: 'https://c.saavncdn.com/641/Irumbu-Kottai-Murattu-Singam-Tamil-2010-20200518122619-500x500.jpg',
            audio: 'songs/Vellaikari-Nee.mp3'
        },
        {
            title: 'War-Theme',
            artist: 'GV Prakash Kumar',
            album: 'Irumbu Kottai Murattu Singam',
            duration: '3:50',
            cover: 'https://c.saavncdn.com/641/Irumbu-Kottai-Murattu-Singam-Tamil-2010-20200518122619-500x500.jpg',
            audio: 'songs/War-Theme.mp3'
        }
    ],
    'hiphopadhi': [
        {
            title: 'Aathadi',
            artist: 'Hiphop Adhi',
            album: 'Natpe thunai',
            duration: '3:45',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Aathadi-MassTamilan.org.mp3'
        },
        {
            title: 'Kerala Song',
            artist: 'Hiphop Adhi',
            album: 'Natpe thunai',
            duration: '4:10',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Kerala-Song-MassTamilan.org.mp3'
        },
        {
            title: 'Morattu Single',
            artist: 'Hiphop Adhi',
            album: 'Natpe thunai',
            duration: '3:55',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Morattu-Single-MassTamilan.org.mp3'
        },
        {
            title: 'Pallikoodam-the-farewell',
            artist: 'Hiphop Adhi',
            album: 'Meesaya Murukku',
            duration: '4:05',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Pallikoodam-The-Farewell-MassTamilan.org.mp3'
        },
        {
            title:'Single-Pasanga-MassTamilan',
            artist: 'Hiphop Adhi',
            album: 'Natpe thunai',
            duration: '4:20',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Single-Pasanga-MassTamilan.org.mp3'
        },
        {
            title:'Vengamavan-MassTamilan.org.mp3',
            artist: 'Hiphop Adhi',
            album: 'Natpe thunai',
            duration: '3:50',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Vengamavan-MassTamilan.org.mp3'
        },
        {
            title :'Veedhikor Jaadhi',
            artist: 'Hiphop Adhi',
            album: 'Natpe thunai',
            duration: '4:15',
            cover: 'https://wallpapercave.com/wp/wp10063354.jpg',
            audio: 'songs/Veedhikor-Jaadhi-MassTamilan.org.mp3'
        },
        {
            title :'Ajukku Gumukku',
            artist: 'Hiphop Adhi',
            album: 'Naan Sirithal',
            duration: '4:15',
            cover: 'https://i.pinimg.com/1200x/be/da/ed/bedaeda271cb522a18287536b5cad0b1.jpg',
            audio: 'songs/Ajukku-Gumukku-MassTamilan.io.mp3'
        },
        {
            title :'Breakup Song',
            artist: 'Hiphop Adhi',
            album: 'Naan Sirithal',
            duration: '4:15',
            cover: 'https://i.pinimg.com/1200x/be/da/ed/bedaeda271cb522a18287536b5cad0b1.jpg',
            audio: 'songs/Breakup-Song-MassTamilan.io.mp3'
        },
        {
            title :'Dhom Dhom',
            artist: 'Hiphop Adhi',
            album: 'Naan Sirithal',
            duration: '4:15',
            cover: 'https://i.pinimg.com/1200x/be/da/ed/bedaeda271cb522a18287536b5cad0b1.jpg',
            audio: 'songs/Dhom-Dhom-MassTamilan.io.mp3'
        },
        {
            title :'Happy Birthday',
            artist: 'Hiphop Adhi',
            album: 'Naan Sirithal',
            duration: '4:15',
            cover: 'https://i.pinimg.com/1200x/be/da/ed/bedaeda271cb522a18287536b5cad0b1.jpg',
            audio: 'songs/Happy-Birthday-MassTamilan.io.mp3'
        },
        {
            title :'Keka Beka',
            artist: 'Hiphop Adhi',
            album: 'Naan Sirithal',
            duration: '4:15',
            cover: 'https://i.pinimg.com/1200x/be/da/ed/bedaeda271cb522a18287536b5cad0b1.jpg',
            audio: 'songs/Keka-Beka-MassTamilan.io.mp3'
        },
        {
            title :'Naan Siricha',
            artist: 'Hiphop Adhi',
            album: 'Naan Sirithal',
            duration: '4:15',
            cover: 'https://i.pinimg.com/1200x/be/da/ed/bedaeda271cb522a18287536b5cad0b1.jpg',
            audio: 'songs/Naan-Siricha-MassTamilan.io.mp3'
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
            title: 'Aagaasa-Vaanin',
            artist: 'deva',
            album: 'Priyamudan',
            duration: '5:54',
            cover:'https://th.bing.com/th/id/OIP.ysZTqJWqRnYVEQxzw5BGngAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Aagaasa-Vaanin-MassTamilan.com.mp3'
        },
        {
            title: 'Bharathikku-Kannamma',
            artist: 'Deva',
            album:'Priyamudan',
            duration: '5:01',
            cover:'https://th.bing.com/th/id/OIP.ysZTqJWqRnYVEQxzw5BGngAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Bharathikku-Kannamma-(V2)-MassTamilan.com.mp3'
        },
        {
            title: 'Hello-Maruthi',
            artist:'Deva',
            album: 'Priiyamudan',
            duration: '5:27',
            cover:'https://th.bing.com/th/id/OIP.ysZTqJWqRnYVEQxzw5BGngAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio:'songs/Hello-Maruthi-MassTamilan.com.mp3'
        },
        {
            title:'Mouriya-Mouriya',
            artist:'deva',
            album: 'priyamudan',
            duration: '5:36',
            cover:'https://th.bing.com/th/id/OIP.ysZTqJWqRnYVEQxzw5BGngAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio:'songs/Mouriya-Mouriya-MassTamilan.com.mp3'
        },
        {
            title: 'Pooja-Vaa-Pooja-Vaa',
            artist:'Deva',
            album: 'priyamudan',
            duration: '5:36',
            cover:'https://th.bing.com/th/id/OIP.ysZTqJWqRnYVEQxzw5BGngAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio:'songs/Pooja-Vaa-Pooja-Vaa-MassTamilan.com.mp3'
        },
        {
            title: 'White-Lagaan',
            artist:'Deva',
            album: 'priyamudan',
            duration: '5:36',
            cover:'https://th.bing.com/th/id/OIP.ysZTqJWqRnYVEQxzw5BGngAAAA?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio:'songs/White-Lagaan-MassTamilan.com.mp3'
        },
        {
            title: 'Anbe-Anbe-En-Anbe',
            artist:'Deva',
            album: 'Nenjinile',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Anbe-Anbe-En-Anbe.mp3'
        },
        {
            title: 'Madras-Thosth',
            artist:'Deva',
            album: 'Nenjinile',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Madras-Thosth.mp3'
        },
        {
            title: 'Manase-Manase',
            artist:'Deva',
            album: 'Nenjinile',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Manase-Manase.mp3'
        },
        {
            title: 'Prime-Minister',
            artist:'Deva',
            album: 'Nenjinile',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Prime-Minister.mp3'
        },
        {
            title: 'Thanga-Nirathuku',
            artist:'Deva',
            album: 'Nenjinile',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Thanga-Nirathuku.mp3'
        },
        {
            title: 'Australia',
            artist:'Deva',
            album: 'Citizen',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Australia.mp3'
        },
        {
            title: 'I-Love-You',
            artist:'Deva',
            album: 'Citizen',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/I-Love-You.mp3'
        },
        {
            title: 'Merkey',
            artist:'Deva',
            album: 'Citizen',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Merkey.mp3'
        },
        {
            title: 'Pookara',
            artist:'Deva',
            album: 'Citizen',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Pookara.mp3'
        },
        {
            title: 'Sikki-Mukki',
            artist:'Deva',
            album: 'Citizen',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Sikki-Mukki.mp3'
        },
        {
            title: 'Merkey-Uthikkum',
            artist:'Deva',
            album: 'Citizen',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/78/cc/2a/78cc2aafdc511092ce06cc3a37cdc074.jpg',
            audio:'songs/Merkey-Uthikkum.mp3'
        },
        {
            title: 'Ennavale Ennavale',
            artist:'Deva',
            album: 'Ninaithen Vandhai',
            duration: '5:36',
            cover:'https://i.pinimg.com/1200x/61/00/b4/6100b40eb05ec6533bb25053c99b3626.jpg',
            audio:'songs/Ennavale-Ennavale.mp3'
        },
        {
            title: 'Malligaiye Malligaiye',
            artist:'Deva',
            album: 'Ninaithen Vandhai',
            duration: '5:36',
            cover:'https://i.pinimg.com/1200x/61/00/b4/6100b40eb05ec6533bb25053c99b3626.jpg',
            audio:'songs/Malligaiye-Malligaiye.mp3'
        },
        {
            title: 'Manisha Manisha',
            artist:'Deva',
            album: 'Ninaithen Vandhai',
            duration: '5:36',
            cover:'https://i.pinimg.com/1200x/61/00/b4/6100b40eb05ec6533bb25053c99b3626.jpg',
            audio:'songs/Manisha-Manisha.mp3'
        },
        {
            title: 'Pottu Vaithu',
            artist:'Deva',
            album: 'Ninaithen Vandhai',
            duration: '5:36',
            cover:'https://i.pinimg.com/1200x/61/00/b4/6100b40eb05ec6533bb25053c99b3626.jpg',
            audio:'songs/Pottu-Vaithu.mp3'
        },
        {
            title: 'Un Marbil',
            artist:'Deva',
            album: 'Ninaithen Vandhai',
            duration: '5:36',
            cover:'https://i.pinimg.com/1200x/61/00/b4/6100b40eb05ec6533bb25053c99b3626.jpg',
            audio:'songs/Un-Marbil.mp3'
        },
        {
            title: 'Unnai Ninaithu naan',
            artist:'Deva',
            album: 'Ninaithen Vandhai',
            duration: '5:36',
            cover:'https://i.pinimg.com/1200x/61/00/b4/6100b40eb05ec6533bb25053c99b3626.jpg',
            audio:'songs/Unnai-Ninaithu-naan.mp3'
        },
        {
            title: 'Vanna Nilave',
            artist:'Deva',
            album: 'Ninaithen Vandhai',
            duration: '5:36',
            cover:'https://i.pinimg.com/1200x/61/00/b4/6100b40eb05ec6533bb25053c99b3626.jpg',
            audio:'songs/Vanna-Nilave.mp3'
        },
        {
            title: 'Alli Alli',
            artist:'Deva',
            album: 'Arunachalam',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/6c/8a/dd/6c8add5c988496fbff91215b1f0c0162.jpg',
            audio:'songs/Alli-Alli.mp3'
        },
        {
            title: 'Athanda Ithanda',
            artist:'Deva',
            album: 'Arunachalam',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/6c/8a/dd/6c8add5c988496fbff91215b1f0c0162.jpg',
            audio:'songs/Athanda-Ithanda.mp3'
        },
        {
            title: 'Mathadu Mathadu',
            artist:'Deva',
            album: 'Arunachalam',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/6c/8a/dd/6c8add5c988496fbff91215b1f0c0162.jpg',
            audio:'songs/Mathadu-Mathadu.mp3'
        },
        {
            title: 'Nagumo',
            artist:'Deva',
            album: 'Arunachalam',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/6c/8a/dd/6c8add5c988496fbff91215b1f0c0162.jpg',
            audio:'songs/Nagumo.mp3'
        },
        {
            title: 'Singam Ondru',
            artist:'Deva',
            album: 'Arunachalam',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/6c/8a/dd/6c8add5c988496fbff91215b1f0c0162.jpg',
            audio:'songs/Singam-Ondru.mp3'
        },
        {
            title: 'Thalai Magane',
            artist:'Deva',
            album: 'Arunachalam',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/6c/8a/dd/6c8add5c988496fbff91215b1f0c0162.jpg',
            audio:'songs/Thalai-Magane.mp3'
        },
        {
            title: 'Thalai Magane Sad',
            artist:'Deva',
            album: 'Arunachalam',
            duration: '5:36',
            cover:'https://i.pinimg.com/736x/6c/8a/dd/6c8add5c988496fbff91215b1f0c0162.jpg',
            audio:'songs/Thalai-Magane-Sad.mp3'
        }
    ],
    'ilaiyaraja': [
        {
            title: 'Sandhana Katrae',
            artist: 'Ilaiya Raj',
            album: 'Sandhana Katrae',
            duration: '3:45',
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Sandhana-Katrae.mp3'
        },
        {
            title: 'Sundari Neeyum',
            artist: 'Ilaiya Raj',
            album: 'Sundari-Neeyum',
            duration: '4:10',
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Sundari-Neeyum.mp3'
        
        },
        {
            title:'Thendral vandhu Ennai Thodum',
            artist: 'Ilaiya Raj',
            album: 'Thendral vandhu Ennai Thodum',
            duration: '3:55',
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Thendral-vandhu-Ennai-Thodum-Isaimini.mp3'
        },
        {
            title:'Pothi Vacha Malliga Mottu',
            artist: 'Ilaiya Raj',
            album: 'Pothi Vacha Malliga Mottu',
            duration: '4:05',
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Pothi-Vacha-Malliga-Mottu.mp3'
        },
        {
            title:'Putham Puthu',
            artist: 'Ilaiya Raj',
            album: 'Putham Puthu',
            duration: '4:20',
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Putham-Puthu.mp3'
        },
        {
            title:'Puthiya-Poovithu-Poothathu',
            artist: 'Ilaiya Raj',
            album: 'Puthiya-Poovithu-Poothathu',
            duration: '3:50', 
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Puthiya-Poovithu-Poothathu.mp3'
           },
           {
            title:'Sandhana-Katrae',
            artist: 'Ilaiya Raj',
            album: 'Sandhana-Katrae',
            duration: '4:15',
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Sandhana-Katrae.mp3'
           },
           {
            title:'Sundari-Neeyum',
            artist: 'Ilaiya Raj',
            album: 'Sundari-Neeyum',
            duration: '3:30',
            cover: 'https://i.pinimg.com/1200x/99/c9/cc/99c9ccbf594b8f64ec3892aac165b71f.jpg',
            audio: 'songs/Sundari-Neeyum.mp3'
           }
    ],
    'yuvan': [
        {  
            title:'Adada Mazhaida',
            artist:'Yuvan',
            album:'Paiya',
            duration:'3:45',
            cover:'https://i.pinimg.com/1200x/91/3a/65/913a65a83166ba3af32e3ab5b7b0a6e4.jpg',
            audio:'songs/Adada_Mazhaida.mp3'
        },
        {
            title: 'En Kadhal Solla',
            artist: 'Yuvan',
            album: 'Paiya',
            duration: '4:10',
            cover: 'https://i.pinimg.com/1200x/91/3a/65/913a65a83166ba3af32e3ab5b7b0a6e4.jpg',
            audio: 'songs/En_Kadhal_Solla.mp3'
        },
        {
            title:'Poongatre Poongatre',
            artist:'Yuvan',
            album:'Paiya',
            duration:'3:55',
            cover:'https://i.pinimg.com/1200x/91/3a/65/913a65a83166ba3af32e3ab5b7b0a6e4.jpg',   
            audio:'songs/Poongatre_Poongatre.mp3'
        },
        {
            title: 'Suthuthe Suthuthe Bhoomi',
            artist: 'Yuvan',
            album: 'Paiya',
            duration: '4:05',
            cover: 'https://i.pinimg.com/1200x/91/3a/65/913a65a83166ba3af32e3ab5b7b0a6e4.jpg',
            audio: 'songs/Suthuthe_Suthuthe_Bhoomi.mp3'
        },
        {
            title:'Thuli Thuli Mazhaiyaai',
            artist:'Yuvan',
            album:'Paiya',
            duration:'4:20',
            cover:'https://i.pinimg.com/1200x/91/3a/65/913a65a83166ba3af32e3ab5b7b0a6e4.jpg',
            audio:'songs/Thuli_Thuli_Mazhaiyaai.mp3'
        },
        {
            title:'Yedho Ondru Ennai Thakka',
            artist:'Yuvan',
            album:'Paiya',
            duration:'3:50',
            cover:'https://i.pinimg.com/1200x/91/3a/65/913a65a83166ba3af32e3ab5b7b0a6e4.jpg',
            audio:'songs/Yedho_Ondru_Ennai_Thakka.mp3'
        }
    ],
    'ARR': [
       
         {
            title: 'Nenichapadi',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Nenichapadi.mp3'
        }, 
        {
            title: 'Roja-Roja',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Roja-Roja.mp3'
        },
        {
            title: 'Enna Vilai',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Enna-Vilai.mp3'
        },
        {
            title: 'Kaathalenum',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Kaathalenum.mp3'
        },
        {
            title: 'Dhandiya',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Dhandiya.mp3' 
        },
        {
            title: 'Oh-Maria-Oh-Maria',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Oh-Maria-Oh-Maria.mp3' 
        },
        {
            title: 'Alaipayuthey-Kanna',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Alaipayuthey-Kanna.mp3' 
        },
        {
            title: 'Endrendrum-Punnagai',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Endrendrum-Punnagai.mp3' 
        },
        {
            title: 'Evano-Oruvan-Vasikiran',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Evano-Oruvan-Vasikiran.mp3' 
        },
        {
            title: 'Kadhal-Sadugudu',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Kadhal-Sadugudu.mp3' 
        },
        {
            title: 'Pachchai-Nirame',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Pachchai-Nirame.mp3' 
        },
        {
            title: 'September-Madham',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/September-Madham.mp3' 
        },
        {
            title: 'Snehidhane',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Snehidhane.mp3' 
        },
        {
            title: 'Yaro-Yarodi',
            artist: 'ARR',
            album: 'Alaipayuthey',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Yaro-Yarodi.mp3' 
        },
        {
            title: 'Chinna-Chinna-Asai',
            artist: 'ARR',
            album: 'Roja',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Chinna-Chinna-Asai.mp3' 
        },
        {
            title: 'Kadhal-Rojave',
            artist: 'ARR',
            album: 'Roja',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Kadhal-Rojave.mp3' 
        },
        {
            title: 'Pudhu-Vellai-Mazhai',
            artist: 'ARR',
            album: 'Roja',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Pudhu-Vellai-Mazhai.mp3' 
        },
        {
            title: 'Rukkumani-Rukkumani',
            artist: 'ARR',
            album: 'Roja',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/d0/a2/60/d0a2608e3ccd6487a4ade9409adc45c3.jpg',
            audio: 'songs/Rukkumani-Rukkumani.mp3' 
        },
        {
            title: 'Thamizha-Thamizha',
            artist: 'ARR',
            album: 'Roja',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Thamizha-Thamizha.mp3' 
        },
        {
            title: 'Ale-Ale',
            artist: 'ARR',
            album: 'Boys',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Ale-Ale.mp3' 
        },
        {
            title: 'Boom-Boom',
            artist: 'ARR',
            album: 'Boys',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Boom-Boom.mp3' 
        },
        {
            title: 'Break-The-Rules',
            artist: 'ARR',
            album: 'Boys',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Break-The-Rules.mp3' 
        },
        {
            title: 'Dating',
            artist: 'ARR',
            album: 'Boys',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Dating.mp3' 
        },
        {
            title: 'Girlfriend',
            artist: 'ARR',
            album: 'Boys',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Girlfriend.mp3' 
        },
        {
            title: 'Please-Sir',
            artist: 'ARR',
            album: 'Boys',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Please-Sir.mp3' 
        },
        {
            title: 'Secret-Of-Succes',
            artist: 'ARR',
            album: 'Boys',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/52/92/07/529207df7c4bc295b64ff00c1a09a38d.jpg',
            audio: 'songs/Secret-Of-Succes.mp3' 
        },
        {
            title: 'Bhoomi Bhoomi',
            artist: 'ARR',
            album: 'Chekka Chivantha Vaanam',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/6c/2a/5f/6c2a5f22394fd05ea33b35f995bd73db.jpg',
            audio: 'songs/Bhoomi-Bhoomi-MassTamilan.com.mp3' 
        },
        {
            title: 'Hayati',
            artist: 'ARR',
            album: 'Chekka Chivantha Vaanam',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/6c/2a/5f/6c2a5f22394fd05ea33b35f995bd73db.jpg',
            audio: 'songs/Hayati-MassTamilan.com.mp3' 
        },
        {
            title: 'Kalla Kalavaani',
            artist: 'ARR',
            album: 'Chekka Chivantha Vaanam',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/6c/2a/5f/6c2a5f22394fd05ea33b35f995bd73db.jpg',
            audio: 'songs/Kalla-Kalavaani-MassTamilan.com.mp3' 
        },
        {
            title: 'Madura Marikozhundhae',
            artist: 'ARR',
            album: 'Chekka Chivantha Vaanam',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/6c/2a/5f/6c2a5f22394fd05ea33b35f995bd73db.jpg',
            audio: 'songs/Madura-Marikozhundhae-MassTamilan.com.mp3' 
        },
        {
            title: 'Mazhai Kuruvi',
            artist: 'ARR',
            album: 'Chekka Chivantha Vaanam',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/6c/2a/5f/6c2a5f22394fd05ea33b35f995bd73db.jpg',
            audio: 'songs/Mazhai-Kuruvi-MassTamilan.com.mp3' 
        },
        {
            title: 'Praaptham',
            artist: 'ARR',
            album: 'Chekka Chivantha Vaanam',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/6c/2a/5f/6c2a5f22394fd05ea33b35f995bd73db.jpg',
            audio: 'songs/Praaptham-MassTamilan.com.mp3' 
        },
        {
            title: 'Sevandhu Pochu Nenju',
            artist: 'ARR',
            album: 'Chekka Chivantha Vaanam',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/6c/2a/5f/6c2a5f22394fd05ea33b35f995bd73db.jpg',
            audio: 'songs/Sevandhu-Pochu-Nenju-MassTamilan.com.mp3' 
        },
        {
            title: 'Adi Manja Kilange',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Adi-Manja-Kilange.mp3' 
        },
        {
            title: 'Chotta Chotta Nanayuthu',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Chotta-Chotta-Nanayuthu.mp3' 
        },
        {
            title: 'Eechi-Elemichhi',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Eechi-Elemichhi.mp3' 
        },
        {
            title: 'Karisal-tharisal',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Karisal-tharisal.mp3' 
        },
        {
            title: 'Kizhakke Nandavanam',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Kizhakke-Nandavanam.mp3' 
        },
        {
            title: 'Kulirudhu-Kulirudhu',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Kulirudhu-Kulirudhu.mp3' 
        },
        {
            title: 'Sengatrae',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Sengatrae.mp3' 
        },
        {
            title: 'Sotta Sotta',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Sotta-Sotta.mp3' 
        },
        {
            title: 'Thirupachi Aruvale',
            artist: 'ARR',
            album: 'Taj Mahal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/5d/c1/7d/5dc17de790161f48a96b809d272f318e.jpg',
            audio: 'songs/Thirupachi-Aruvale.mp3' 
        },
        {
            title: 'Aila Aila',
            artist: 'ARR',
            album: 'I',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/d3/45/dc/d345dc061cd557935a8f292fa4a5653c.jpg',
            audio: 'songs/Aila-Aila.mp3' 
        },
        {
            title: 'Ennodu Nee Irundhal',
            artist: 'ARR',
            album: 'I',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/d3/45/dc/d345dc061cd557935a8f292fa4a5653c.jpg',
            audio: 'songs/Ennodu-Nee-Irundhal.mp3' 
        },
        {
            title: 'Ladio',
            artist: 'ARR',
            album: 'I',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/d3/45/dc/d345dc061cd557935a8f292fa4a5653c.jpg',
            audio: 'songs/Ladio.mp3' 
        },
        {
            title: 'Mersalayitten',
            artist: 'ARR',
            album: 'I',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/d3/45/dc/d345dc061cd557935a8f292fa4a5653c.jpg',
            audio: 'songs/Mersalayitten.mp3' 
        },
        {
            title: 'Pookkale-Satru',
            artist: 'ARR',
            album: 'I',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/d3/45/dc/d345dc061cd557935a8f292fa4a5653c.jpg',
            audio: 'songs/Pookkale-Satru.mp3' 
        },
        {
            title: 'Ennavale Adi Ennavale',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Ennavale-Adi-Ennavale.mp3' 
        },
        {
            title: 'Erani Kuradhani',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Erani-Kuradhani-MassTamilan.dev.mp3' 
        },
        {
            title: 'Indiraiyo Ival Sundariyo',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Indiraiyo-Ival-Sundariyo-MassTamilan.dev.mp3' 
        },
        {
            title: 'Kaatru Kuthirayile',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Kaatru-Kuthirayile-MassTamilan.dev.mp3' 
        },
        {
            title: 'Kadhalikum Pennin',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Kadhalikum-Pennin-MassTamilan.dev.mp3' 
        },
        {
            title: 'Kollayile Thennai',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Kollayile-Thennai-MassTamilan.dev.mp3' 
        },
        {
            title: 'Mukkala Mukkabala',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Mukkala-Mukkabala-MassTamilan.dev.mp3' 
        },
        {
            title: 'Pettai Rap',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Pettai-Rap-MassTamilan.dev.mp3' 
        },
        {
            title: 'Urvashi Urvashi',
            artist: 'ARR',
            album: 'Kadhalan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/1a/eb/77/1aeb77b6cf8d71613c859b9122ec0ce5.jpg',
            audio: 'songs/Urvashi-Urvashi-MassTamilan.dev.mp3' 
        },
        {
            title: 'En Uyire',
            artist: 'ARR',
            album: 'Uyire',
            duration: '5:00',
            cover:'https://m.media-amazon.com/images/I/81JQ+w6mgGL._RI_.jpg',
            audio: 'songs/En-Uyire.mp3' 
        },
        {
            title: 'Nenjinile-Nenjinile',
            artist: 'ARR',
            album: 'Uyire',
            duration: '5:00',
            cover:'https://m.media-amazon.com/images/I/81JQ+w6mgGL._RI_.jpg',
            audio: 'songs/Nenjinile-Nenjinile.mp3' 
        },
        {
            title: 'Poongkaatrilae',
            artist: 'ARR',
            album: 'Uyire',
            duration: '5:00',
            cover:'https://m.media-amazon.com/images/I/81JQ+w6mgGL._RI_.jpg',
            audio: 'songs/Poongkaatrilae.mp3' 
        },
        {
            title: 'Sandhosa Kanneere',
            artist: 'ARR',
            album: 'Uyire',
            duration: '5:00',
            cover:'https://m.media-amazon.com/images/I/81JQ+w6mgGL._RI_.jpg',
            audio: 'songs/Sandhosa-Kanneere.mp3' 
        },
        {
            title: 'Thaiyya Thaiyya',
            artist: 'ARR',
            album: 'Uyire',
            duration: '5:00',
            cover:'https://m.media-amazon.com/images/I/81JQ+w6mgGL._RI_.jpg',
            audio: 'songs/Thaiyya-Thaiyya.mp3' 
        },
        {
            title: 'Aararo',
            artist: 'ARR',
            album: '24',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9a/34/f7/9a34f7b1ac512cbf6368b23e9a80def3.jpg',
            audio: 'songs/Aararo.mp3' 
        },
        {
            title: 'Kaalam Yen Kadhali',
            artist: 'ARR',
            album: '24',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9a/34/f7/9a34f7b1ac512cbf6368b23e9a80def3.jpg',
            audio: 'songs/Kaalam-Yen-Kadhali.mp3' 
        },
        {
            title: 'Mei Nigara',
            artist: 'ARR',
            album: '24',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9a/34/f7/9a34f7b1ac512cbf6368b23e9a80def3.jpg',
            audio: 'songs/Mei-Nigara.mp3' 
        },
        {
            title: 'My Twin Brother',
            artist: 'ARR',
            album: '24',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9a/34/f7/9a34f7b1ac512cbf6368b23e9a80def3.jpg',
            audio: 'songs/My-Twin-Brother.mp3' 
        },
        {
            title: 'Naan Un',
            artist: 'ARR',
            album: '24',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9a/34/f7/9a34f7b1ac512cbf6368b23e9a80def3.jpg',
            audio: 'songs/Naan-Un.mp3' 
        },
        {
            title: 'Punnagaiye',
            artist: 'ARR',
            album: '24',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9a/34/f7/9a34f7b1ac512cbf6368b23e9a80def3.jpg',
            audio: 'songs/Punnagaiye.mp3' 
        },
        {
            title: 'Anjathe Jeeva',
            artist: 'ARR',
            album: 'Jodi',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/45/c3/91/45c391211ed5210d00438dae2df65c99.jpg',
            audio: 'songs/Anjathe-Jeeva.mp3' 
        },
        {
            title: 'Kadhal Kaditham',
            artist: 'ARR',
            album: 'Jodi',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/45/c3/91/45c391211ed5210d00438dae2df65c99.jpg',
            audio: 'songs/Kadhal-Kaditham.mp3' 
        },
        {
            title: 'Kai Thatti Thatti',
            artist: 'ARR',
            album: 'Jodi',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/45/c3/91/45c391211ed5210d00438dae2df65c99.jpg',
            audio: 'songs/Kai-Thatti-Thatti.mp3' 
        },
        {
            title: 'Mel Nattu Isai',
            artist: 'ARR',
            album: 'Jodi',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/45/c3/91/45c391211ed5210d00438dae2df65c99.jpg',
            audio: 'songs/Mel-Nattu-Isai.mp3' 
        },
        {
            title: 'Oru Poiyavathu',
            artist: 'ARR',
            album: 'Jodi',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/45/c3/91/45c391211ed5210d00438dae2df65c99.jpg',
            audio: 'songs/Oru-Poiyavathu.mp3' 
        },
        {
            title: 'Vanna Poonkavai',
            artist: 'ARR',
            album: 'Jodi',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/45/c3/91/45c391211ed5210d00438dae2df65c99.jpg',
            audio: 'songs/Vanna-Poonkavai.mp3' 
        },
        {
            title: 'Velli Malare',
            artist: 'ARR',
            album: 'Jodi',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/45/c3/91/45c391211ed5210d00438dae2df65c99.jpg',
            audio: 'songs/Velli-Malare.mp3' 
        },
        {
            title: 'Anbendra',
            artist: 'ARR',
            album: 'minsara kanavu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/40/9f/ab/409fabc5869cde849521f2a0c1fd8965.jpg',
            audio: 'songs/Anbendra.mp3' 
        },
        {
            title: 'Manna Madurai',
            artist: 'ARR',
            album: 'minsara kanavu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/40/9f/ab/409fabc5869cde849521f2a0c1fd8965.jpg',
            audio: 'songs/Manna-Madurai.mp3' 
        },
        {
            title: 'Poo Pookum Osai',
            artist: 'ARR',
            album: 'minsara kanavu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/40/9f/ab/409fabc5869cde849521f2a0c1fd8965.jpg',
            audio: 'songs/Poo-Pookum-Osai.mp3' 
        },
        {
            title: 'Strawberry Kannae',
            artist: 'ARR',
            album: 'minsara kanavu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/40/9f/ab/409fabc5869cde849521f2a0c1fd8965.jpg',
            audio: 'songs/Strawberry-Kannae.mp3' 
        },
        {
            title: 'Thanga Thamarai',
            artist: 'ARR',
            album: 'minsara kanavu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/40/9f/ab/409fabc5869cde849521f2a0c1fd8965.jpg',
            audio: 'songs/Thanga-Thamarai.mp3' 
        },
        {
            title: 'Vennilavae',
            artist: 'ARR',
            album: 'minsara kanavu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/40/9f/ab/409fabc5869cde849521f2a0c1fd8965.jpg',
            audio: 'songs/Vennilavae.mp3' 
        },
        {
            title: 'Yen Azhagu Enna',
            artist: 'ARR',
            album: 'minsara kanavu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/40/9f/ab/409fabc5869cde849521f2a0c1fd8965.jpg',
            audio: 'songs/Yen-Azhagu-Enna.mp3' 
        },
        {
            title: 'Adiye(from:kadal)',
            artist: 'ARR',
            album: 'Kadal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/55/27/65/552765f264ee4cdfd5f8ad065663a088.jpg',
            audio: 'songs/Adiye.mp3' 
        },
        {
            title: 'Anbin Vasale',
            artist: 'ARR',
            album: 'Kadal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/55/27/65/552765f264ee4cdfd5f8ad065663a088.jpg',
            audio: 'songs/Anbin-Vasale.mp3' 
        },
        {
            title: 'Chithirai Nela',
            artist: 'ARR',
            album: 'Kadal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/55/27/65/552765f264ee4cdfd5f8ad065663a088.jpg',
            audio: 'songs/Chithirai-Nela.mp3' 
        },
        {
            title: 'Elay Keechan',
            artist: 'ARR',
            album: 'Kadal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/55/27/65/552765f264ee4cdfd5f8ad065663a088.jpg',
            audio: 'songs/Elay-Keechan.mp3' 
        },
        {
            title: 'Magudi Magudi',
            artist: 'ARR',
            album: 'Kadal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/55/27/65/552765f264ee4cdfd5f8ad065663a088.jpg',
            audio: 'songs/Magudi-Magudi.mp3' 
        },
        {
            title: 'Moongil Thottam',
            artist: 'ARR',
            album: 'Kadal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/55/27/65/552765f264ee4cdfd5f8ad065663a088.jpg',
            audio: 'songs/Moongil-Thottam.mp3' 
        },
        {
            title: 'Nenjukkule',
            artist: 'ARR',
            album: 'Kadal',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/55/27/65/552765f264ee4cdfd5f8ad065663a088.jpg',
            audio: 'songs/Nenjukkule.mp3' 
        },
        {
            title: 'Kaattu Sirukki',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Kaattu-Sirukki.mp3' 
        },
        {
            title: 'Kalvare Kalvare',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Kalvare-Kalvare.mp3' 
        },
        {
            title: 'Kattu Sirukki Slow Version',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Kattu-Sirukki-Slow-Version.mp3' 
        },
        {
            title: 'Keda Keda Kari',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Keda-Keda-Kari.mp3' 
        },
        {
            title: 'Kodu Poatta',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Kodu-Poatta.mp3' 
        },
        {
            title: 'Naan Varuven',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Naan-Varuven.mp3' 
        },
        {
            title: 'Usurae Poguthey',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Usurae-Poguthey.mp3' 
        },
        {
            title: 'Veera Veera',
            artist: 'ARR',
            album: 'Raavanan',
            duration: '5:00',
            cover:'https://i.pinimg.com/1200x/9d/f1/e2/9df1e2d373acca3d900efdf776fe4daa.jpg',
            audio: 'songs/Veera-Veera.mp3' 
        },
        {
            title: 'Kokku Saiva Kokku',
            artist: 'ARR',
            album: 'Muthu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/c9/54/3d/c9543d80eb2d804df76e81e9ec347b36.jpg',
            audio: 'songs/Kokku-Saiva-Kokku.mp3' 
        },
        {
            title: 'Kuluvalile Mottu',
            artist: 'ARR',
            album: 'Muthu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/c9/54/3d/c9543d80eb2d804df76e81e9ec347b36.jpg',
            audio: 'songs/Kuluvalile-Mottu.mp3' 
        },
        {
            title: 'Muthu Theme',
            artist: 'ARR',
            album: 'Muthu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/c9/54/3d/c9543d80eb2d804df76e81e9ec347b36.jpg',
            audio: 'songs/Muthu-Theme-Music.mp3' 
        },
        {
            title: 'Oruvan Oruvan Mudhalali',
            artist: 'ARR',
            album: 'Muthu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/c9/54/3d/c9543d80eb2d804df76e81e9ec347b36.jpg',
            audio: 'songs/Oruvan-Oruvan-Mudhalali.mp3' 
        },
        {
            title: 'Thillana Thillana',
            artist: 'ARR',
            album: 'Muthu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/c9/54/3d/c9543d80eb2d804df76e81e9ec347b36.jpg',
            audio: 'songs/Thillana-Thillana.mp3' 
        },
        {
            title: 'Vidukathaiya Intha Vazhkai',
            artist: 'ARR',
            album: 'Muthu',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/c9/54/3d/c9543d80eb2d804df76e81e9ec347b36.jpg',
            audio: 'songs/Vidukathaiya-Intha-Vazhkai.mp3' 
        },
        {
            title: 'Athiradee Kaalam',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/Athiradee-Kaalam.mp3' 
        },
        {
            title: 'Balleilakka',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/Kaaveri-AarumBalleilakka.mp3' 
        },
        {
            title: 'Sahana',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/Sahana-II---Melody.mp3' 
        },
        {
            title: 'Sahana Saral Thoo',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/Sahana-Saral-Thoo.mp3' 
        },
        {
            title: 'Sivaji Theme',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/Sivaji-Theme.mp3' 
        },
        {
            title: 'Style Thee Thee',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/Style---Thee-Thee.mp3' 
        },
        {
            title: 'The-Boss Theme',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/The-Boss---Theme-Music.mp3' 
        },
        {
            title: 'Vaaji Vaaji En Sivaji',
            artist: 'ARR',
            album: 'Sivaji',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/aa/48/7a/aa487ab9da796d94971cd46578fb76f4.jpg',
            audio: 'songs/Vaaji-Vaaji-En-Sivaji.mp3' 
        },
        {
            title: 'Ambikapathy',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Ambikapathy.mp3' 
        },
        {
            title: 'Kalaarasiga',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Kalaarasiga.mp3' 
        },
        {
            title: 'Kanaave Kanaave',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Kanaave-Kanaave.mp3' 
        },
        {
            title: 'Oliyaaga Vandhaai',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Oliyaaga-Vandhaai.mp3' 
        },
        {
            title: 'Paarkaadhey Oru Madhiri',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Paarkaadhey-Oru-Madhiri.mp3' 
        },
        {
            title: 'Parakka Seivaai',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Parakka-Seivaai.mp3' 
        },
        {
            title: 'Solvadhai Seidhu Mudippom',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Solvadhai-Seidhu-Mudippom.mp3' 
        },
        {
            title: 'The Land Of Shiva',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/The-Land-Of-Shiva.mp3' 
        },
        {
            title: 'Unnaal Unnaal',
            artist: 'ARR',
            album: 'Ambikapathy',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/29/28/ff/2928ff02915e5caa27a14725aba22e9a.jpg',
            audio: 'songs/Unnaal-Unnaal.mp3' 
        },
        {
            title: 'Unnaal Unnaal',
            artist: 'ARR',
            album: 'Rhythm',
            duration: '5:00',
            cover:'https://i.pinimg.com/736x/4a/f7/25/4af725367dcd2f6ad949e6958070c4a9.jpg',
            audio: 'songs/Unnaal-Unnaal.mp3' 
        }
    ],
    'aniruth' : [
        {
            title: 'Aathi',
            artist: 'Aniruth Ravichantiran',
            album: 'Kathi',
            duration: '0:00',
            cover: 'https://i.pinimg.com/736x/8a/53/21/8a5321190e2b20111bd7a5794bee9ba0.jpg',
            audio: 'songs/Aathi.mp3'
        },
        {
            title: 'Selfie Pulla',
            artist: 'Aniruth Ravichantiran',
            album: 'Kathi',
            duration: '0:00',
            cover: 'https://i.pinimg.com/736x/8a/53/21/8a5321190e2b20111bd7a5794bee9ba0.jpg',
            audio: 'songs/Selfie Pulla.mp3'
        },
        {
            title: 'Pakkam Vanthu',
            artist: 'Aniruth Ravichantiran',
            album: 'Kathi',
            duration: '0:00',
            cover: 'https://i.pinimg.com/736x/8a/53/21/8a5321190e2b20111bd7a5794bee9ba0.jpg',
            audio: 'songs/Pakkam Vanthu.mp3'
        },
        {
            title: 'Paalam',
            artist: 'Aniruth Ravichantiran',
            album: 'Kathi',
            duration: '0:00',
            cover: 'https://i.pinimg.com/736x/8a/53/21/8a5321190e2b20111bd7a5794bee9ba0.jpg',
            audio: 'songs/Paalam.mp3'
        },
        {
            title: 'Nee Yaaro',
            artist: 'Aniruth Ravichantiran',
            album: 'Kathi',
            duration: '0:00',
            cover: 'https://i.pinimg.com/736x/8a/53/21/8a5321190e2b20111bd7a5794bee9ba0.jpg',
            audio: 'songs/Nee Yaaro.mp3'
        },
        {
            title: 'Kaththi Theme The Sword of Destiny',
            artist: 'Aniruth Ravichantiran',
            album: 'Kathi',
            duration: '0:00',
            cover: 'https://i.pinimg.com/736x/8a/53/21/8a5321190e2b20111bd7a5794bee9ba0.jpg',
            audio: 'songs/Kaththi Theme The Sword of Destiny.mp3'
        },
        {
            title: 'Bad Eyes Villain Theme',
            artist: 'Aniruth Ravichantiran',
            album: 'Kathi',
            duration: '0:00',
            cover: 'https://i.pinimg.com/736x/8a/53/21/8a5321190e2b20111bd7a5794bee9ba0.jpg',
            audio: 'songs/Bad Eyes Villain Theme.mp3'
        },
    ],
    'unnikrishnan': [
        {
            title: 'Roja-Roja',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Roja-Roja.mp3'  
        }
    ],
    'unnimenan' : [
        {
            title: 'Enna Vilai',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Enna-Vilai.mp3'
        },
        {
            title: 'Dhandiya',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Dhandiya.mp3' 
        }
    ],
    'SPB': [
        {
            title: 'Kaathalenum',
            artist: 'ARR',
            album: 'Kadhalar dhinam',
            duration: '5:00',
            cover:'https://th.bing.com/th/id/OIP.uUhOuVSsG-vOiVinbLb52wHaJ4?w=132&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
            audio: 'songs/Kaathalenum.mp3'
        }
    ]
};


// Sample playlists
const samplePlaylists = [
    {
        id: 'favorites',
        name: 'My Favorites',
        icon: 'fas fa-heart'
    },
    {
        id: 'tamil_hits',
        name: 'Tamil Hits',
        icon: 'fas fa-bolt'
    },
    {
        id: 'workout',
        name: 'Workout Mix',
        icon: 'fas fa-running'
    },
    {
        id: 'chill',
        name: 'Chill Vibes',
        icon: 'fas fa-coffee'
    },
    {
        id: 'party',
        name: 'Party Time',
        icon: 'fas fa-glass-cheers'
    },
    {
        id: 'old_is_gold',
        name: 'Old is Gold',
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
    document.getElementById('ilaiyaraja').onclick = () => showArtistSongs('ilaiyaraja');
    document.getElementById('yuvan').onclick = () => showArtistSongs('yuvan');
    document.getElementById('ARR').onclick = () => showArtistSongs('ARR');
    document.getElementById('unnikrishnan').onclick = () => showArtistSongs('unnikrishnan');
    document.getElementById('unnimenan').onclick = () => showArtistSongs('unnimenan');
    document.getElementById('SPB').onclick = () => showArtistSongs('SPB');
    document.getElementById('aniruth').onclick = () => showArtistSongs('aniruth');

    


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

// HELPER FUNCTION: Get songs based on context (Artist ID or 'liked_songs')
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
}

function getArtistName(artistId) {
    const names = {
        'hiphopadhi': 'Hiphop Adhi',
        'GVPrakash': 'GV Prakash',
        'vijayantony': 'Vijay Antony',
        'Deva': 'Deva',
        'yuvan': 'Yuvan',
        'aniruth': 'aniruth',
        'harris jayaraj': 'Harris Jayaraj',
        'D Imman': 'D Imman',
        'SPB': 'SPB',
        'ilaiyaraja':'ilaiyaraja',
        'ARR':'ARR',
        'unnikrishnan':'unnikrishnan',
        'unnimenan':'unnimenan'
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
    document.getElementById('autoPlay').checked = savedSettings.autoPlay !== false;
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
        
        // Use 'liked_songs' as the context ID
        li.onclick = () => {
            playSong('liked_songs', index);
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
    let songs;
    
    // If we are already shuffling the current context, keep using shuffled playlist
    if (shuffleMode && shuffledPlaylist.length && currentArtist === artistId) {
        songs = shuffledPlaylist;
    } else {
        songs = getContextSongs(artistId);
    }

    if (!songs || !songs[songIndex]) return;

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

    if (artistId === 'liked_songs') {
         const likedItems = document.querySelectorAll('#likedSongsList .song-item');
         if (likedItems[songIndex]) likedItems[songIndex].classList.add('active');
    } else {
        const activeSong = document.querySelector(`.song-item[data-artist="${artistId}"][data-index="${songIndex}"]`);
        if (activeSong) activeSong.classList.add('active');
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
             // Removing from liked songs while playing from liked songs context
             const fakeEvent = {
                 target: document.createElement('div'), // dummy
                 stopPropagation: () => { }
             };
             removeFromLiked(currentSong.title, currentSong.artist, fakeEvent);
        } else {
             // Normal toggle
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

// Make functions available globally
window.toggleLikeSong = toggleLikeSong;
window.removeFromLiked = removeFromLiked;
