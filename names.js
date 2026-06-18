// ================================================================
//  NAME MEANING DATABASE – Global Names
//  Add as many names as you like (lowercase keys)
// ================================================================

const nameMeanings = {
    // ===== AFRICAN NAMES =====
    // Nguni / Zulu / Xhosa / Swati
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
    "sipho": {
        meaning: "Gift",
        culture: "Zulu / Nguni",
        feminine: "A woman who is a gift to the world",
        masculine: "A man who is a gift to his people"
    },
    "nomsa": {
        meaning: "Mother of kindness",
        culture: "Zulu / Nguni",
        feminine: "A woman who nurtures with compassion",
        masculine: "A man who embodies gentle strength"
    },
    "mbali": {
        meaning: "Flower",
        culture: "Zulu / Nguni",
        feminine: "A woman who blooms with beauty and grace",
        masculine: "A man who brings colour to the world"
    },
    "zanele": {
        meaning: "She has enough",
        culture: "Zulu / Nguni",
        feminine: "A woman of abundance and gratitude",
        masculine: "A man who is content and fulfilled"
    },
    // Sotho / Tswana
    "lerato": {
        meaning: "Love",
        culture: "Sotho / Tswana",
        feminine: "A woman of profound love and warmth",
        masculine: "A man of deep affection and care"
    },
    "mpho": {
        meaning: "Gift",
        culture: "Sotho / Tswana",
        feminine: "A woman who is a precious gift",
        masculine: "A man who is a blessing to others"
    },
    "tumelo": {
        meaning: "Faith",
        culture: "Sotho / Tswana",
        feminine: "A woman of unshakable faith",
        masculine: "A man of strong conviction"
    },
    "segopotso": {
        meaning: "Remembrance",
        culture: "Sotho / Tswana",
        feminine: "A woman who honours the past",
        masculine: "A man who carries ancestral memory"
    },
    // Yoruba
    "ayodele": {
        meaning: "Joy has come home",
        culture: "Yoruba",
        feminine: "A woman who brings joy to her family",
        masculine: "A man who brings happiness to his lineage"
    },
    "oluwafemi": {
        meaning: "God loves me",
        culture: "Yoruba",
        feminine: "A woman of divine favour",
        masculine: "A man of God's love"
    },
    "oluwatoyin": {
        meaning: "God is worthy of praise",
        culture: "Yoruba",
        feminine: "A woman of praise and gratitude",
        masculine: "A man of devotion"
    },
    // Akan / Ashanti
    "kwame": {
        meaning: "Born on a Saturday",
        culture: "Akan",
        feminine: "A woman of Saturday's grace",
        masculine: "A man of Saturday's strength"
    },
    "akua": {
        meaning: "Born on a Wednesday",
        culture: "Akan",
        feminine: "A woman born under Wednesday's wisdom",
        masculine: "A man of Wednesday's spirit"
    },
    // Shona
    "tendai": {
        meaning: "Be thankful",
        culture: "Shona",
        feminine: "A woman of gratitude and grace",
        masculine: "A man of thankfulness"
    },
    "chipo": {
        meaning: "Gift",
        culture: "Shona",
        feminine: "A woman who is a gift",
        masculine: "A man who is a blessing"
    },

    // ===== EUROPEAN / BIBLICAL =====
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
    "joseph": {
        meaning: "God will add",
        culture: "Hebrew / Biblical",
        feminine: "A woman of increase and blessing",
        masculine: "A man of growth and favour"
    },
    "benjamin": {
        meaning: "Son of the right hand",
        culture: "Hebrew / Biblical",
        feminine: "A woman of strength and honour",
        masculine: "A man of power and purpose"
    },
    "abigail": {
        meaning: "My father's joy",
        culture: "Hebrew / Biblical",
        feminine: "A woman who brings joy and wisdom",
        masculine: "A man of wisdom and grace"
    },
    "matthew": {
        meaning: "Gift of God",
        culture: "Hebrew / Biblical",
        feminine: "A woman of divine blessing",
        masculine: "A man of God's grace"
    },
    "luke": {
        meaning: "Light",
        culture: "Greek / Biblical",
        feminine: "A woman of illumination and wisdom",
        masculine: "A man who brings light to others"
    },
    "sofia": {
        meaning: "Wisdom",
        culture: "Greek",
        feminine: "A woman of profound wisdom and intellect",
        masculine: "A man of clarity and discernment"
    },
    // ===== EUROPEAN / MODERN =====
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
    },
    "amelia": {
        meaning: "Work / industrious",
        culture: "Germanic / Latin",
        feminine: "A woman of diligence and grace",
        masculine: "A man of hard work and integrity"
    },
    "olivia": {
        meaning: "Olive tree",
        culture: "Latin",
        feminine: "A woman of peace and fruitfulness",
        masculine: "A man of harmony and growth"
    },
    "emma": {
        meaning: "Whole / universal",
        culture: "Germanic",
        feminine: "A woman of completeness and strength",
        masculine: "A man of universal understanding"
    },
    "liam": {
        meaning: "Strong-willed warrior",
        culture: "Irish / Germanic",
        feminine: "A woman of fierce will and grace",
        masculine: "A man of determination and courage"
    },
    "noah": {
        meaning: "Rest / comfort",
        culture: "Hebrew",
        feminine: "A woman of peace and healing",
        masculine: "A man who brings comfort to others"
    },
    "mason": {
        meaning: "Stone worker",
        culture: "English",
        feminine: "A woman of strength and stability",
        masculine: "A man of solid foundation"
    },
    "ethan": {
        meaning: "Enduring / strong",
        culture: "Hebrew",
        feminine: "A woman of enduring strength",
        masculine: "A man of unwavering resolve"
    },
    "charlotte": {
        meaning: "Free woman",
        culture: "French / Germanic",
        feminine: "A woman of freedom and spirit",
        masculine: "A man of liberation and courage"
    },
    "isabella": {
        meaning: "God is my oath",
        culture: "Hebrew / Spanish",
        feminine: "A woman of devotion and grace",
        masculine: "A man of covenant and honour"
    },
    "alexander": {
        meaning: "Defender of the people",
        culture: "Greek",
        feminine: "A woman who protects and serves",
        masculine: "A man of strength and leadership"
    },
    "victoria": {
        meaning: "Victory",
        culture: "Latin",
        feminine: "A woman of triumph and strength",
        masculine: "A man of success and honour"
    },

    // ===== ASIAN NAMES =====
    // Chinese
    "li": {
        meaning: "Plum / beautiful",
        culture: "Chinese",
        feminine: "A woman of beauty and sweetness",
        masculine: "A man of strength and virtue"
    },
    "wei": {
        meaning: "Great / powerful",
        culture: "Chinese",
        feminine: "A woman of great strength",
        masculine: "A man of immense power"
    },
    "xia": {
        meaning: "Glow of sunrise",
        culture: "Chinese",
        feminine: "A woman of radiance and warmth",
        masculine: "A man of brightness and hope"
    },
    "mei": {
        meaning: "Beautiful",
        culture: "Chinese",
        feminine: "A woman of stunning beauty",
        masculine: "A man of refined elegance"
    },
    // Japanese
    "sakura": {
        meaning: "Cherry blossom",
        culture: "Japanese",
        feminine: "A woman of fleeting beauty and grace",
        masculine: "A man of refined spirit"
    },
    "haruki": {
        meaning: "Shining bright",
        culture: "Japanese",
        feminine: "A woman of brilliance and light",
        masculine: "A man of shining success"
    },
    "yuki": {
        meaning: "Snow / happiness",
        culture: "Japanese",
        feminine: "A woman of pure joy",
        masculine: "A man of serene happiness"
    },
    "riku": {
        meaning: "Land / earth",
        culture: "Japanese",
        feminine: "A woman of grounding and strength",
        masculine: "A man of stable power"
    },
    // Korean
    "minjun": {
        meaning: "Bright and intelligent",
        culture: "Korean",
        feminine: "A woman of wisdom and light",
        masculine: "A man of intelligence and brightness"
    },
    "soyoung": {
        meaning: "Beautiful and prosperous",
        culture: "Korean",
        feminine: "A woman of beauty and wealth",
        masculine: "A man of prosperity and grace"
    },
    "jisoo": {
        meaning: "Wisdom and excellence",
        culture: "Korean",
        feminine: "A woman of wisdom and distinction",
        masculine: "A man of excellence and honour"
    },
    // Hindi / Sanskrit
    "devi": {
        meaning: "Goddess / divine",
        culture: "Sanskrit / Hindi",
        feminine: "A woman of divine grace",
        masculine: "A man of sacred purpose"
    },
    "ravi": {
        meaning: "Sun",
        culture: "Sanskrit / Hindi",
        feminine: "A woman of radiant light",
        masculine: "A man of solar strength"
    },
    "priya": {
        meaning: "Beloved / dear one",
        culture: "Sanskrit / Hindi",
        feminine: "A woman of love and affection",
        masculine: "A man of devotion and care"
    },
    "kiran": {
        meaning: "Ray of light",
        culture: "Sanskrit / Hindi",
        feminine: "A woman of brilliant light",
        masculine: "A man of luminous presence"
    },
    "anita": {
        meaning: "Grace / without sin",
        culture: "Sanskrit / Hindi",
        feminine: "A woman of pure grace",
        masculine: "A man of virtue and honour"
    },
    // Thai
    "suriya": {
        meaning: "Sun / radiant",
        culture: "Thai / Sanskrit",
        feminine: "A woman of radiant grace",
        masculine: "A man of brilliant light"
    },

    // ===== ARABIC / MIDDLE EASTERN =====
    "fatima": {
        meaning: "Captivating / weaning",
        culture: "Arabic",
        feminine: "A woman of captivating grace",
        masculine: "A man of profound charisma"
    },
    "ali": {
        meaning: "Exalted / noble",
        culture: "Arabic",
        feminine: "A woman of nobility and grace",
        masculine: "A man of exalted status"
    },
    "layla": {
        meaning: "Night / dark beauty",
        culture: "Arabic",
        feminine: "A woman of mysterious beauty",
        masculine: "A man of depth and mystery"
    },
    "omar": {
        meaning: "Long-lived / flourishing",
        culture: "Arabic",
        feminine: "A woman of enduring grace",
        masculine: "A man of lasting vitality"
    },
    "zara": {
        meaning: "Blossom / flower",
        culture: "Arabic / Hebrew",
        feminine: "A woman of beauty and blossom",
        masculine: "A man of refined elegance"
    },

    // ===== PACIFIC / INDIGENOUS =====
    "moana": {
        meaning: "Ocean / sea",
        culture: "Polynesian",
        feminine: "A woman of deep and boundless spirit",
        masculine: "A man of the great ocean"
    },
    "maui": {
        meaning: "Trickster god / hero",
        culture: "Polynesian",
        feminine: "A woman of cleverness and strength",
        masculine: "A man of heroic spirit"
    },
    "hana": {
        meaning: "Work / craft",
        culture: "Hawaiian",
        feminine: "A woman of skill and artistry",
        masculine: "A man of craft and purpose"
    },
    "keanu": {
        meaning: "Cool breeze",
        culture: "Hawaiian",
        feminine: "A woman of gentle presence",
        masculine: "A man of calm strength"
    },

    // ===== LATIN / ROMAN =====
    "augustus": {
        meaning: "Majestic / revered",
        culture: "Latin / Roman",
        feminine: "A woman of majestic grace",
        masculine: "A man of revered honour"
    },
    "luna": {
        meaning: "Moon",
        culture: "Latin / Roman",
        feminine: "A woman of lunar grace and mystery",
        masculine: "A man of reflective wisdom"
    },
    "sol": {
        meaning: "Sun",
        culture: "Latin / Roman",
        feminine: "A woman of radiant light",
        masculine: "A man of solar power"
    },
    "nova": {
        meaning: "New star",
        culture: "Latin",
        feminine: "A woman of fresh radiance",
        masculine: "A man of new beginnings"
    },
    "aurora": {
        meaning: "Dawn",
        culture: "Latin",
        feminine: "A woman of new beginnings",
        masculine: "A man of emerging light"
    },

    // ===== SLAMIC / PERSIAN =====
    "darius": {
        meaning: "Wealthy / holder of good",
        culture: "Persian",
        feminine: "A woman of noble wealth",
        masculine: "A man of generosity"
    },
    "cyrus": {
        meaning: "Sun / throne",
        culture: "Persian",
        feminine: "A woman of radiant power",
        masculine: "A man of royal light"
    },
    "jasmin": {
        meaning: "Gift from God / jasmine flower",
        culture: "Persian",
        feminine: "A woman of exquisite beauty",
        masculine: "A man of gentle strength"
    },

    // ===== ADD YOUR OWN =====
    // Add more names by copying this template:
    // "name": {
    //     meaning: "Meaning here",
    //     culture: "Culture here",
    //     feminine: "Feminine reading",
    //     masculine: "Masculine reading"
    // },
};
