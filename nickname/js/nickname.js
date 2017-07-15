"use strict";
var adjectiveChoice = ['Hyper', 'Insane', 'Friendly', 'Disgusting', 'Yummy', 'Salty', 'Gooey', 'Sticky', 'Slimy', 'Wholesome', 'Depressing', 'Big', 'Giant', 'Crazy', 'Erect', 'Flying', 'Male', 'Sexist', 'Slightly gay', 'Somewhat gay', 'Really gay', 'Spinning', 'God like', 'Epic', 'Unexpected', 'Awe-inspiring', 'Dab worthy', 'Extreme', 'Sliding', 'Autistic', 'Rotating', 'Oddly erotic', 'Transracial', 'Super', 'Pansexual', 'Bisexual', 'Retarded', 'Tragic', 'Transgender', 'Furry-filled', 'Infinite', 'Mind boggling', 'Marshmallow', 'Small', 'Little', 'Very nice', 'Original', 'Stinky', 'Medium', 'Subpar', 'Average', 'Better than average', 'Outwards', 'Intense', 'Spicy', 'Mediocre', 'Gay', 'Homosexual', 'Suspicious', 'Rad', 'Sick', 'Cool', 'Wacky', 'Comedic', 'Hilarious', 'Terrible', 'Ancient', 'Greasy', 'Massive', 'Robust', 'Mighty', 'Dirty', 'Beautiful', 'Thoughtful', 'realllllllllllly good', '', 'Slippery', 'Filthy', 'Wet', 'Large', 'Zany', 'Deep', 'Wild', 'Boring', 'Unhelpful', 'Super', 'Impending', 'Uninteresting', 'Radioactive', 'Weird', ''];
var nounChoice = ['penis', 'cunt', 'dong', 'dude', 'lick', 'bong', 'semen flavored', 'nazi', 'chestnut', 'pecan', 'male', 'corn', 'handjob', 'blowjob', 'erection', 'dingle', 'anus', 'dick', 'penile', 'penor', 'giraffe', 'succ', 'cactus', 'bumhole', 'loli', 'weeb', 'boner', 'retard', 'roblox', 'club penguin', 'superman', 'batman', 'minecraft', 'fuck', 'DONG', 'snake', 'cool AND good', 'ghetto', 'ass', 'cocaine', 'number', 'underage child', 'poo', 'pecan', 'hentai', 'milk', 'nigga ass', 'yaoi', 'shit', 'tit', 'heroine', 'jew', 'meme', 'soda flavored soda', 'BONE', 'HORN', 'horn', 'bone', 'skeleton', 'rock', 'masturbation', 'dick joke', 'man', 'weed', 'woman', 'fUCK', 'vaginal', 'porn', 'fuck hole', 'jizz', 'bro', 'XD', 'nut', 'semen', 'bum', 'FUCK', 'ass', 'think', ''];
var verbChoice = ['man', 'friend', 'hentai', 'frog', 'dude', 'team', 'club', 'nazi', 'crew', 'boys', 'dudes', 'pecan', 'handjob', 'blowjob', 'frog', 'erection', 'BONE', 'lick', 'man', 'woman', 'explosion', 'boy', 'dongerino', 'squirt', 'destruction', 'amputation', 'annihilation', 'succ', 'autism', 'yogurt', 'suck', 'squad', 'SUCK', 'zone', 'adventure', 'dial', 'fruit', 'THRUST', 'quest', 'collapse', 'generator', 'soda', 'slide', 'dance', 'obsession', 'radiation', 'leap', 'porn', 'sex', 'jizz', 'thrust', 'bone', 'bro', 'cum', 'stories', 'friends', 'revolution', 'land', 'shit', 'mistakes', 'exercises', 'thoughts', 'song', 'moments', 'cat', 'dog', 'fish', 'turtle', 'deluxe', 'PENIS', 'nut', 'semen', 'expansion', ' butt', 'squeeze', 'death', 'NUT', 'medicine', 'bob', 'smell', 'fuck hole', 'burst', 'pump', 'world', 'suit', 'massage', 'juice', ''];

function nickname(args) {
    if (args == undefined || args == '' || args == ' ') {
        var adjective = adjectiveChoice[Math.floor(Math.random() * adjectiveChoice.length)];
        var noun = nounChoice[Math.floor(Math.random() * nounChoice.length)];
        var verb = verbChoice[Math.floor(Math.random() * verbChoice.length)];
        return adjective + " " + noun + " " + verb;
    } else {
        var adjective = adjectiveChoice[Math.floor(Math.random() * adjectiveChoice.length)];
        var noun = args;
        var verb = verbChoice[Math.floor(Math.random() * verbChoice.length)];
        return adjective + " " + noun + " " + verb;
    }
}