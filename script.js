// ================================================================
//  STAR SIGN CALCULATOR
// ================================================================

function getStarSign(birthDateStr) {
    if (!birthDateStr) return null;
    const date = new Date(birthDateStr);
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const day = date.getDate();

    const signs = [
        { sign: "♈ Aries", start: [3, 21], end: [4, 19] },
        { sign: "♉ Taurus", start: [4, 20], end: [5, 20] },
        { sign: "♊ Gemini", start: [5, 21], end: [6, 20] },
        { sign: "♋ Cancer", start: [6, 21], end: [7, 22] },
        { sign: "♌ Leo", start: [7, 23], end: [8, 22] },
        { sign: "♍ Virgo", start: [8, 23], end: [9, 22] },
        { sign: "♎ Libra", start: [9, 23], end: [10, 22] },
        { sign: "♏ Scorpio", start: [10, 23], end: [11, 21] },
        { sign: "♐ Sagittarius", start: [11, 22], end: [12, 21] },
        { sign: "♑ Capricorn", start: [12, 22], end: [1, 19] },
        { sign: "♒ Aquarius", start: [1, 20], end: [2, 18] },
        { sign: "♓ Pisces", start: [2, 19], end: [3, 20] }
    ];

    for (let s of signs) {
        const [startMonth, startDay] = s.start;
        const [endMonth, endDay] = s.end;
        // Handle Capricorn wrapping across year
        if (startMonth === 12) {
            if ((month === 12 && day >= startDay) || (month === 1 && day <= endDay)) {
                return s.sign;
            }
        } else {
            if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
                return s.sign;
            }
        }
    }
    return "♑ Capricorn"; // fallback
}

// Then in revealPath(), add this after lifePathNum:
const starSign = getStarSign(birthDateStr);
