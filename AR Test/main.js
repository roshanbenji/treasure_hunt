import { storyData, clueIdMap } from './story.js';

// --- ASSET LIST FOR PRELOADING ---
const imageAssets = [
    "Images/ground_temp.jpg",
    "Images/zeus_thinking.png", "Images/zeus_speaking.png", "Images/zeus_angry.png", "Images/zeus_proud.png", "Images/zeus_shocked.png",
    "Images/poseidon_thinking.png", "Images/poseidon_speaking.png", "Images/poseidon_angry.png", "Images/poseidon_proud.png", "Images/poseidon_shocked.png",
    "Images/athena_calm.png", "Images/athena_speaking.png", "Images/athena_thinking.png", "Images/athena_angry.png",
    "Images/hades.png", "Images/hephaestus.png", "Images/ares.png"
];

// HTML Elements
const loginOverlay = document.getElementById('login-overlay');
const regInput = document.getElementById('reg-input');
const nameInput = document.getElementById('name-input');
const loginBtn = document.getElementById('login-btn');
const loginError = document.getElementById('login-error');

const characterSelection = document.getElementById('character-selection');
const selectZeusBtn = document.getElementById('select-zeus');
const selectPoseidonBtn = document.getElementById('select-poseidon');
const dialogueText = document.getElementById('dialogue-text');
const dialogueBox = document.getElementById('dialogue-box');

const sceneStage = document.getElementById('scene-stage'); 
const charLeft = document.getElementById('character-image-left');
const charRight = document.getElementById('character-image-right');

const challengeArea = document.getElementById('challenge-area');
const answerInput = document.getElementById('answer-input');
const submitAnswerBtn = document.getElementById('submit-answer-btn');
const nextClueBtn = document.getElementById('next-clue-btn');
const hintBtn = document.getElementById('hint-btn');
const fullscreenBtn = document.getElementById('fullscreen-btn');

// Game State
let gameState = { 
    regNumber: null,
    playerName: "Hero", 
    chosenCharacter: null, 
    currentSegment: 0,      
    stepInSegment: 0,       
    isSegmentComplete: false,
    hintsRemaining: 2 
};

// Variable to store the typing interval so we can stop it if needed
let typingInterval = null;

// Listeners
loginBtn.addEventListener('click', handleLogin);
selectZeusBtn.addEventListener('click', () => selectCharacter('zeus'));
selectPoseidonBtn.addEventListener('click', () => selectCharacter('poseidon'));
nextClueBtn.addEventListener('click', () => advanceDialogue());
submitAnswerBtn.addEventListener('click', () => checkAnswer());
hintBtn.addEventListener('click', () => useHint());

// Fullscreen Logic
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
        const doc = window.document;
        const docEl = doc.documentElement;
        const requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        const cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

        if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
            if(requestFullScreen) {
                requestFullScreen.call(docEl).catch(err => alert("To go Full Screen: Tap Share -> Add to Home Screen"));
            } else {
                alert("To go Full Screen: Tap Share -> Add to Home Screen");
            }
        } else {
            if(cancelFullScreen) cancelFullScreen.call(doc);
        }
    });
}

// --- LOGIC ---

async function handleLogin() {
    const reg = regInput.value.trim();
    const name = nameInput.value.trim();

    if (!reg || !name) {
        loginError.classList.remove('hidden');
        return;
    }

    gameState.regNumber = reg;
    gameState.playerName = name;
    localStorage.setItem('mythicTreasureHuntState', JSON.stringify(gameState));
    
    loginOverlay.classList.add('hidden');
    initializeGame();
}

function selectCharacter(god) {
    gameState.chosenCharacter = god;
    gameState.currentSegment = 0;
    gameState.stepInSegment = 0;
    gameState.isSegmentComplete = false;
    gameState.hintsRemaining = 2; 
    saveGame();
    renderGame(); 
}

function advanceDialogue() {
    gameState.stepInSegment++;
    renderGame();
}

function useHint() {
    if (gameState.hintsRemaining > 0) {
        gameState.hintsRemaining--;
        saveGame();

        const godSegments = storyData[gameState.chosenCharacter].story;
        const currentSegment = godSegments[gameState.currentSegment];
        const currentStep = currentSegment[gameState.stepInSegment];
        
        const hintText = currentStep.hint || "No hint available.";
        
        // When showing a hint, we just swap the text immediately (no typewriter needed for hints usually)
        // But we save the original text to restore it
        const originalText = dialogueText.textContent;
        
        dialogueText.textContent = "HINT: " + hintText;
        dialogueText.style.color = "#FFC107";

        if (gameState.hintsRemaining === 0) hintBtn.disabled = true;

        setTimeout(() => {
            dialogueText.textContent = originalText;
            dialogueText.style.color = "white";
        }, 5000);

    } else {
        alert("No hints left!");
    }
}

function checkAnswer() {
    const playerAnswer = answerInput.value.trim().toLowerCase();
    if (!storyData[gameState.chosenCharacter]) return;

    const godSegments = storyData[gameState.chosenCharacter].story;
    const currentSegment = godSegments[gameState.currentSegment];
    const currentStep = currentSegment[gameState.stepInSegment];

    if (!currentStep || currentStep.type !== 'challenge') return;

    if (playerAnswer === (currentStep.answer ? currentStep.answer.toLowerCase() : "")) {
        gameState.stepInSegment++;
        gameState.isSegmentComplete = true; 
        saveGame(); 
        renderGame(); 
    } else {
        const godData = storyData[gameState.chosenCharacter];
        const originalText = dialogueText.textContent;
        
        dialogueText.textContent = "Incorrect. Try again.";
        dialogueText.style.color = "#ff9999";
        
        if (charLeft && !charLeft.classList.contains('hidden')) {
             const oldSrc = charLeft.getAttribute('src');
             updateImage(charLeft, godData.thinkingImage);
             setTimeout(() => { 
                 updateImage(charLeft, oldSrc);
                 dialogueText.textContent = originalText;
                 dialogueText.style.color = "white";
             }, 2000);
        }
    }
}

function updateImage(imgElement, newSrc) {
    if (imgElement.getAttribute('src') === newSrc) return;
    imgElement.classList.add('switching');
    setTimeout(() => {
        imgElement.src = newSrc;
        imgElement.classList.remove('switching');
    }, 150); 
}

// *** NEW TYPEWRITER FUNCTION ***
function typeWriter(text, onComplete) {
    dialogueText.textContent = ""; // Clear text
    let i = 0;
    const speed = 20; // Speed in ms (Lower = Faster)

    // Clear any existing interval if the player clicked too fast previously
    if (typingInterval) clearInterval(typingInterval);

    typingInterval = setInterval(() => {
        dialogueText.textContent += text.charAt(i);
        i++;
        if (i > text.length - 1) {
            clearInterval(typingInterval);
            typingInterval = null;
            // When done, run the callback to show buttons
            if (onComplete) onComplete();
        }
    }, speed);
}

function renderGame() {
    const godData = storyData[gameState.chosenCharacter];
    const godSegments = godData.story;

    if (!godSegments || !godSegments[gameState.currentSegment]) return;

    const currentSegment = godSegments[gameState.currentSegment];
    const currentStep = currentSegment[gameState.stepInSegment];

    if (!currentStep) {
        dialogueText.textContent = "The End.";
        hideAllControls();
        return;
    }

    characterSelection.classList.add('hidden');
    
    // 1. Prepare the Text (with Name)
    let finalRawText = currentStep.text;
    if (finalRawText.includes("{{NAME}}")) {
        finalRawText = finalRawText.replace(/{{NAME}}/g, gameState.playerName);
    }
    
    // Reset Color
    dialogueText.style.color = "white"; 

    // 2. Setup Images & Colors (Happens immediately)
    if (!currentStep.secondaryImage) {
        sceneStage.classList.add('single-mode');
        charRight.classList.add('hidden');
        charLeft.classList.remove('hidden');
        charLeft.classList.remove('dimmed'); 
        
        const poseImg = (currentStep.characterImage) ? currentStep.characterImage : 
            ((currentStep.pose === "thinking") ? godData.thinkingImage : godData.speakingImage);
        updateImage(charLeft, poseImg);
    } else {
        sceneStage.classList.remove('single-mode');
        charLeft.classList.remove('hidden');
        if (currentStep.characterImage) {
            updateImage(charLeft, currentStep.characterImage);
        } else {
             if (currentStep.speaker === "right") {
                updateImage(charLeft, godData.thinkingImage);
            } else {
                updateImage(charLeft, godData.speakingImage);
            }
        }

        charRight.classList.remove('hidden');
        updateImage(charRight, currentStep.secondaryImage);

        if (currentStep.speaker === "right") {
            charLeft.classList.add('dimmed');
            charRight.classList.remove('dimmed');
        } else {
            charLeft.classList.remove('dimmed');
            charRight.classList.add('dimmed');
        }
    }
    
    // Dialogue Box Border
    dialogueBox.className = ""; 
    dialogueBox.id = "dialogue-box"; 
    
    if (currentStep.speaker === "right") {
        dialogueBox.classList.add('speak-right');
    } else {
        dialogueBox.classList.add('speak-left');
    }

    // 3. HIDE ALL CONTROLS INITIALLY
    challengeArea.classList.add('hidden');
    nextClueBtn.classList.add('hidden');
    hintBtn.classList.add('hidden');

    // 4. START TYPING
    // The buttons only appear AFTER this function finishes
    typeWriter(finalRawText, () => {
        // --- ON COMPLETE CALLBACK ---
        
        if (currentStep.type === 'dialogue') {
            nextClueBtn.classList.remove('hidden');
        } 
        else if (currentStep.type === 'challenge') {
            challengeArea.classList.remove('hidden');
            nextClueBtn.classList.add('hidden');
            answerInput.value = ""; 
            answerInput.focus(); // Auto focus input
            
            hintBtn.classList.remove('hidden'); 
            hintBtn.textContent = `💡 Hint(${gameState.hintsRemaining})`;
            hintBtn.disabled = (gameState.hintsRemaining <= 0);
        } 
        else if (currentStep.type === 'wait') {
            // Wait screen usually has no buttons until QR scan, 
            // but if you want them to read it first, this works fine.
        }
    });
}

// --- SYSTEM ---
function saveGame() {
    localStorage.setItem('mythicTreasureHuntState', JSON.stringify(gameState));
}

function loadGame() {
    const savedState = localStorage.getItem('mythicTreasureHuntState');
    if (savedState) {
        gameState = JSON.parse(savedState);
        if (gameState.hintsRemaining === undefined) gameState.hintsRemaining = 2;
    } 
}

function getRequestedSegment() {
    const urlParams = new URLSearchParams(window.location.search);
    const requestedId = urlParams.get('id'); 
    if (requestedId && clueIdMap.hasOwnProperty(requestedId)) return clueIdMap[requestedId];
    return null;
}

function preloadImages() {
    imageAssets.forEach((url) => {
        const img = new Image();
        img.src = url;
    });
}

function initializeGame() {
    preloadImages();
    loadGame();
    
    if (!gameState.playerName || !gameState.regNumber) {
        loginOverlay.classList.remove('hidden');
        return; 
    } else {
        loginOverlay.classList.add('hidden');
    }

    const requestedSegment = getRequestedSegment();

    if (gameState.chosenCharacter === null) {
        if (requestedSegment === 0 || requestedSegment === null) {
            dialogueText.textContent = `Welcome, ${gameState.playerName}! Choose your divine guide...`;
            characterSelection.classList.remove('hidden');
            hideAllImagesAndControls();
        } else {
            dialogueText.textContent = "Whoa! Start at the beginning.";
            hideAllImagesAndControls();
        }
        return;
    }

    if (requestedSegment === null || requestedSegment === gameState.currentSegment) {
        renderGame();
        return;
    }
    
    if (requestedSegment > gameState.currentSegment + 1) {
         dialogueText.textContent = "Whoa, traveler! You can't skip ahead.";
         renderGame(); 
         hideAllControls(); 
         return;
    }

    if (requestedSegment === gameState.currentSegment + 1) {
        if (gameState.isSegmentComplete) {
            gameState.currentSegment = requestedSegment;
            gameState.stepInSegment = 0;
            gameState.isSegmentComplete = false;
            saveGame();
            renderGame();
        } else {
            dialogueText.textContent = "Finish the current clue first!";
            renderGame();
            hideAllControls();
        }
    }
}

function hideAllImagesAndControls() {
    charLeft.classList.add('hidden');
    charRight.classList.add('hidden');
    challengeArea.classList.add('hidden');
    nextClueBtn.classList.add('hidden');
    hintBtn.classList.add('hidden');
}

function hideAllControls() {
    challengeArea.classList.add('hidden');
    nextClueBtn.classList.add('hidden');
    hintBtn.classList.add('hidden');
}

initializeGame();