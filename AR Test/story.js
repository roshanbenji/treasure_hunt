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
                { type: 'dialogue', text: "You, {{NAME}}. I have chosen you. He is making a mockery of me and giving me a clue. Find me proof of his treachery!", speaker: "left", characterImage: "Images/zeus_angry.png" },
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
                { type: 'dialogue', text: "Perhaps. {{NAME}}, the thief has left after riddle for us. Let us solve it to find the next piece of evidence.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
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
                { type: 'dialogue', text: "Bloodlust, Poseidon almost never shows those emotions. Then again my brother is a savage. Wait he has left another one here, let us solve this one {{NAME}}.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/zeus_thinking.png" },
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
                { type: 'dialogue', text: "Hmmm... I dislike Poseidon with a passion. Yet, I cannot see him be such a savage. {{NAME}}, he has left another clue here, let us solve it.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/zeus_speaking.png" },
                { type: 'challenge', text: "“Find the stall where the hungry crowd gathers,\nYet the real trail lies behind its laughter.\nSeek what you cannot enter —\nA kingdom barred to wandering feet.\nBeyond the steam of student feasts\nSleeps an army of giant, slumbering beasts\nWith bellies of diesel and bones of steel.”", answer: "123", hint: "Look behind the student canteen near the bus bay.", speaker: "left", secondaryImage: "Images/hephaestus.png" },
                { type: 'wait', text: "It looks like we are getting to the bottom of this. Find the final clue, {{NAME}}.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/zeus_thinking.png" }
            ],
            // SEGMENT 4
            [
                { type: 'dialogue', text: "Father, listen to reason. The evidence is clear.", speaker: "right", secondaryImage: "Images/athena_thinking.png", characterImage: "Images/zeus_thinking.png" },
                { type: 'dialogue', text: "Hades sensed bloodlust. Hephaestus found brute force. Poseidon is moody, not a brawler.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "Then who? Who else has such strength and desires war?", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "It is ARES! The God of War! He stole the Bolt to provoke a civil war!", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "Ares...? My own son? He dares?!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_shocked.png" },
                { type: 'dialogue', text: "We must find him. {{NAME}}, solve this last riddle to reveal his hiding spot.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'challenge', text: "[CLUE 5 PLACEHOLDER]", answer: "123", hint: "What color is the banner?", speaker: "left", secondaryImage: "Images/athena_speaking.png" },
                { type: 'wait', text: "The basement, he wanted me and Poseidon, to destroy each other. Let us face him!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/zeus_angry.png" }
            ],
            // SEGMENT 5
            [
                { type: 'dialogue', text: "ARES! I know you are here! Step away from the Bolt!", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "Father. You figured it out. Shame. I was hoping to see the oceans boil today.", speaker: "right", secondaryImage: "Images/ares.png" },
                { type: 'dialogue', text: "Why?! Why try to destroy your own family?", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/zeus_shocked.png" },
                { type: 'dialogue', text: "Because peace makes you weak! I wanted to forge a stronger Olympus in the fires of war!", speaker: "right", secondaryImage: "Images/ares.png" },
                { type: 'dialogue', text: "Silence! Drop the Bolt and leave, or I will strike you down where you stand!", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/zeus_angry.png" },
                { type: 'dialogue', text: "Fine. Take your toy. But you... {{NAME}}. You ruined a masterpiece today. Watch your back.", speaker: "right", secondaryImage: "Images/ares_angry.png" },
                { type: 'dialogue', text: "He is gone. Do not fear his threats, little one. You have the gratitude of the King of Gods.", speaker: "left", characterImage: "Images/zeus_speaking.png" },
                { type: 'dialogue', text: "You are safe under my protection. I will deal with Ares in time. Now, go. Peace is restored.", speaker: "left", characterImage: "Images/zeus_proud.png" }
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
                { type: 'dialogue', text: "I am POSEIDON, Earthshaker! Stormbringer! And I will not be disrespected.", speaker: "left", characterImage: "Images/poseidon_speaking.png" },
                { type: 'dialogue', text: "It must be ZEUS! That paranoid Sky-King wants to disarm me before he tries to take over the oceans.", speaker: "left", characterImage: "Images/poseidon_angry.png" },
                { type: 'dialogue', text: "Help me prove it, {{NAME}}. He is making a mockery of me by leaving a clue here. Prove it to me it is him.", speaker: "left", characterImage: "Images/poseidon_speaking.png" },
                { type: 'challenge', text: "A name spoken softly,\nYet never found on wandering maps.\nA corridor whispered by windows and walls,\nWhere shadows walk straighter than men.\n\nLook not for doors—\nThey vanish when stared at.\nSearch instead for the corner\nWhere footsteps echo with no owner.\n\nWhen you stand before a building\nYou cannot swear was there before,\nYou will know the path is correct.\nFor only the unseen may find...", answer: "block iii", hint: "Check the base of the statue.", speaker: "left", pose: "thinking" },
                { type: 'wait', text: "Good start, {{NAME}}. Go find the next QR code.", speaker: "left", characterImage: "Images/poseidon_speaking.png" }
            ],
            // SEGMENT 1
            [
                { type: 'dialogue', text: "Look at this debris! Scorched! Only lightning does that. It is proof Zeus was here!", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_proud.png" },
                { type: 'dialogue', text: "Peace, Uncle. Lower your voice, and your rage.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "Athena? I suppose you are here to defend your father?", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_thinking.png" },
                { type: 'dialogue', text: "I am ATHENA, Goddess of Wisdom. I serve the truth. Look closer at the debris.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'dialogue', text: "The stone is scorched, yes. But look at the burn patterns. They are shallow. Weak.", speaker: "right", secondaryImage: "Images/athena_thinking.png" },
                { type: 'dialogue', text: "Real lightning obliterates stone from the inside. This... this is a cheap imitation.", speaker: "right", secondaryImage: "Images/athena_thinking.png" },
                { type: 'dialogue', text: "An imitation? You mean someone *faked* Zeus's strike? Just to provoke me?", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_angry.png" },
                { type: 'dialogue', text: "Precisely. {{NAME}}, the thief seems to have left another riddle, solve it and let us find the real culprit.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                { type: 'challenge', text: "Go behind the tower of learning,\nWhere the scent of warm bread lingers.\nDo not look for ovens nor for coins,\nBut for a white arena where tiny storms rage.\nA battlefield of bouncing thunder,\nWhere wooden blades split the air.", answer: "123", hint: "Look near the canteen area.", speaker: "left", secondaryImage: "Images/athena_speaking.png" },
                { type: 'wait', text: "A forged lightning bolt... clever. But not clever enough. Next clue.", speaker: "left", characterImage: "Images/poseidon_thinking.png" }
            ],
            // SEGMENT 2
            [
                 { type: 'dialogue', text: "I need answers. Hades, show yourself!", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'dialogue', text: "Poseidon. You and Zeus are bickering again? Leave me out of it.", speaker: "right", secondaryImage: "Images/hades.png" },
                 { type: 'dialogue', text: "Uncle Hades, if they fight, the oceans boil and the earth cracks. Your realm will be ruined.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_speaking.png" },
                 { type: 'dialogue', text: "Always the pragmatist, Athena. Fine. For the sake of stability. Not for him.", speaker: "right", secondaryImage: "Images/hades.png" },
                 { type: 'dialogue', text: "This energy... it is very chaotic. It feels heavy. Violent. Like a battlefield.", speaker: "right", secondaryImage: "Images/hades.png" },
                 { type: 'dialogue', text: "Chaotic?! I have only seen him be so when Hera gives him a lecture. Wait there is another riddle here. Check it out {{NAME}}.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'challenge', text: "“Seek the hall where voices rise,\nWhere spotlights crown mortals as kings.\nBut do not climb its grand stairs —\nTruth hides beneath applause.\nFind the gate where many flags breathe together,\nA home for those from a thousand skies.\nBetween its twin chambers lies the answer,\nGuarded by silence, not crowds.”", answer: "123", hint: "Count the pillars.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/athena_thinking.png" },
                 { type: 'wait', text: "Something smells fishy and it is not me. Onwards {{NAME}}!!.", speaker: "left", secondaryImage: "Images/hades.png", characterImage: "Images/poseidon_thinking.png" }
            ],
            // SEGMENT 3
            [
                 { type: 'dialogue', text: "I need a smith's eye. Hephaestus! Look at this twisted metal.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'dialogue', text: "Why should I? The sea air rusts my tools. I have work to do.", speaker: "right", secondaryImage: "Images/hephaestus.png" },
                 { type: 'dialogue', text: "I... I will gift you rare Ore from Atlantis. Rust-proof.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/poseidon_thinking.png" },
                 { type: 'dialogue', text: "Atlantean Ore? ...You have my attention. This wasn't melted by lightning. It was bent. Twisted by pure physical strength.", speaker: "right", secondaryImage: "Images/hephaestus.png" },
                 { type: 'dialogue', text: "Why would Zeus use his physical force to steal it? He would blast it with lightning. Something is not making sense. Check this out {{NAME}}.", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'challenge', text: "“Find the stall where the hungry crowd gathers,\nYet the real trail lies behind its laughter.\nSeek what you cannot enter —\nA kingdom barred to wandering feet.\nBeyond the steam of student feasts\nSleeps an army of giant, slumbering beasts\nWith bellies of diesel and bones of steel.”", answer: "123", hint: "Check the date.", speaker: "left", secondaryImage: "Images/hephaestus.png" },
                 { type: 'wait', text: "I feel like we are getting to the bottom of this. Go {{NAME}}!", speaker: "left", secondaryImage: "Images/hephaestus.png", characterImage: "Images/poseidon_thinking.png" }
            ],
            // SEGMENT 4
            [
                 { type: 'dialogue', text: "Violent energy. Physical strength. Uncle, it isn't Zeus.", speaker: "right", secondaryImage: "Images/athena_thinking.png", characterImage: "Images/poseidon_thinking.png" },
                 { type: 'dialogue', text: "Then who? Who else hates me this much?", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_angry.png" },
                 { type: 'dialogue', text: "It is ARES, the God of War! He stole the Trident to provoke you into attacking Zeus.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                 { type: 'dialogue', text: "My nephew? He would risk the world just for a fight?", speaker: "left", secondaryImage: "Images/athena_speaking.png", characterImage: "Images/poseidon_shocked.png" },
                 { type: 'dialogue', text: "He wants a war between Sky and Sea.", speaker: "right", secondaryImage: "Images/athena_speaking.png" },
                 { type: 'dialogue', text: "We have to catch him. {{NAME}}, find his trail. This should be the last one!", speaker: "left", characterImage: "Images/poseidon_angry.png" },
                 { type: 'challenge', text: "[CLUE 5 PLACEHOLDER]", answer: "123", hint: "What color is the banner?", speaker: "left", secondaryImage: "Images/athena_speaking.png" },
                 { type: 'wait', text: "Found him! Go to the final location to confront Ares!", speaker: "left", characterImage: "Images/poseidon_proud.png" }
            ],
            // SEGMENT 5
            [
                 { type: 'dialogue', text: "ARES! Give it back, or I'll drown you where you stand!", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/poseidon_angry.png" },
                 { type: 'dialogue', text: "Uncle. I was just borrowing it. Imagine the tsunami you could have caused...", speaker: "right", secondaryImage: "Images/ares.png" },
                 { type: 'dialogue', text: "You wanted us to destroy Olympus. You wanted chaos.", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'dialogue', text: "I wanted glory! But you and Zeus are too busy talking to fight.", speaker: "right", secondaryImage: "Images/ares.png" },
                 { type: 'dialogue', text: "Drop. It. NOW.", speaker: "left", secondaryImage: "Images/ares.png", characterImage: "Images/poseidon_angry.png" },
                 { type: 'dialogue', text: "Have it. But you, {{NAME}}... you chose the wrong side. I have a long memory.", speaker: "right", secondaryImage: "Images/ares_angry.png" },
                 { type: 'dialogue', text: "Let him run. He's all talk.", speaker: "left", characterImage: "Images/poseidon_speaking.png" },
                 { type: 'dialogue', text: "You did good, {{NAME}}. The seas are calm again. Go in peace.", speaker: "left", characterImage: "Images/poseidon_proud.png" }
            ]
        ]
    }
};

export const clueIdMap = {
    "start": 0, "fountain_riddle": 1, "library_puzzle": 2, "clue_4": 3, "clue_5": 4, "clue_6": 5         
};