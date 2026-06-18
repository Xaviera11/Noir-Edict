// ================================================================
//  NAME MEANING DATABASE
// ================================================================
const nameMeanings = {
    // --- African / Nguni ---
    "tsandzile": {
        meaning: "One who brings hope and renewal",
        culture: "Swati / Nguni",
        feminine: "A woman who rebuilds communities with grace",
        masculine: "A man who restores hope and unity"
    },
    "xaviera": {
        meaning: "Bright, splendid, new home",
        culture: "Basque / Spanish",
        feminine: "A luminous leader who opens doors for others",
        masculine: "A radiant man who brings light and clarity"
    },
    "moloi": {
        meaning: "Ancestral healer and keeper of traditions",
        culture: "Sotho / Tswana",
        feminine: "A woman of deep spiritual wisdom and healing",
        masculine: "A man who carries ancestral knowledge forward"
    },
    "mtetwa": {
        meaning: "Descendant of the royal lineage",
        culture: "Zulu / Swati",
        feminine: "A queen who rules with compassion and strength",
        masculine: "A king who leads with honour and courage"
    },
    "thabo": {
        meaning: "Joy and happiness",
        culture: "Sotho / Nguni",
        feminine: "A woman who brings happiness wherever she goes",
        masculine: "A man whose presence fills the room with joy"
    },
    "lindiwe": {
        meaning: "She has been awaited",
        culture: "Zulu / Nguni",
        feminine: "A woman of great expectation and promise",
        masculine: "One whose arrival brings new hope"
    },
    // --- European / Biblical ---
    "daniel": {
        meaning: "God is my judge",
        culture: "Hebrew / Biblical",
        feminine: "A woman of faith, wisdom, and unwavering strength",
        masculine: "A man of integrity, courage, and divine protection"
    },
    "danielle": {
        meaning: "God is my judge",
        culture: "Hebrew / Biblical",
        feminine: "A woman of grace, intelligence, and divine favour",
        masculine: "A man who stands firm in truth and justice"
    },
    "sarah": {
        meaning: "Princess / noblewoman",
        culture: "Hebrew",
        feminine: "A woman of royal dignity and quiet strength",
        masculine: "A man who honours and protects those around him"
    },
    "david": {
        meaning: "Beloved",
        culture: "Hebrew / Biblical",
        feminine: "A woman who is deeply loved and cherished",
        masculine: "A man of heart, courage, and unwavering faith"
    },
    "mary": {
        meaning: "Bitter / beloved / wished-for child",
        culture: "Hebrew / Egyptian",
        feminine: "A woman of deep emotion and compassion",
        masculine: "A man who carries immense depth and care"
    },
    "elizabeth": {
        meaning: "God is my oath / consecrated to God",
        culture: "Hebrew",
        feminine: "A woman of steadfast faith and purpose",
        masculine: "A man devoted to truth and honour"
    },
    "taylor": {
        meaning: "Tailor / one who cuts cloth",
        culture: "English / Old French",
        feminine: "A woman who shapes her own life",
        masculine: "A man who crafts his destiny with his hands"
    },
    "jordan": {
        meaning: "To flow down / descend",
        culture: "Hebrew",
        feminine: "A woman whose spirit flows like a river",
        masculine: "A man who moves through life with purpose"
    },
    "michelle": {
        meaning: "Who is like God?",
        culture: "Hebrew / French",
        feminine: "A woman of profound strength and grace",
        masculine: "A man of remarkable depth and presence"
    }
};

// ================================================================
//  HELPER FUNCTIONS
// ================================================================

function getGender() {
    return document.querySelector('input[name="gender"]:checked').value;
}

function getBirthDate() {
    return document.getElementById('birthDate').value;
}

// ================================================================
//  LIFE PATH NUMBER
// ================================================================

function calculateLifePathNumber(birthDateStr) {
    if (!birthDateStr) return null;
    const digits = birthDateStr.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = sum.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    }
    return sum;
}

function getLifePathDescription(number) {
    const descriptions = {
        1: "The Leader – Independent, driven, and destined to forge new paths.",
        2: "The Peacemaker – Diplomatic, intuitive, and here to bring harmony.",
        3: "The Creator – Expressive, joyful, and born to inspire through art and words.",
        4: "The Builder – Practical, disciplined, and here to create lasting foundations.",
        5: "The Adventurer – Free-spirited, curious, and meant to embrace change.",
        6: "The Nurturer – Responsible, compassionate, and here to care for family and community.",
        7: "The Seeker – Analytical, spiritual, and destined to uncover deeper truths.",
        8: "The Powerhouse – Ambitious, efficient, and here to manifest abundance.",
        9: "The Humanitarian – Wise, generous, and born to serve humanity.",
        11: "The Intuitive Master – Visionary, inspiring, with a heightened spiritual connection.",
        22: "The Master Builder – Capable of turning grand dreams into reality."
    };
    return descriptions[number] || "A unique soul on a sacred journey.";
}

// ================================================================
//  🪐 STAR SIGN CALCULATOR
// ================================================================

function getStarSign(birthDateStr) {
    if (!birthDateStr) return null;
    const parts = birthDateStr.split('-');
    const month = parseInt(parts[1]);
    const day = parseInt(parts[2]);

    const signs = [
        { name: "♈ Aries", start: [3, 21], end: [4, 19] },
        { name: "♉ Taurus", start: [4, 20], end: [5, 20] },
        { name: "♊ Gemini", start: [5, 21], end: [6, 20] },
        { name: "♋ Cancer", start: [6, 21], end: [7, 22] },
        { name: "♌ Leo", start: [7, 23], end: [8, 22] },
        { name: "♍ Virgo", start: [8, 23], end: [9, 22] },
        { name: "♎ Libra", start: [9, 23], end: [10, 22] },
        { name: "♏ Scorpio", start: [10, 23], end: [11, 21] },
        { name: "♐ Sagittarius", start: [11, 22], end: [12, 21] },
        { name: "♑ Capricorn", start: [12, 22], end: [1, 19] },
        { name: "♒ Aquarius", start: [1, 20], end: [2, 18] },
        { name: "♓ Pisces", start: [2, 19], end: [3, 20] }
    ];

    for (let sign of signs) {
        let startMonth = sign.start[0];
        let startDay = sign.start[1];
        let endMonth = sign.end[0];
        let endDay = sign.end[1];

        // Capricorn special case (crosses year boundary)
        if (startMonth === 12 && endMonth === 1) {
            if ((month === 12 && day >= startDay) || (month === 1 && day <= endDay)) {
                return sign.name;
            }
        } else {
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return sign.name;
            }
        }
    }
    return "♈ Aries"; // fallback
}

function getStarSignDescription(sign) {
    const descriptions = {
        "♈ Aries": "Bold, courageous, and a natural leader. You charge ahead with passion and determination.",
        "♉ Taurus": "Reliable, patient, and deeply grounded. You value stability and beauty in all things.",
        "♊ Gemini": "Curious, adaptable, and endlessly curious. You bring lightness and wit to every conversation.",
        "♋ Cancer": "Nurturing, intuitive, and deeply emotional. You protect and care for those you love.",
        "♌ Leo": "Radiant, confident, and generous. You inspire others by simply being yourself.",
        "♍ Virgo": "Analytical, practical, and kind-hearted. You find meaning in service and attention to detail.",
        "♎ Libra": "Diplomatic, charming, and fair. You seek harmony and beauty in all relationships.",
        "♏ Scorpio": "Intense, passionate, and transformative. You dive deep and uncover hidden truths.",
        "♐ Sagittarius": "Adventurous, optimistic, and philosophical. You seek freedom and meaning in life.",
        "♑ Capricorn": "Disciplined, ambitious, and wise. You build lasting legacies with quiet strength.",
        "♒ Aquarius": "Innovative, visionary, and independent. You think differently and inspire progress.",
        "♓ Pisces": "Dreamy, compassionate, and artistic. You feel deeply and connect with the mystical."
    };
    return descriptions[sign] || "A soul born under the stars.";
}

// ================================================================
//  NAME LOOKUP (local database)
// ================================================================

function lookupName(namePart) {
    const key = namePart.toLowerCase();
    if (nameMeanings[key]) {
        return nameMeanings[key];
    }
    const firstLetter = key.charAt(0).toUpperCase();
    const letterTraits = {
        'A': 'courage', 'B': 'kindness', 'C': 'creativity', 'D': 'determination',
        'E': 'empathy', 'F': 'faith', 'G': 'grace', 'H': 'hope', 'I': 'inspiration',
        'J': 'joy', 'K': 'knowledge', 'L': 'love', 'M': 'mastery', 'N': 'nobility',
        'O': 'optimism', 'P': 'patience', 'Q': 'quest', 'R': 'resilience',
        'S': 'strength', 'T': 'truth', 'U': 'unity', 'V': 'vision', 'W': 'wisdom',
        'X': 'mystery', 'Y': 'yearning', 'Z': 'zeal'
    };
    const trait = letterTraits[firstLetter] || 'wonder';
    return {
        meaning: `One who embodies ${trait} and originality`,
        culture: "ancient spirit",
        feminine: `A woman who brings ${trait} to all she meets`,
        masculine: `A man who walks with ${trait} and honour`
    };
}

// ================================================================
//  AI CALL (via Google Apps Script proxy)
// ================================================================

// ✅ Your web app URL
const proxyUrl = "https://script.google.com/macros/s/AKfycby85853OfythS_HnXDZwF1FHlo0pnyyzIXhYw45RTJp-f-L4Fxtnp-spPBBrPj8agL1/exec";

async function callAI(prompt) {
    try {
        const response = await fetch(proxyUrl, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: prompt })
        });
        const data = await response.json();
        return data.reply || "Spirit speaks through this name – your path is written in the stars.";
    } catch (error) {
        console.error("AI error:", error);
        return "I'm having trouble connecting to the oracle right now. Please try again later.";
    }
}

// ================================================================
//  GENERATE DIVINE SENTENCE
// ================================================================

function generateDivineSentence(fullName, gender, lifePathNum, starSign) {
    const first = fullName.split(/\s+/)[0];
    const genderWord = (gender === 'female') ? 'woman' : 'man';
    let sentence = `✨ Divine Oracle for ${first}: ✨\n`;
    sentence += `You are a ${genderWord} of powerful names. `;
    if (lifePathNum) {
        sentence += `Your Life Path Number ${lifePathNum} reveals a destiny of ${getLifePathDescription(lifePathNum).split('–')[0]}. `;
    }
    if (starSign) {
        sentence += `As a ${starSign}, you carry the energy of ${getStarSignDescription(starSign).split('.')[0]}. `;
    }
    sentence += `The universe guides your steps. Walk boldly, for your ancestors sing your name. 🌙`;
    return sentence;
}

// ================================================================
//  MAIN FUNCTION – called when user clicks "REVEAL MY PATH"
// ================================================================

async function revealPath() {
    const fullName = document.getElementById('fullName').value.trim();
    const resultDiv = document.getElementById('result');

    if (!fullName) {
        resultDiv.innerHTML = "<p style='color: #ff8888;'>🌟 Please enter your full name, brave soul.</p>";
        return;
    }

    const gender = getGender();
    const birthDateStr = getBirthDate();
    const lifePathNum = calculateLifePathNumber(birthDateStr);
    const starSign = getStarSign(birthDateStr);

    const nameParts = fullName.split(/\s+/);

    // 1. Build name meanings
    let meaningsHtml = `<div class="name-meaning"><strong>📜 Name Meanings:</strong>`;
    let aiFallback = false;

    for (let part of nameParts) {
        let meaningObj = lookupName(part);
        if (!meaningObj && !aiFallback) {
            aiFallback = true;
        }
        const genderNote = (gender === 'female')
            ? (meaningObj.feminine || meaningObj.meaning)
            : (meaningObj.masculine || meaningObj.feminine || meaningObj.meaning);

        meaningsHtml += `
            <div class="name-part">
                <strong>${part}</strong> (${meaningObj.culture || "Spirit"}) – ${meaningObj.meaning || "A name of great mystery and power"}<br>
                <span style="font-size:0.9em; color:#FFD9A0;">✦ ${genderNote}</span>
            </div>
        `;
    }
    meaningsHtml += `</div>`;

    // 2. Life Path Number + Star Sign
    let lifePathHtml = '';
    if (lifePathNum && starSign) {
        lifePathHtml = `
            <div class="life-path">
                🔢 Life Path Number: ${lifePathNum} – ${getLifePathDescription(lifePathNum)}<br>
                🪐 Star Sign: ${starSign} – ${getStarSignDescription(starSign)}
            </div>
        `;
    } else if (lifePathNum) {
        lifePathHtml = `
            <div class="life-path">
                🔢 Life Path Number: ${lifePathNum} – ${getLifePathDescription(lifePathNum)}
            </div>
        `;
    } else if (starSign) {
        lifePathHtml = `
            <div class="life-path">
                🪐 Star Sign: ${starSign} – ${getStarSignDescription(starSign)}
            </div>
        `;
    } else {
        lifePathHtml = `
            <div class="life-path">
                ✨ No birth date entered – your path is written in your choices.
                <br><small>Add your birth date to reveal your Life Path Number &amp; Star Sign.</small>
            </div>
        `;
    }

    // 3. Divine sentence
    let divineMsg = generateDivineSentence(fullName, gender, lifePathNum, starSign);

    // 4. AI enhancement
    let aiMessage = '';
    if (aiFallback) {
        const aiPrompt = `
            Act as a mystical name oracle. The user's full name is "${fullName}".
            Provide a short, poetic spiritual reading that includes:
            - The cultural origin and meaning of their name (if known)
            - A few words of divine guidance related to their name's energy
            - Write in a warm, encouraging, mystical tone, as if speaking to a heroic warrior.
            Keep it under 3 sentences.
        `;
        const aiResponse = await callAI(aiPrompt);
        if (aiResponse && !aiResponse.includes("trouble connecting")) {
            aiMessage = `
                <div class="divine-sentence" style="border-left-color: #FFD9A0;">
                    🌀 <strong>Spirit speaks:</strong><br>
                    ${aiResponse}
                </div>
            `;
        }
    }

    // 5. Display final result
    resultDiv.innerHTML = `
        <h3>🦋 ${fullName.toUpperCase()} 🦋</h3>
        ${meaningsHtml}
        ${lifePathHtml}
        <div class="divine-sentence">${divineMsg.replace(/\n/g, '<br>')}</div>
        ${aiMessage}
        <p style="margin-top: 15px; color: #FFD700;">🐆 The panther spirit watches over you. 🐆</p>
    `;
}

// ================================================================
//  ENTER KEY SUPPORT
// ================================================================

document.getElementById('fullName').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        revealPath();
    }
});
