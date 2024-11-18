var bcrypt = require('bcrypt');

//* Déclaration des classes

class Concert {
    constructor(id, date, location, artist, description, seats){
        this.id = id;
        this.date = date;
        this.location = location;
        this.artist = artist;
        this.description = description;
        this.seats = seats;
    }

}

class Reservation {
    constructor(id, status, dateReservation, idConcert, idUser){
        this.id = id;
        this.status = status;
        this.dateReservation = dateReservation;
        this.idConcert = idConcert;
        this.idUser = idUser;
    }
}

class User {
    constructor(id, pseudo, password, isAdmin){
        this.id = id;
        this.pseudo = pseudo;
        this.password = bcrypt.hashSync(password, 5);
        this.isAdmin = isAdmin;
    }
}

//* Définition des collections

const concerts = [
    new Concert(1,new Date(2023, 11, 15, 19, 0, 0),"Tokyo","Hatsune Miku","Concert holographique de Hatsune Miku, l'idol virtuelle emblématique du Japon.",25000),
    new Concert(
        2,
        new Date(2023,12,5,18,30,0),
        "Séoul",
        "K/DA",
        "Performance live de K/DA, le groupe de K-pop virtuel inspiré de League of Legends.",
        40000
    ),
    new Concert(
        3,
        new Date(2024,01,15,20,0,0),
        "Los Angeles",
        "A-SOUL",
        "Concert virtuel du célèbre groupe chinois de virtual idols, A-SOUL.",
        30000
    ),
    new Concert(
        4,
        new Date(2024,02,20,21,0,0),
        "New York",
        "Evelynn",
        "Spectacle immersif avec Evelynn, l'idol virtuelle de K/DA.",
        18000
    ),
    new Concert(
        5,
        new Date(2024,3,18,19,45,0),
        "Londres",
        "Vocaloid All Stars",
        "Une collaboration unique d'idols Vocaloid pour un concert à Londres.",
        22000
    ),
    new Concert(
        6,
        new Date(2024,4,12,20,30,0),
        "Paris",
        "Lil Miquela",
        "Lil Miquela, influenceuse virtuelle, en live à Paris.",
        15000
    ),
    new Concert(
        7,
        new Date(2024,5,20,19,15,0),
        "Berlin",
        "Kizuna AI",
        "La pionnière des YouTubeurs virtuels, Kizuna AI, en concert pour ses fans européens.",
        27000
    ),
    new Concert(
        8,
        new Date(2024,6,25,20,0,0),
        "Shanghai",
        "Luo Tianyi",
        "Concert en hologramme de Luo Tianyi, l'idol virtuelle populaire en Chine.",
        35000
    ),
    new Concert(
        9,
        new Date(2024,7,30,21,0,0),
        "Bangkok",
        "Yukari Yuzuki",
        "Yukari Yuzuki, la vocaloid japonaise, en performance live en Thaïlande.",
        20000
    ),
    new Concert(
        10,
        new Date(2024,8,15,18,0,0),
        "San Francisco",
        "Projekt Melody",
        "Projekt Melody, la star virtuelle de Twitch, en concert pour ses fans américains.",
        10000
    )
];

const reservations = [
    new Reservation(1, 'to_confirm', new Date(2023, 11, 15, 10, 0, 0), 1, null),
    new Reservation(2, 'confirmed', new Date(2023, 10, 16, 14, 30, 0), 2, null),
    new Reservation(3, 'canceled', new Date(2023, 10, 17, 18, 45, 0), 1, null),
    new Reservation(4, 'to_confirm', new Date(2023, 10, 18, 20, 15, 0), 3, null),
    new Reservation(5, 'confirmed', new Date(2023, 10, 19, 13, 0, 0), 2, null),
    new Reservation(6, 'to_confirm', new Date(2023, 10, 20, 16, 30, 0), 4, null),
    new Reservation(7, 'confirmed', new Date(2023, 10, 21, 19, 45, 0), 3, null),
    new Reservation(8, 'canceled', new Date(2023, 10, 22, 11, 0, 0), 4, null),
    new Reservation(9, 'to_confirm', new Date(2023, 10, 23, 15, 30, 0), 1, null),
    new Reservation(10, 'confirmed', new Date(2023, 10, 24, 17, 15, 0), 2, null)
  ];
  
const users = [
    new User(1, "WolfieTailuWu", "a", false),
    new User(2, "FoxPawsOwO", "a", true),
    new User(3, "TigerStripe >w<", "a", false),
    new User(4, "DragonClaw~nya", "a", true),
    new User(5, "CoyoteWhisperuwu~", "a", false),
    new User(6, "BunnyEars-.-", "a", false),
    new User(7, "LionRoar~baka!", "a", false),
    new User(8, "PantherShadowOwO", "a", true),
    new User(9, "BearHugs>_<", "a", false),
    new User(10, "OtterSplashuwu", "a", false)
];

//* Export des collections
module.exports = {concerts, users, reservations};