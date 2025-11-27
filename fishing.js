
/*
 * Version 0.0.2
 * micahkberg@gmail.com
 * Roll20 API Script: Randomized Fishing Event
 */

var Fishing = Fishing || (function() {
    'use strict';

    const script_name = 'Fishing';
    const state_name = 'FISHING';

    const locations = {
        any: "any",
        surface: "hobbit surface",
        underdark: "hobbit underdark"
    };

    const fishTable = [
        {
            name: "Anchovy",
            description: "a small salty forage",
            locale: locations.any,
            max_size: 40,
            min_size: 2,
            weight: 77
        },
        {
            name: "Barred Knifejaw",
            description: "named after a man who famously got knifed in the jaw at a bar",
            locale: locations.any,
            max_size: 80,
            min_size: 10,
            weight: 99
        },
        {
            name: "Barreleye" ,
            description: "not a barrel, and it doesn't even have an eye",
            locale: locations.any,
            max_size: 15,
            min_size: 2,
            weight: 12
        },
        {
            name: "Blowfish",
            description: "I hardly know it",
            locale: locations.any,
            max_size: 50,
            min_size: 5,
            weight: 20
        },
        {
            name: "Blue Marlin",
            description: "Pointy and rare!",
            locale: locations.any,
            max_size: 500,
            min_size: 170,
            weight: 50
        },
        {
            name: "Butterfly Fish",
            description: "More like butterfried fish, yum!",
            locale: locations.any,
            max_size: 30,
            min_size: 12,
            weight: 75
        },
        {
            name: "Clownfish",
            description: "Its the jokester of the school",
            locale: locations.any,
            max_size: 1.5,
            min_size: 0.5,
            weight: 96
        },
        {
            name: "Coelacanth",
            description: "An ancient creature.",
            locale: locations.any,
            max_size: 200,
            min_size: 30,
            weight: 57
        },
        {
            name: "Dab",
            description: "*dabbing emoji*",
            locale: locations.any,
            max_size: 40,
            min_size: 15,
            weight: 262
        },
        {
            name: "Football Fish",
            description: "Touchdown!",
            locale: locations.any,
            max_size: 60,
            min_size: 4,
            weight: 60
        },
        {
            name: "Giant Trevally" ,
            description: "A huge, delicious tropical fish",
            locale: locations.any,
            max_size: 170,
            min_size: 50,
            weight: 18
        },
        {
            name: "Great White Shark",
            description: "What marvelous teeth!",
            locale: locations.any,
            max_size: 600,
            min_size: 300,
            weight: 16
        },
        {
            name: "Hammerhead Shark",
            description: "Bonk!",
            locale: locations.any,
            max_size: 450,
            min_size: 150,
            weight: 8
        },
        {
            name: "Horse Mackerel",
            description: "Holy mackerel!",
            locale: locations.any,
            max_size: 160,
            min_size: 30,
            weight: 649
        },
        {
            name: "Mahi-Mahi",
            description: "Very strong fish",
            locale: locations.any,
            max_size: 150,
            min_size: 50,
            weight: 18
        },
        {
            name: "Moray Eel",
            description: "That's a moray!",
            locale: locations.any,
            max_size: 4,
            min_size: 2,
            weight: 18
        },
        {
            name: "Napoleon Fish",
            description: "Goes well with bagguette",
            locale: locations.any,
            max_size: 200,
            min_size: 75,
            weight: 4
        },
        {
            name: "Oarfish",
            description: "Too huge for paddling",
            locale: locations.any,
            max_size: 1700,
            min_size: 50,
            weight: 18
        },
        {
            name: "Ocean Sunfish",
            description: "Whoa!! The sun!",
            locale: locations.any,
            max_size: 200,
            min_size: 50,
            weight: 6
        },
        {
            name: "Olive Flounder",
            description: "Aw, it loves you too",
            locale: locations.any,
            max_size: 100,
            min_size: 10,
            weight: 174
        },
        {
            name: "Puffer Fish",
            description:  "I hardly know 'er",
            locale: locations.any,
            max_size: 150,
            min_size: 10,
            weight: 71
        },
        {
            name: "Stingray",
            description: "RIP STEVE",
            locale: locations.any,
            max_size: 700,
            min_size: 40,
            weight: 4
        },
        {
            name: "Electric Ray",
            description: "Way cooler than an acoustic ray",
            locale: locations.any,
            max_size: 70,
            min_size: 10,
            weight: 4
        },
        {
            name: "Shovelnose Ray",
            description: "Maybe you can use it for digging up buried treasure!",
            locale: locations.any,
            max_size: 760,
            min_size: 30,
            weight: 4
        },
        {
            name: "Red Snapper",
            description: "Oh Snap!",
            locale: locations.any,
            max_size: 120,
            min_size: 30,
            weight: 226
        },
        {
            name: "Ribbon Eel",
            description: "It's so beautiful! Put it in your hair!",
            locale: locations.any,
            max_size: 140,
            min_size: 1,
            weight: 30
        },
        {
            name: "Saw Shark",
            description: "I came, I Saw, I Shark",
            locale: locations.any,
            max_size: 140,
            min_size: 30,
            weight: 8
        },
        {
            name: "Sea Bass",
            description: "Salty and Funky",
            locale: locations.any,
            max_size: 70,
            min_size: 20,
            weight: 548
        },
        {
            name: "Sea Butterfly",
            description: "Butterflies devolved back to the ocean",
            locale: locations.any,
            max_size: 1,
            min_size: 0.1,
            weight: 123
        },
        {
            name: "Seahorse",
            description: "Neigh!",
            locale: locations.any,
            max_size: 35,
            min_size: 1.5,
            weight: 142
        },
        {
            name: "Squid",
            description: "It's not even a fish",
            locale: locations.any,
            max_size: 1000,
            min_size: 1,
            weight: 235
        },
        {
            name: "Suckerfish",
            description: "I hardly know her!!",
            locale: locations.any,
            max_size: 110,
            min_size: 30,
            weight: 24
        },
        {
            name: "Surgeonfish",
            description: "Don't let it operate on you",
            locale: locations.any,
            max_size: 100,
            min_size: 15,
            weight: 36
        },
        {
            name: "Tuna",
            description: "You can tuna fish but you can't tune out my jokes",
            locale: locations.any,
            max_size: 460,
            min_size: 30,
            weight: 36
        },
        {
            name: "Whale Shark",
            description: "It's a shark, its a whale! No...",
            locale: locations.any,
            max_size: 1900,
            min_size: 100,
            weight: 12
        },
        {
            name: "Zebra Turkeyfish",
            description: "A horrible monstrosity",
            locale: locations.any,
            max_size: 25,
            min_size: 5,
            weight: 176
        },
        {
            name: "Can",
            description: "It's a piece of tin, that once had a fish in it",
            locale: locations.any,
            max_size: 5,
            min_size: 5,
            weight: 20
        },
        {
            name: "Boot",
            description: "Leather formed into a comfortable stride, its sibling lost to the tides",
            locale: locations.any,
            max_size: 25,
            min_size: 25,
            weight: 70
        },
        {
            name: "Wheel",
            description: "Someone crashed their cart into the ocean",
            locale: locations.any,
            max_size: 100,
            min_size: 10,
            weight: 36
        },
        {
            name: "Stone",
            description: "How did this even get on your line",
            locale: locations.any,
            max_size: 200,
            min_size: 5,
            weight: 72
        },
        {
            name: "Glowfish",
            description: "A bioluminescent fish.",
            locale: locations.underdark,
            max_size: 5,
            min_size: 1,
            weight: 5
        },
        {
            name: "Salmon",
            description: "A strong swimmer with pink flesh.",
            locale: locations.surface,
            max_size: 15,
            min_size: 5,
            weight: 60
        }
    ];

	const subcommands = {
        cast: {
            description: `fish cast [characterId] [location] -> fishes`,
            name: 'cast',
            command: printhelp
        },
        help: {
            description: `fish help -> this message`,
            name: 'help'
        },
        bonus: {
            description: `fish setbonus [characterId] [bonus] -> alter a character's bonus to a fishing roll`,
            name: 'setbonus'
        },
        goto: {
            description: `fish goto [location] -> sets fishing location type to that location`,
            name: 'goto'
        },
        getlocales: {
            description: `fish locations -> gives location options`,
            name: 'locations'
        },
        getrecords: {
            description: `fish records [characterId] -> returns all fishing records for that character`,
            name: 'records'
        },
        getparty: {
            description: `fish party -> gets list of party members`,
            name: 'party'

        }
    };

    const makeCharacter = (characterId) => {
        const new_char = {
            name: characterId,
            bonus: 0,
            records: {}
        };
        state.Fishing.Party[characterId] = new_char;
        sendChat(script_name, `New Character added: ${characterId}`);
    };

    const setBonus = (characterId, bonus) => {
        if (!state.Fishing.Party[characterId]) {
            makeCharacter(characterId);
        }
        state.Fishing.Party[characterId].bonus = bonus;
        sendChat(script_name, `Bonus updated for ${characterId}: ${bonus}`);
    };

    const changeLocation = (locale) => {
        if (Object.keys(locations).includes(locale)) {
            state.Fishing.locale = locations[locale];
        } else {
            sendChat(script_name, `${locale} is not a known location for fishing.`);
        }
    };

    const getRandomFish = (locale = state.Fishing.locale) => {
        const filteredFish = fishTable.filter((f) => f.locale === locale);
        const totalWeight = filteredFish.reduce((sum, f) => sum + f.weight, 0);
        let roll = Math.random() * totalWeight;
        filteredFish.forEach((fish) => {
            roll -= fish.weight;
            if (roll <= 0) {
                const size = Math.floor(Math.random() * (fish.max_size - fish.min_size + 1)) + fish.min_size;
                return { ...fish, size };
            };
        });
        return null;
    };

    const fishRecord = (characterId, fish) => {
        const records = state.Fishing.Party[characterId].records;
        if (fish.name in records){
            if (fish.size > state.Fishing.Party[characterId].records[fish.name].size) {
                state.Fishing.Party[characterId].records[fish.name] = fish;
                return "new record";
            } else {
                return "no new record";
            };
        } else {
            state.Fishing.Party[characterId].records[fish.name] = fish;
            return "new entry";
        };
    };

    const getFailureMessage = () => {
        const messages = [
            "Your hook comes up fishless.",
            "No fish?",
            "No fish today.",
            "Well, that's why it's called fishing, not catching.",
            "The bait is gone.",
            "The worm's gone.",
            "Next time maybe if your net had smaller holes in it.",
            "Better luck next time.",
            "Try again tomorrow.",
            "You reeled in too early.",
            "You reeled in the line too soon, you are supposed to wait until the fish bites.",
            "You could have sworn there was a fish on the line, but there isn't even seaweed.",
            "The gods of this sea were not with you. Pray harder"
        ];
        return messages[Math.floor(Math.random() * messages.length)];
    };

    const handleFishing = (characterId, location) => {
        const bonus = parseInt(state.Fishing.Party[characterId]?.bonus || "0", 10);
        if (!state.Fishing.Party[characterId]){
            makeCharacter(characterId);
        };
        const rollResult = Math.floor(Math.random() * 20 + 1) + bonus;
        sendChat(script_name, `Rolling d20+${bonus}, ${characterId} rolled a ${rollResult}.`);
        if (rollResult >= 13) {
            const fish = getRandomFish(location);
            if (fish) {
                let record = fishRecord(characterId, fish);
                let message = `${fish.name} (${fish.size} cm): ${fish.description}`;
                if (record==='new entry') {
                    message = `${characterId} caught their first ` + message;
                } else if (record==='no new record') {
                    message = `${characterId} caught a ` + message;
                } else if (record==='new record') {
                    message = `New record for ${characterId}! ` + message;
                };
                sendChat(script_name, `/w gm ${message}`);
            } else {
                sendChat(script_name, `/w gm No fish found in this location.`);
            };
        } else {
            sendChat(script_name, `/w gm ${getFailureMessage()}`);
        };
    };

    const handleRecords = (characterId) => {
        if (state.Fishing.Party.hasOwnProperty(characterId)){
            let records = state.Fishing.Party[characterId].records;
            let message = `Records for ${characterId}: `;
            for (let fishName of Object.keys(records)) {
                let fish = records[fishName];
                message = message + `${fish.name}: ${fish.size} cm, `;
            }
            sendChat(script_name, `/w gm ${message}`);
        } else {
            sendChat(script_name, `/w gm No records for ${characterId}.`);
        };
    };

    const printhelp = () => {
        const helpers = Object.values(subcommands).map(cmd => cmd.description);
        const message = `/w gm Use commands with "!"\n${Object.values(helpers).join('\n')}`;
        sendChat(script_name, message);
    };

    const getparty = () => {
        if (!state.Fishing.Party) {
            sendChat(script_name, `/w gm There is no party.`);
        } else if (Object.keys(state.Fishing.Party).length > 0) {
            let party_list = ``;
            for (let partyMem of Object.keys(state.Fishing.Party)) {
                party_list += `${partyMem}, `;
            };
            sendChat(script_name, `/w gm ${party_list}`);
        } else {
            sendChat(script_name, `/w gm There are no known members of the party who fish.`);
        };
    };

    const handleInput = (msg) => {
        if (msg.type !== 'api') return;

        const args = msg.content.split(' ');
        const command = args.shift().substring(1);

        if (command !== 'fish') return;

        const subcommand = args.shift();
        const characterId = args.shift();
        const extraArg = args.shift();

        if (subcommand === subcommands.cast.name) {
            handleFishing(characterId, extraArg);
        } else if (subcommand === subcommands.help.name) {
            printhelp();
        } else if (subcommand === subcommands.bonus.name) {
            setBonus(characterId, extraArg);
        } else if (subcommand === subcommands.goto.name) {
            changeLocation(characterId);
        } else if (subcommand === subcommands.getlocales.name) {
            let locales = Object.keys(locations);
            sendChat(script_name, `/w gm Locations: ` + locales.join(', '));
        } else if (subcommand === subcommands.getrecords.name) {
            handleRecords(characterId);
        } else if (subcommand === subcommands.getparty.name) {
			getparty();
        } else {
			sendChat(script_name, `Unknown command '${subcommand}'`);
		};
    };

    const initializeFishing = () => {
        if (!state.Fishing) {
            log("initializing fishing database");
            state.Fishing = {
                Party: {},
                locale: locations.surface,
            };
        };
        if (!state.Fishing.Party) {
            state.Fishing.Party = {};
        };
        if (!state.Fishing.locale) {
            state.Fishing.locale = locations.surface;
        };
    };

    const registerEventHandlers = () => {
        on('chat:message', handleInput);
        initializeFishing();
    };

    return {
        RegisterEventHandlers: registerEventHandlers
    };
})();

on('ready', () => {
    'use strict';
    Fishing.RegisterEventHandlers();
});
