let play = document.getElementById('play');
let progressBar = document.getElementById('progressBar');
let audio = new Audio('Audio/1.mp3');

let currentSong = 1;

play.addEventListener('click', () => {
    if (audio.paused || audio.currentTime == 0) {
        audio.play();
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
    } else {
        audio.pause();
        play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play');
    }
});

audio.addEventListener('timeupdate', () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
    progressBar.style.background = `linear-gradient(to right, #21a600ff ${progress}%, #333 ${progress}%)`;
})

progressBar.addEventListener('input', function () {
    let value = this.value;
    this.style.background = `linear-gradient(to right, #21a600ff ${value}%, #333 ${value}%)`;
    audio.currentTime = (progressBar.value * audio.duration) / 100;
});

let playMusic = Array.from(document.getElementsByClassName('playMusic'));

makeAllPlay = () => {
    playMusic.forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

playMusic.forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');

        index = parseInt(e.target.id);
        currentSong = index;
        audio.src = `Audio/${index}.mp3`;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    })
});

let allMusic = Array.from(document.getElementsByClassName('music-card'));

songs = [
        {songName:'Aaya Sher...',songDes:'-From Paradise movie.',songImage:'images/1.jpeg', songPath: 'Audio/1.mp3'},
        {songName:'Gaaju Bomma...',songDes:'-From Hi Nanna movie.',songImage:'images/2.jpeg', songPath: 'Audio/2.mp3'},
        {songName:'Samayamaa...',songDes:'-From Hi Nanna movie.',songImage:'images/3.jpeg', songPath: 'Audio/3.mp3'},
        {songName:'Adiga Adiga...',songDes:'-From Hi Nanna movie.',songImage:'images/4.jpeg', songPath: 'Audio/4.mp3'},
        {songName:'Ammadii...',songDes:'-From Hi Nanna movie.',songImage:'images/5.jpeg', songPath: 'Audio/5.mp3'},
        {songName:'Oo Chedhu nijam...',songDes:'-From Hi Nanna movie.',songImage:'images/6.jpeg', songPath: 'Audio/6.mp3'},
        {songName:'Odiyamma Heatu... ',songDes:'-From Hi Nanna movie.',songImage:'images/7.jpeg', songPath: 'Audio/7.mp3'},
        {songName:'Arere Yekkada...',songDes:'-From Nenu local movie.',songImage:'images/8.jpeg', songPath: 'Audio/8.mp3'},
        {songName:'Unnattu Gunde...',songDes:'-From Ninnu kori movie.',songImage:'images/9.jpeg', songPath: 'Audio/9.mp3'},
        {songName:'Manasu maare...',songDes:'-From V movie.',songImage:'images/10.jpeg', songPath: 'Audio/10.mp3'},
        {songName:'Kallumoosiii...',songDes:'-From Majnu movie.',songImage:'images/11.jpeg', songPath: 'Audio/11.mp3'},
        {songName:'Prema Velluva...',songDes:'-From Hit-3 movie.',songImage:'images/12.jpeg', songPath: 'Audio/12.mp3'},
        {songName:'Hello Hello...',songDes:'-From Bhale Bhale Magodivoy movie.',songImage:'images/13.jpeg', songPath: 'Audio/13.mp3'},
        {songName:'Champesave Nannu...',songDes:'-From Nenu local movie.',songImage:'images/14.jpeg', songPath: 'Audio/14.mp3'},
        {songName:'Chali gaali chuddhu... ',songDes:'-From Nani\'s Gentleman movie.',songImage:'images/15.jpeg', songPath: 'Audio/15.mp3'},
        {songName:'Mari Anthaga...',songDes:'-From Seethamma Vakitlo sirimalle chettu movie.',songImage:'images/16.jpeg', songPath: 'Audio/16.mp3'},
        {songName:'Gira Gira gingiragira...',songDes:'-From Champion movie.',songImage:'images/17.jpeg', songPath: 'Audio/17.mp3'},
        {songName:'Hello Rammante vachesindhi...',songDes:'-From Orange movie.',songImage:'images/18.jpeg', songPath: 'Audio/18.mp3'},
        {songName:'Meesala pilla...',songDes:'-From mana shankar varaprasadmovie.',songImage:'images/19.jpeg', songPath: 'Audio/19.mp3'},
        {songName:'Reddy Ikkada Sudu...',songDes:'-From Aravindh Sametha movie.',songImage:'images/20.jpeg', songPath: 'Audio/20.mp3'},
        {songName:'Sahana Sahanana...',songDes:'-From RaajaShab movie.',songImage:'images/21.jpeg', songPath: 'Audio/21.mp3'},
        {songName:'Monica My Dear Monica...',songDes:'-From Coolie movie.',songImage:'images/22.jpeg', songPath: 'Audio/22.mp3'},
        {songName:'Boom Boom...',songDes:'-From Dude movie.',songImage:'images/23.jpeg', songPath: 'Audio/23.mp3'},
        {songName:'Bhimavaram Bhalma...',songDes:'-From Anaganaga oka raju movie.',songImage:'images/24.jpeg', songPath: 'Audio/24.mp3'},
        {songName:'Ranu Bombai ki ranu...',songDes:'-From Private song.',songImage:'images/25.jpeg', songPath: 'Audio/25.mp3'},
        {songName:'Nuvvunte Chaalu...',songDes:'-From Andhra king movie.',songImage:'images/26.jpeg', songPath: 'Audio/26.mp3'},
        {songName:'Inthalo Yenni vinthalo...',songDes:'-From Karthikeya movie.',songImage:'images/27.jpeg', songPath: 'Audio/27.mp3'},
        {songName:'Aaraduguluntada...',songDes:'-From Seethamma vakitlo sirimalle chettu movie.',songImage:'images/28.jpeg', songPath: 'Audio/28.mp3'},
        {songName:'Gili giliga...',songDes:'-From Desamudhuru movie.',songImage:'images/29.jpeg', songPath: 'Audio/29.mp3'},
        {songName:'Nallanchu Thella cheera...',songDes:'-From Mr.Bhachan movie.',songImage:'images/30.jpeg', songPath: 'Audio/30.mp3'},
        {songName:'Chinni gundelo...',songDes:'-From Andhra king movie.',songImage:'images/31.jpeg', songPath: 'Audio/31.mp3'},
        {songName:'Hulala lalala...',songDes:'-From Express raja movie.',songImage:'images/32.jpeg', songPath: 'Audio/32.mp3'},
        {songName:'maate vinadhuga...',songDes:'-From Taxiwala movie.',songImage:'images/33.jpeg', songPath: 'Audio/33.mp3'},
        {songName:'Naayinodintikadaa...',songDes:'-From Bhramotsavam movie.',songImage:'images/34.jpeg', songPath: 'Audio/34.mp3'},
        {songName:'Jiya Jale...',songDes:'-From Loafer movie.',songImage:'images/35.jpeg', songPath: 'Audio/35.mp3'},
        {songName:'Inka Edhoo...',songDes:'-From Darling movie.',songImage:'images/36.jpeg', songPath: 'Audio/36.mp3'},
        {songName:'Junction lo...',songDes:'-From Aagadu movie.',songImage:'images/37.jpeg', songPath: 'Audio/37.mp3'},
        {songName:'Pranama Pranama...',songDes:'-From Darling movie.',songImage:'images/38.jpeg', songPath: 'Audio/38.mp3'},
        {songName:'Hey Idhi nenena...',songDes:'-From Solo Bhatuke so better movie.',songImage:'images/39.jpeg', songPath: 'Audio/39.mp3'},
        {songName:'Emannavooo...',songDes:'-From Nava Manmadhudu movie.',songImage:'images/40.jpeg', songPath: 'Audio/40.mp3'},
        {songName:'Nenu Nuvvantu...',songDes:'-From Orange movie.',songImage:'images/41.jpeg', songPath: 'Audio/41.mp3'},
        {songName:'Chilipiga Chutshav ala...',songDes:'-From Orange movie.',songImage:'images/42.jpeg', songPath: 'Audio/42.mp3'},
        {songName:'Rooba Rooba...',songDes:'-From Orange movie.',songImage:'images/43.jpeg', songPath: 'Audio/43.mp3'},
        {songName:'Neeve Neeve...',songDes:'-From Darling movie.',songImage:'images/44.jpeg', songPath: 'Audio/44.mp3'},
        {songName:'Gusa Gusa laade...',songDes:'-From Nani\'s Gentleman movie.',songImage:'images/45.jpeg', songPath: 'Audio/45.mp3'},
]

order = [...songs];

allMusic.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].songImage;
    element.getElementsByClassName('img-title')[0].innerText = songs[i].songName;
    element.getElementsByClassName('img-description')[0].innerText = songs[i].songDes;
});

let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');
let nowBar = document.querySelector('.now-bar');

let songOnRepeat = false;
let songOnShuffle = false;

function shuffleSongs (originalOrder) {
    order = [...originalOrder];
    for(i = order.length - 1; i > 0; i--){
        let j = Math.floor((Math.random) * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
}

shuffle.addEventListener('click', () => {
    if(!songOnShuffle) {
        songOnShuffle = true;
        songOnRepeat = false;
        shuffle.classList.add('active');
        repeat.classList.remove('active');
        
        updateNowBar();
        order = shuffleSongs(songs);
    } else {
        songOnShuffle = false;
        shuffle.classList.remove('active');
        
        order = songs;
    }
});

repeat.addEventListener('click', () => {
    if(!songOnRepeat) {
        songOnRepeat = true;
        songOnShuffle = false;
        repeat.classList.add('active');
        shuffle.classList.remove('active');
        updateNowBar();
    } else {
        songOnRepeat = false;
        repeat.classList.remove('active');
    }
})

playNextSong = () => {
    if(!songOnRepeat){
        let nextSong = (currentSong + 1) % playMusic.length;
        currentSong = nextSong == 0 ? 45 : nextSong;
    
        audio.src = order[currentSong-1].songPath;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    } else {
        audio.src = order[currentSong-1].songPath;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    }
}

playPrevSong = () => {
    if(!songOnRepeat){
        let prevSong = (currentSong - 1) % playMusic.length;
        currentSong = prevSong == 0 ? 45 : prevSong;
    
        audio.src = order[currentSong-1].songPath;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    } else {
        audio.src = order[currentSong-1].songPath;
        audio.currentTime = 0;
        audio.play();
        updateNowBar();
    }
}

function updateNowBar () {
    nowBar.getElementsByTagName('img')[0].src = order[currentSong-1].songImage;
    nowBar.getElementsByClassName('img-title-info')[0].innerText = order[currentSong-1].songName;
    nowBar.getElementsByClassName('img-des-info')[0].innerText = order[currentSong-1].songDes;
}

forward = document.getElementById('forward');
backward = document.getElementById('backward');

forward.addEventListener('click', () => {
    playNextSong();
})

audio.addEventListener('ended', () => {
    playNextSong();
})

backward.addEventListener('click', () => {
    playPrevSong();
});
