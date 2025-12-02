export const storyData = {
    zeus: {
        thinkingImage: "Images/zeus_thinking.png",
        speakingImage: "Images/zeus_speaking.png",
        story: [
            // SEGMENT 0
            [
                { type: 'dialogue', text: "THUNDER AND LIGHTNING! My Master Bolt... gone! Stolen from the very heart of Olympus!", speaker: "left", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "I am ZEUS, King of the Gods! Who would dare strike at me?", speaker: "left", characterImage: "Images/zeus_speaking.png" },
                { type: 'dialogue', text: "It must be Poseidon. That barnacle-bearded fool has envied my throne for eons.", speaker: "left", characterImage: "Images/zeus_thinking.png" },
                // *** NAME USAGE ***
                { type: 'dialogue', text: "You, {{NAME}}. I have chosen you. Look at this plaque near the statue. Find me proof of his treachery!", speaker: "left", characterImage: "Images/zeus_speaking.png" },
                { type: 'challenge', 
                  text: "A name spoken softly,\nYet never found on wandering maps.\nA corridor whispered by windows and walls,\nWhere shadows walk straighter than men.\n\nLook not for doors—\nThey vanish when stared at.\nSearch instead for the corner\nWhere footsteps echo with no owner.\n\nWhen you stand before a building\nYou cannot swear was there before,\nYou will know the path is correct.\nFor only the unseen may find...", 
                  answer: "block iii", hint: "Look for the small metal plaque near the base of the statue.", speaker: "left", pose: "thinking" },
                { type: 'wait', text: "You found something, {{NAME}}? Good. Go find the next QR code.", speaker: "left", characterImage: "Images/zeus_speaking.png" }
            ],
            // SEGMENT 1
            [
                { type: 'dialogue', text: "Aha! Look at this debris! Soaked in salt water! It is undeniable proof!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_proud.png" },
                { type: 'dialogue', text: "Father, compose yourself. Your rage blinds you to the details.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "Who dares— oh. It is you, Athena.", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_thinking.png" },
                { type: 'dialogue', text: "The stone is wet, yes. But look at the scorch marks. Water does not burn stone.", speaker: "right", secondaryImage: "Images/athena_thinking.png" },
                { type: 'dialogue', text: "He... he used some trickery! He mimicked my lightning to mock me!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "Perhaps. {{NAME}}, let us solve this riddle to find the next piece of evidence.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'challenge', text: "Go behind the tower of learning,\nWhere the scent of warm bread lingers.\nDo not look for ovens nor for coins,\nBut for a white arena where tiny storms rage.\nA battlefield of bouncing thunder,\nWhere wooden blades split the air.", answer: "123", hint: "Look near the canteen area.", speaker: "left", secondaryImage: "Images/athena_speaking.png" },
                { type: 'wait', text: "Strange... very strange. Move to the next location.", speaker: "right", secondaryImage: "Images/athena_thinking.png" }
            ],
            // SEGMENT 2
            [
                { type: 'dialogue', text: "We need answers from the dark places. Hades! Brother! Show yourself!", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/zeus_speaking.png" },
                { type: 'dialogue', text: "Go away, Zeus. I am busy ruling the dead. Your squabbles do not concern me.", speaker: "right", secondaryImage: "Images/hades.png" },
                { type: 'dialogue', text: "You defy your King? I command you to help!", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "Uncle Hades, please. If Zeus declares war, the surface will burn. The Underworld will be flooded.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "Hmph. Logical as always, niece. Fine. The residue... it smells of bloodlust. Adrenaline. Mania.", speaker: "right", secondaryImage: "Images/hades.png" },
                { type: 'challenge', text: "“Seek the hall where voices rise,\nWhere spotlights crown mortals as kings.\nBut do not climb its grand stairs —\nTruth hides beneath applause.\nFind the gate where many flags breathe together,\nA home for those from a thousand skies.\nBetween its twin chambers lies the answer,\nGuarded by silence, not crowds.”", answer: "123", hint: "Look near the International Office / Auditorium entrance.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_thinking.png" },
                { type: 'wait', text: "Bloodlust? That is troubling. Go to the next location, {{NAME}}.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_thinking.png" }
            ],
            // SEGMENT 3
            [
                { type: 'dialogue', text: "We need to examine the physical evidence. Hephaestus! Attend to me!", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/zeus_speaking.png" },
                { type: 'dialogue', text: "I am busy at the forge, Father. You only visit when you break something.", speaker: "right", secondaryImage: "Images/hephaestus.png" },
                { type: 'dialogue', text: "Wait! Help me, and I will... I will grant you a new forge. On the highest peak of Olympus.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/zeus_thinking.png" },
                { type: 'dialogue', text: "A sky forge? ...Fine. Step aside. Let me see the lock.", speaker: "right", secondaryImage: "Images/hephaestus.png" },
                { type: 'dialogue', text: "This wasn't magic. It was crushed. Battered from the inside out by brute strength.", speaker: "right", secondaryImage: "Images/hephaestus.png" },
                { type: 'challenge', text: "“Find the stall where the hungry crowd gathers,\nYet the real trail lies behind its laughter.\nSeek what you cannot enter —\nA kingdom barred to wandering feet.\nBeyond the steam of student feasts\nSleeps an army of giant, slumbering beasts\nWith bellies of diesel and bones of steel.”", answer: "123", hint: "Look behind the student canteen near the bus bay.", speaker: "left", secondaryImage: "Images/hephaestus.png" },
                { type: 'wait', text: "Brute force? This changes everything. Find the final clue, {{NAME}}.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/zeus_thinking.png" }
            ],
            // SEGMENT 4
            [
                { type: 'dialogue', text: "Father, listen to reason. The evidence is clear.", speaker: "right", secondaryImage: "Images/athena_thinking.png", characterImage: "Images/zeus_thinking.png" },
                { type: 'dialogue', text: "Hades sensed bloodlust. Hephaestus found brute force. It is ARES! The God of War!", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "Ares...? My own son? He dares?!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_shocked.png" },
                { type: 'dialogue', text: "We must find him. {{NAME}}, solve this last riddle to reveal his hiding spot.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'challenge', text: "[CLUE 5 PLACEHOLDER]", answer: "123", hint: "What color is the banner?", speaker: "left", secondaryImage: "Images/athena_speaking.png" },
                { type: 'wait', text: "The Old Arena! That is where he waits! Go, confront him!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_angry.png" }
            ],
            // SEGMENT 5
            [
                { type: 'dialogue', text: "ARES! I know you are here! Step away from the Bolt!", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "Father. You figured it out. Shame. I was hoping to see the oceans boil today.", speaker: "right", secondaryImage: "Images/ares.png" },
                { type: 'dialogue', text: "Silence! Drop the Bolt!", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "Fine. Take your toy. But you... {{NAME}}. You ruined a masterpiece today. Watch your back.", speaker: "right", secondaryImage: "Images/ares_angry.png" },
                { type: 'dialogue', text: "He is gone. You are safe under my protection, {{NAME}}. Peace is restored.", speaker: "left", characterImage: "Images/zeus_proud.png" }
            ]
        ]
    },
    poseidon: {
        thinkingImage: "Images/poseidon_thinking.png",
        speakingImage: "Images/poseidon_speaking.png",
        story: [
            // SEGMENT 0
            [
                { type: 'dialogue', text: "My Trident! It's gone! Only one god would dare steal the symbol of my power.", speaker: "left", characterImage: "Images/poseidon_angry.png" },
                { type: 'dialogue', text: "I am POSEIDON, Earthshaker! It must be ZEUS! That paranoid Sky-King.", speaker: "left", characterImage: "Images/poseidon_speaking.png" },
                // *** NAME USAGE ***
                { type: 'dialogue', text: "Help me prove it, {{NAME}}. Check the base of this statue. Find me a clue.", speaker: "left", characterImage: "Images/poseidon_speaking.png" },
                { type: 'challenge', text: "A name spoken softly,\nYet never found on wandering maps.\nA corridor whispered by windows and walls,\nWhere shadows walk straighter than men.\n\nLook not for doors—\nThey vanish when stared at.\nSearch instead for the corner\nWhere footsteps echo with no owner.\n\nWhen you stand before a building\nYou cannot swear was there before,\nYou will know the path is correct.\nFor only the unseen may find...", answer: "block iii", hint: "Check the base of the statue.", speaker: "left", pose: "thinking" },
                { type: 'wait', text: "Good start, {{NAME}}. Go find the next QR code.", speaker: "left", characterImage: "Images/poseidon_speaking.png" }
            ],
            // SEGMENT 1
            [
                { type: 'dialogue', text: "Look at this debris! Scorched! Only lightning does that. It is proof Zeus was here!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_proud.png" },
                { type: 'dialogue', text: "Peace, Uncle. Lower your voice, and your rage. I am ATHENA, Goddess of Wisdom.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "The stone is scorched, yes. But look at the burn patterns. They are shallow. Weak.", speaker: "right", secondaryImage: "Images/athena_thinking.png" },
                { type: 'dialogue', text: "An imitation? You mean someone *faked* Zeus's strike? Just to provoke me?", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_angry.png" },
                { type: 'dialogue', text: "Precisely. {{NAME}}, solve this riddle, and let us find the real culprit.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'challenge', text: "Go behind the tower of learning,\nWhere the scent of warm bread lingers.\nDo not look for ovens nor for coins,\nBut for a white arena where tiny storms rage.\nA battlefield of bouncing thunder,\nWhere wooden blades split the air.", answer: "123", hint: "Look near the canteen area.", speaker: "left", secondaryImage: "Images/athena_speaking.png" },
                { type: 'wait', text: "A forged lightning bolt... clever. But not clever enough. Next clue.", speaker: "left", characterImage: "Images/poseidon_thinking.png" }
            ],
            // SEGMENT 2
            [
                 { type: 'dialogue', text: "I need answers. Hades, show yourself!", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'dialogue', text: "Poseidon. You and Zeus are bickering again? Leave me out of it.", speaker: "right", secondaryImage: "Images/hades.png" },
                 { type: 'dialogue', text: "Uncle Hades, if they fight, the oceans boil and the earth cracks. Your realm will be ruined.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_speaking.png" },
                 { type: 'dialogue', text: "Always the pragmatist, Athena. Fine. This energy... it is too chaotic for Zeus. It feels heavy. Violent.", speaker: "right", secondaryImage: "Images/hades.png" },
                 { type: 'challenge', text: "“Seek the hall where voices rise,\nWhere spotlights crown mortals as kings.\nBut do not climb its grand stairs —\nTruth hides beneath applause.\nFind the gate where many flags breathe together,\nA home for those from a thousand skies.\nBetween its twin chambers lies the answer,\nGuarded by silence, not crowds.”", answer: "123", hint: "Count the pillars.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_thinking.png" },
                 { type: 'wait', text: "Not Zeus? Then who? Go to the next clue.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_thinking.png" }
            ],
            // SEGMENT 3
            [
                 { type: 'dialogue', text: "I need a smith's eye. Hephaestus! Look at this twisted metal.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'dialogue', text: "Why should I? The sea air rusts my tools. I have work to do.", speaker: "right", secondaryImage: "Images/hephaestus.png" },
                 { type: 'dialogue', text: "I... I will gift you rare Ore from Atlantis. Rust-proof.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/poseidon_thinking.png" },
                 { type: 'dialogue', text: "Atlantean Ore? ...You have my attention. This wasn't melted by lightning. It was bent. Twisted by pure physical strength.", speaker: "right", secondaryImage: "Images/hephaestus.png" },
                 { type: 'challenge', text: "“Find the stall where the hungry crowd gathers,\nYet the real trail lies behind its laughter.\nSeek what you cannot enter —\nA kingdom barred to wandering feet.\nBeyond the steam of student feasts\nSleeps an army of giant, slumbering beasts\nWith bellies of diesel and bones of steel.”", answer: "123", hint: "Check the date.", speaker: "left", secondaryImage: "Images/hephaestus.png" },
                 { type: 'wait', text: "Physical strength... I have a bad feeling about this.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/poseidon_thinking.png" }
            ],
            // SEGMENT 4
            [
                 { type: 'dialogue', text: "Violent energy. Physical strength. Uncle, it isn't Zeus.", speaker: "right", secondaryImage: "Images/athena_thinking.png", characterImage: "Images/poseidon_thinking.png" },
                 { type: 'dialogue', text: "It is ARES, the God of War! He stole the Trident to provoke you into attacking Zeus.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                 { type: 'dialogue', text: "My nephew? He would risk the world just for a fight?", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_shocked.png" },
                 { type: 'dialogue', text: "We have to catch him. {{NAME}}, find his trail!", speaker: "left", characterImage: "Images/poseidon_angry.png" },
                 { type: 'challenge', text: "[CLUE 5 PLACEHOLDER]", answer: "123", hint: "What color is the banner?", speaker: "left", secondaryImage: "Images/athena_speaking.png" },
                 { type: 'wait', text: "Found him! Go to the final location to confront Ares!", speaker: "left", characterImage: "Images/poseidon_proud.png" }
            ],
            // SEGMENT 5
            [
                 { type: 'dialogue', text: "ARES! Give it back, or I'll drown you where you stand!", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/poseidon_angry.png" },
                 { type: 'dialogue', text: "Uncle. I was just borrowing it. Imagine the tsunami you could have caused...", speaker: "right", secondaryImage: "Images/ares.png" },
                 { type: 'dialogue', text: "Drop. It. NOW.", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/poseidon_angry.png" },
                 { type: 'dialogue', text: "Have it. But you, {{NAME}}... you chose the wrong side. I have a long memory.", speaker: "right", secondaryImage: "Images/ares_angry.png" },
                 { type: 'dialogue', text: "You did good, {{NAME}}. The seas are calm again. Go in peace.", speaker: "left", characterImage: "Images/poseidon_proud.png" }
            ]
        ]
    }
};

export const clueIdMap = {
    "start": 0, "fountain_riddle": 1, "library_puzzle": 2, "clue_4": 3, "clue_5": 4, "clue_6": 5         
};