import {v4 as uuidv4 } from "uuid";

function chillHop() {
    return [
        {
            name: "Cruising",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            artist: "Evil Needle",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
            color: ["#EB4A4B", "#5C5250"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Dive",
            cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
            artist: "Evil Needle, Venuz Beats",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=17089",
            color: ["#EB4A4B", "#5C5250"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Soul Samba",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            artist: "Screen Jazzmaster, Zmeyev",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16063",
            color: ["#3DBBA3", "#E64732"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Nebulae",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg",
            artist: "Cocabona",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=16071",
            color: ["#3DBBA3", "#E64732"],
            id: uuidv4(),
            active: false
        },
        {
            name: "On The Moon",
            cover: "https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg",
            artist: "SwuM",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=15237",
            color: ["#2B3434", "#8E4D2A"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Cascade",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
            artist: "Knowmadic",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13092",
            color: ["#84BEA1", "#615279"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Small Town Palm Trees",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            artist: "Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12124",
            color: ["#0C2224", "#422016"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default chillHop;