const bands = [
    {
        name: "The Beatles",
        image: "assets/images/thebeatles.jpg",
        bio: "The Beatles were an English rock band formed in Liverpool in 1960. The core lineup of the band comprised John Lennon, Paul McCartney, George Harrison and Ringo Starr.",
        song: "assets/audio/thebeatles.mp3"
    },
    {
        name: "Queen",
        image: "assets/images/queen.jpg",
        bio: "Queen are a British rock band formed in London in 1970 by Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), and Roger Taylor (drums, vocals), later joined by John Deacon (bass).",
        song: "assets/audio/queen.mp3"
    },
    {
        name: "Metallica",
        image: "assets/images/metallica.jpg",
        bio: "Metallica is an American heavy metal band. It was formed in Los Angeles in 1981 by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in San Francisco for most of its career.",
        song: "assets/audio/metallica.mp3"
    },
    {
        name: "The Rolling Stones",
        image: "assets/images/therollingstones.jpg",
        bio: "The Rolling Stones are an English rock band formed in London in 1962. Active for over six decades, they are one of the most popular, influential, and enduring bands of the rock era. In the early 1960s, the band pioneered the gritty, rhythmically driven sound that came to define hard rock.",
        song: "assets/audio/therollingstones.mp3"
    },
    {
        name: " Coldplay",
        image: "assets/images/coldplay.jpg ",
        bio: "Coldplay are a British rock band formed in London in 1997. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer and percussionist Will Champion, and manager Phil Harvey. ",
        song : "assets/audio/coldplay.mp3 "
    },
    {
        name: "BTS ",
        image: "assets/images/bts.jpg",
        bio : " BTS (Korean: 방탄소년단; RR: Bangtan Sonyeondan; lit. Bulletproof Boy Scouts), also known as the Bangtan Boys, is a South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jung Kook, who co-write or co-produce much of their material.",
        song : "assets/audio/bts.mp3 "
    },
    {
        name: "EXO ",
        image: "assets/images/exo.png",
        bio : " Exo (Korean: 엑소; RR: Ekso; stylized in all caps) is a South Korean-Chinese boy band based in Seoul formed by SM Entertainment in 2011 and debuted in 2012. The group consists of nine members: Xiumin, Suho, Lay, Baekhyun, Chen, Chanyeol, D.O., Kai and Sehun. They are noted for releasing music and performing extensively in Korean, Mandarin and Japanese.",
        song : "assets/audio/exo.mp3 "
    },
    {
        name: "Blackpink ",
        image: "assets/images/blackpink.png",
        bio : "Blackpink (Korean: 블랙핑크, stylized in all caps or as BLɅϽKPIИK) is a South Korean girl group formed by YG Entertainment. The group is composed of four members: Jisoo, Jennie, Rosé, and Lisa. Regarded by various publications as the 'biggest girl group in the world', they are recognized as a leading force in the Korean Wave and an ambassador of the 'girl crush' concept in K-pop, which explores themes of self-confidence and female empowerment. ",
        song : "assets/audio/blackpink.mp3 "
    },
    {
        name: "OneDirection ",
        image: "assets/images/onedirection.jpg",
        bio : "One Direction, often shortened to 1D, were an English–Irish pop boy band formed in London in 2010. The group consisted of Niall Horan, Liam Payne, Harry Styles, Louis Tomlinson and Zayn Malik (until his departure in 2015). The group sold over 70 million records worldwide, making them one of the best-selling boy bands of all time, before going on an indefinite hiatus in 2016. ",
        song : "assets/audio/onedirection.mp3 "
    } 
    
    // Add more bands here...
];

const bandsContainer = document.getElementById("bands-container");
const popper = document.getElementById("party-popper");
const stopGlobalBtn = document.getElementById("stop-global");

// Global audio player
let currentAudio = null;

bands.forEach(band => {
    const card = document.createElement("div");
    card.classList.add("band-card");
    card.innerHTML = `
        <img src="${band.image}" alt="${band.name}">
        <h3>${band.name}</h3>
        <p>${band.bio}</p>
        <button class="vote-btn">👍 Vote</button>
    `;

    const voteBtn = card.querySelector(".vote-btn");

    voteBtn.addEventListener("click", () => {
        playSong(band.song);
        showPartyPopper();
    });

    bandsContainer.appendChild(card);
});

function playSong(songPath) {
    stopSong(); // stop current before starting new
    currentAudio = new Audio(songPath);
    currentAudio.play();
}

function stopSong() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}

function showPartyPopper() {
    // Show animation
    popper.classList.remove("hidden");
    setTimeout(() => popper.classList.add("hidden"), 1500);

    // Play party & clapping sounds
    const partySound = new Audio("assets/audio/party.mp3");
    const clapSound = new Audio("assets/audio/clap.mp3");

    partySound.play();
    setTimeout(() => clapSound.play(), 500); // slight delay for realism
}

// Global stop button
stopGlobalBtn.addEventListener("click", stopSong);

// Keyboard shortcut (Esc key to stop song)
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        stopSong();
    }
});