
/*
AI used as a knowledge base. Asked questions:
*Hoe formateer ik een file path in een value van een JS object
*Is een array met 40 object een goed idee?
*comment in js
*document.addEventListener("DOMContentLoaded", () => {} hoe werkt dit

Non AI sources
*W3schools
*https://www.reddit.com/r/javascript/comments/9vmw2x/array_of_objects_best_way_to_do_it/
    Used to see if the array structure would be a good idea + how I would put an object in an array 
    (thought about putting objects in an array to acces properties via a key, didn't know how that should be formatted)
*https://stackoverflow.com/questions/58618026/how-to-run-a-javascript-file-when-a-button-is-clicked-in-html
    Used this to get the button working, previous solution didn't work:
    document.getElementById("summonPipi").addEventListener("click", summonRandomJiji());
    

*/

document.getElementById('summonPipi').addEventListener("click", function summonRandomJiji() {
        //genereer random nummer tussen 0 en 42
        //ga met dat nummer opzoek naar het object in jijiSummoned
        //zet de value's van dat object in eigen var's
        //gebruik de var's om in de dom de in te vullen dingen te vullen
        //great succes, very nice dumbass

    var  jijiSummoned = [
        //Angy
        //Common
        {
            type: "Angy",
            rarity: "Common",
            path: "src/img/jijiAngy/angy1.jpg",
            name: "Sussy",
        },
        {
            type: "Angy",
            rarity: "Common",
            path: "src/img/jijiAngy/angy2.jpg",
            name: "Death Stare"
        },
        {
            type: "Angy",
            rarity: "Common",
            path: "src/img/jijiAngy/angy4.jpg",
            name: "Gurl?",
        },
        {
            type: "Angy",
            rarity: "Common",
            path: "src/img/jijiAngy/angy5.jpg",
            name: "RAAAAAAWR",
        },
        //uncommon
        {
            type: "Angy",
            rarity: "Uncommon",
            path: "src/img/jijiAngy/angy3.jpg",
            name: "Angry Sneef",
        },
        {
            type: "Angy",
            rarity: "Uncommon",
            path: "src/img/jijiAngy/angy6.jpg",
            name: "Smell My Toe's",
        },
        {
            type: "Angy",
            rarity: "Uncommon",
            path: "src/img/jijiAngy/angy8.jpg",
            name: "BISH SLAPAAH",
        },
        //Rare
        {
            type: "Angy",
            rarity: "Rare",
            path: "src/img/jijiAngy/angy7.jpg",
            name: "Feckyu",
        },
        {
            type: "Angy",
            rarity: "Rare",
            path: "src/img/jijiAngy/angy9.jpg",
            name: "WRGLBLRGL",
        },
        //Ultra rare
        {
            type: "Angy",
            rarity: "Ultra Rare",
            path: "src/img/jijiAngy/angy10.jpg",
            name: "You Foolish Peasent",
        },

        //Eepy
        //Common
        {
            type: "Eepy",
            rarity: "Common",
            path: "src/img/jijiEepy/eepy1.jpg",
            name: "Snoring",
        },
        {
            type: "Eepy",
            rarity: "Common",
            path: "src/img/jijiEepy/eepy2.jpg",
            name: "Sunning",
        },
        {
            type: "Eepy",
            rarity: "Common",
            path: "src/img/jijiEepy/eepy3.jpg",
            name:"Loafing",
        },
        {
            type: "Eepy",
            rarity: "Common",
            path: "src/img/jijiEepy/eepy6.jpg",
            name: "Snoozing",
        },
        //uncommon
        {
            type: "Eepy",
            rarity: "Uncommon",
            path: "src/img/jijiEepy/eepy5.jpg",
            name: "Resty Eary", 
        },
        {
            type: "Eepy",
            rarity: "Uncommon",
            path: "src/img/jijiEepy/eepy7.jpg",
            name: "Chilling",
        },
        {
            type: "Eepy",
            rarity: "Uncommon",
            path: "src/img/jijiEepy/eepy9.jpg",
            name: "Eeping",
        },
        //Rare
        {
            type: "Eepy",
            rarity: "Rare",
            path: "src/img/jijiEepy/eepy4.jpg",
            name: "P Form",
        },
        {
            type: "Eepy",
            rarity: "Rare",
            path: "src/img/jijiEepy/eepy8.jpg",
            name: "Burrito",
        },
        //Ultra rare
        {
            type: "Eepy",
            rarity: "Ultra Rare",
            path: "src/img/jijiEepy/eepy10.jpg",
            name: "PIPI PRIME YAWN",
        },

        //Nosey
        //Common
        {
            type: "Nosey",
            rarity: "Common",
            path: "src/img/jijiNosey/nosey3.jpg",
            name: "Soul Stare",
        },
        {
            type: "Nosey",
            rarity: "Common",
            path: "src/img/jijiNosey/nosey5.jpg",
            name: "Curious",
        },
        {
            type: "Nosey",
            rarity: "Common",
            path: "src/img/jijiNosey/nosey6.jpg",
            name: "Peaky Blinder",
        },
        {
            type: "Nosey",
            rarity: "Common",
            path: "src/img/jijiNosey/nosey7.jpg",
            name: "Jo The Explora",
        },
        //uncommon
        {
            type: "Nosey",
            rarity: "Uncommon",
            path: "src/img/jijiNosey/nosey8.jpg",
            name: "Nosey Sneef",
        },
        {
            type: "Nosey",
            rarity: "Uncommon",
            path: "src/img/jijiNosey/nosey9.jpg",
            name: "Ello Wo Dis",
        },
        {
            type: "Nosey",
            rarity: "Uncommon",
            path: "src/img/jijiNosey/nosey10.jpg",
            name: "? Tail",
        },
        //Rare
        {
            type: "Nosey",
            rarity: "Rare",
            path: "src/img/jijiNosey/nosey1.jpg",
            name: "Got This On Camera",
        },
        {
            type: "Nosey",
            rarity: "Rare",
            path: "src/img/jijiNosey/nosey2.jpg",
            name: "Stary Eyes",
        },
        //Ultra rare
        {
            type: "Nosey",
            rarity: "Ultra Rare",
            path: "src/img/jijiNosey/nosey4.jpg",
            name: "Leg Climber Jo",
        },

        //Silly
        //Common
        {
            type: "Silly",
            rarity: "Common",
            path: "src/img/jijiSilly/silly2.jpg",
            name: "What Is THAAAT",
        },
        {
            type: "Silly",
            rarity: "Common",
            path: "src/img/jijiSilly/silly4.jpg",
            name: "Caught in 1080P",
        },
        {
            type: "Silly",
            rarity: "Common",
            path: "src/img/jijiSilly/silly5.jpg",
            name: "Caught In 720p",
        },
        {
            type: "Silly",
            rarity: "Common",
            path: "src/img/jijiSilly/silly6.jpg",
            name: "Game Jover",
        },
        {
            type: "Silly",
            rarity: "Common",
            path: "src/img/jijiSilly/silly7.jpg",
            name: "Gurl What You Want",
        },
        {
            type: "Silly",
            rarity: "Common",
            path: "src/img/jijiSilly/silly13.jpg",
            name: "Pouncing",
        },
        //uncommon
        {
            type: "Silly",
            rarity: "Uncommon",
            path: "src/img/jijiSilly/silly1.jpeg",
            name: "Flexing The J-Line",
        },
        {
            type: "Silly",
            rarity: "Uncommon",
            path: "src/img/jijiSilly/silly8.jpg",
            name: "Caught in 4k",
        },
        {
            type: "Silly",
            rarity: "Uncommon",
            path: "src/img/jijiSilly/silly10.jpg",
            name: "Noodle Jo",
        },
        {
            type: "Silly",
            rarity: "Uncommon",
            path: "src/img/jijiSilly/silly12.jpg",
            name: "Chat Am I Cooked",
        },
        //Rare
        {
            type: "Silly",
            rarity: "Rare",
            path: "src/img/jijiSilly/silly3.jpg",
            name: "Dad Pic",
        },
        {
            type: "Silly",
            rarity: "Rare",
            path: "src/img/jijiSilly/silly11.jpg",
            name: "Airplane Mode Activated",
        },
        //Ultra rare
        {
            type: "Silly",
            rarity: "Ultra Rare",
            path: "src/img/jijiSilly/silly9.jpg",
            name: "It Is Jover",
        },

    ];

    //vars
        var jijiObject = jijiSummoned[jijiKey];
        var jijiKey = Math.floor(Math.random() * 43);
    //needed global functions

        jijiKey = Math.floor(Math.random() * 43);
        jijiObject = jijiSummoned[jijiKey];
        var jijiRarity = jijiObject.rarity;
        var jijiType = jijiObject.type;
        var jijiPath = jijiObject.path;
        var jijiName = jijiObject.name;
        document.getElementById("jijiImage").src = jijiPath;
        document.getElementById("type").innerText = jijiType;
        document.getElementById("rarity").innerText = jijiRarity;
        document.getElementById("name").innerText = jijiName;

}
);

