const token = require('../lib/util/token');
const test = require('tape');

let tokenList = {
    "First": "1st",
    "Second": "2nd",
    "Third": "3rd",
    "Fourth": "4th",
    "Fifth": "5th",
    "Sixth": "6th",
    "Seventh": "7th",
    "Eigth": "8th",
    "Ninth": "9th",
    "Tenth": "10th",
    "Eleventh": "11th",
    "Twelfth": "12th",
    "Thirteenth": "13th",
    "Fourteenth": "14th",
    "Fifteenth": "15th",
    "Sixteenth": "16th",
    "Seventeenth": "17th",
    "Eighteenth": "18th",
    "Nineteenth": "19th",
    "Twentieth": "20th",
    "Alley": "Aly",
    "Arcade": "Arc",
    "Avenue": "Ave",
    "Bayoo": "Byu",
    "Beach": "Bch",
    "Bluff": "Blf",
    "Bottom": "Btm",
    "Boulevard": "Blvd",
    "Branch": "Br",
    "Bridge": "Brg",
    "Brook": "Brk",
    "Brooks": "Brks",
    "Burg": "Bg",
    "Burgs": "Bgs",
    "Bypass": "Byp",
    "Calle": "Cll",
    "Camp": "Cp",
    "Canyon": "Cyn",
    "Cape": "Cpe",
    "Causeway": "Cswy",
    "Center": "Ctr",
    "Centers": "Ctrs",
    "Circle": "Cir",
    "Circles": "Cirs",
    "Cliff": "Clf",
    "Cliffs": "Clfs",
    "Club": "Clb",
    "Common": "Cmn",
    "Corner": "Cor",
    "Course": "Crse",
    "Court": "Ct",
    "Courts": "Cts",
    "Cove": "Cv",
    "Creek": "Crk",
    "Crescent": "Cres",
    "Crest": "Crst",
    "Crossing": "Xing",
    "Curve": "Curv",
    "Dale": "Dl",
    "Dam": "Dm",
    "Divide": "Dv",
    "Drive": "Dr",
    "Drives": "Drs",
    "East": "E",
    "Estate": "Est",
    "Estates": "Ests",
    "Expressway": "Expy",
    "Extension": "Ext",
    "Extensions": "Exts",
    "Falls": "Fls",
    "Ferry": "Fry",
    "Field": "Fld",
    "Fields": "Flds",
    "Flat": "Flt",
    "Flats": "Flts",
    "Ford": "Frd",
    "Forest": "Frst",
    "Forge": "Frg",
    "Forges": "Frgs",
    "Fork": "Frk",
    "Fort": "Ft",
    "Freeway": "Fwy",
    "Grade": "Grd",
    "Green": "Grn",
    "Harbor": "Hbr",
    "Harbors": "Hbrs",
    "Haven": "Hvn",
    "Heights": "Hts",
    "Highway": "Hwy",
    "Hill": "Hl",
    "Hills": "Hls",
    "Hollow": "Holw",
    "Industrial": "Ind",
    "Interstate": "I",
    "Island": "Is",
    "Islands": "Iss",
    "Junction": "Jct",
    "Junctions": "Jcts",
    "Junior": "Jr",
    "Key": "Ky",
    "Keys": "Kys",
    "Knoll": "Knl",
    "Knolls": "Knls",
    "Lake": "Lk",
    "Lakes": "Lks",
    "Landing": "Lndg",
    "Lane": "Ln",
    "Lieutenant": "Lt",
    "Light": "Lgt",
    "Lights": "Lgts",
    "Loaf": "Lf",
    "Lock": "Lck",
    "Locks": "Lcks",
    "Lodge": "Ldg",
    "Mall": "Mal",
    "Manor": "Mnr",
    "Manors": "Mnrs",
    "Meadow": "Mdw",
    "Meadows": "Mdws",
    "Mill": "Ml",
    "Mission": "Msn",
    "Moorhead": "Mhd",
    "Motorway": "Mtwy",
    "Mountain": "Mtn",
    "Mount": "Mt",
    "Neck": "Nck",
    "Northeast": "NE",
    "North": "N",
    "Northwest": "NW",
    "Orchard": "Orch",
    "Overpass": "Ovps",
    "Parkway": "Pky",
    "Passage": "Psge",
    "Place": "Pl",
    "Plain": "Pln",
    "Plains": "Plns",
    "Plaza": "Plz",
    "Point": "Pt",
    "Points": "Pts",
    "Port": "Prt",
    "Ports": "Prts",
    "Prairie": "Pr",
    "Private": "Pvt",
    "Radial": "Radl",
    "Ranch": "Rnch",
    "Rapid": "Rpd",
    "Rapids": "Rpds",
    "Rest": "Rst",
    "Ridge": "Rdg",
    "Ridges": "Rdgs",
    "River": "Riv",
    "Road": "Rd",
    "Roads": "Rds",
    "Route": "Rte",
    "Saint": "St",
    "Senior": "Sr",
    "Sergeant": "Sgt",
    "Shoal": "Shl",
    "Shoals": "Shls",
    "Shore": "Shr",
    "Shores": "Shrs",
    "Skyway": "Sky",
    "Southeast": "SE",
    "South": "S",
    "Southwest": "SW",
    "Spring": "Spg",
    "Springs": "Spgs",
    "Square": "Sq",
    "Squares": "Sqs",
    "Station": "Sta",
    "Stream": "Strm",
    "Streets": "Sts",
    "Street": "St",
    "Summit": "Smt",
    "Terrace": "Ter",
    "Thoroughfare": "Thfr",
    "Thruway": "Thwy",
    "Trace": "Trce",
    "Trafficway": "Tfwy",
    "Trail": "Trl",
    "Tunnel": "Tunl",
    "Turnpike": "Tpke",
    "Underpass": "Unp",
    "Unions": "Uns",
    "Union": "Un",
    "Valleys": "Vlys",
    "Valley": "Vly",
    "Viaduct": "Via",
    "Views": "Vws",
    "View": "Vw",
    "Villages": "Vlgs",
    "Village": "Vlg",
    "Ville": "Vl",
    "Vista": "Vis",
    "Walkway": "Wlky",
    "West": "W",
    "San Francisco": "sf",
    "Rio": "R",
    "S.": "S"
};
// store an original copy of the tokenList object that we can compare against
const tokenClone = JSON.parse(JSON.stringify(tokenList));

let tokens = token.createReplacer(tokenList);
var tokensR = token.createReplacer(tokenList, {includeUnambiguous: true});

// this is a test function that returns "saint" if the match is at the beginning, "street"
// if it's at the end, or "st" otherwise. In real life you'd want something smarter than this
var tokensRC = token.createReplacer(tokenList, {
    includeUnambiguous: true,
    custom: {
        'St': function() {
            var full = arguments[arguments.length - 1];
            var offset = arguments[arguments.length - 2];
            var match = arguments[0];
            var pre = full.slice(0, offset);
            var post = full.slice(offset + match.length);

            var out;
            if (pre.trim() == "") out = arguments[1] + "saint" + arguments[2];
            else if (post.trim() == "") out = arguments[1] + "street" + arguments[2];
            else out = arguments[0];

            return out;
        }
    }
})

// We use the same tokens object to create both indexer and runtime token replacers.
// Test that indexer-only token replacers don't leak into runtime replacers.
test('createReplacer', (q) => {
    q.deepEqual(tokenList, tokenClone, 'createReplacer does not change original value of tokenList');
    q.end();
});

test('token replacement', (q) => {
    q.deepEqual(token.replaceToken(tokens, 'fargo street northeast, san francisco'),'fargo St NE, sf');
    q.deepEqual(token.replaceToken(tokens, 'coolstreet'),'coolstreet');
    q.deepEqual(token.replaceToken(tokens, 'streetwise'),'streetwise');

    q.deepEqual(
        token.enumerateTokenReplacements(tokens, 'fargo street northeast, san francisco'),
        [
            'fargo St NE, sf',
            'fargo St NE, san francisco',
            'fargo street NE, sf', 'fargo street NE, san francisco',
            'fargo St northeast, sf',
            'fargo St northeast, san francisco',
            'fargo street northeast, sf',
            'fargo street northeast, san francisco'
        ]
    );
    q.deepEqual(token.enumerateTokenReplacements(tokens, 'main st street st st milwaukee lane ln wtf ln'), [
        'main st St st st milwaukee Ln ln wtf ln',
        'main st street st st milwaukee Ln ln wtf ln',
        'main st St st st milwaukee lane ln wtf ln',
        'main st street st st milwaukee lane ln wtf ln'
    ]);
    q.deepEqual(token.enumerateTokenReplacements(tokensR, 'main st street st st milwaukee lane ln wtf ln'), [
        'main st St st st milwaukee Ln ln wtf ln',
        'main st St st st milwaukee Ln ln wtf Lane',
        'main st St st st milwaukee Lane ln wtf Lane',
        'main st St st st milwaukee Lane Lane wtf Lane',
        'main st street st st milwaukee Ln ln wtf ln',
        'main st street st st milwaukee Ln ln wtf Lane',
        'main st street st st milwaukee Lane ln wtf Lane',
        'main st street st st milwaukee Lane Lane wtf Lane',
        'main st St st st milwaukee lane ln wtf ln',
        'main st St st st milwaukee lane Lane wtf ln',
        'main st street st st milwaukee lane ln wtf ln',
        'main st street st st milwaukee lane Lane wtf ln'
    ]);

    q.deepEqual(token.enumerateTokenReplacements(tokens, 'coolstreet'),['coolstreet']);
    q.deepEqual(token.enumerateTokenReplacements(tokens, 'streetwise'),['streetwise']);

    // Demonstrate that replacements can cascade, but our current behavior is
    // quite non-deterministic because token order matters very much for the
    // variants that will actually get hit.
    let ubTokens;
    ubTokens = token.createReplacer({
        'ü': {skipBoundaries: true, skipDiacriticStripping: true, text: 'ue'},
        'uber': 'üb',
    });
    q.deepEqual(token.enumerateTokenReplacements(ubTokens, 'uber cat'),[ 'üb cat', 'uber cat' ], 'does not cascade replacements');
    ubTokens = token.createReplacer({
        'uber': 'üb',
        'ü': {skipBoundaries: true, skipDiacriticStripping: true, text: 'ue'},
    });
    q.deepEqual(token.enumerateTokenReplacements(ubTokens, 'uber cat'),[ 'ueb cat', 'üb cat', 'uber cat' ], 'hits all permutations');


    q.end();
});

test('custom reverse replacement', (q) => {
    q.deepEqual(token.replaceToken(tokensRC, 'st thomas st united states'), 'saint thomas st united states');
    q.deepEqual(token.replaceToken(tokensRC, 'e first st').toLowerCase(), 'east first street');

    q.deepEqual(token.enumerateTokenReplacements(tokensRC, 'st thomas st united states'), [
        'st thomas st united states',
        'saint thomas st united states'
    ]);
    q.deepEqual(token.enumerateTokenReplacements(tokensRC, 'e first st'), [
        'e 1st st',
        'e 1st street',
        'East 1st st',
        'East 1st street',
        'e first st',
        'e first street',
        'East first st',
        'East first street'
    ]);

    q.end();
})

test('replacer', (q) => {

    // deepEqual doesn't compare regex objects intelligently / accurately
    // so we have to roll our own :-&
    let rep = token.createReplacer({
        'Road': 'Rd',
        'Street': 'St'
    });
    var WORD_BOUNDARY = "[\\s\\u2000-\\u206F\\u2E00-\\u2E7F\\\\'!\"#$%&()*+,\\-.\\/:;<=>?@\\[\\]^_`{|}~]";
    q.deepEqual(rep.map((r) => { return r.named; }), [false, false]);
    q.deepEqual(rep.map((r) => { return r.to; }), ['$1Rd$2', '$1St$2']);
    q.deepEqual(
        rep.map((r) => { return r.from.toString(); }),
        [
            '/(' + WORD_BOUNDARY + '|^)Road(' + WORD_BOUNDARY + '|$)/gi',
            '/(' + WORD_BOUNDARY + '|^)Street(' + WORD_BOUNDARY + '|$)/gi'
        ]
    );

    rep = token.createReplacer({
        'Maréchal': 'Mal',
        'Monsieur': 'M'
    });
    q.deepEqual(rep.map((r) => { return r.named; }), [false, false, false]);
    q.deepEqual(rep.map((r) => { return r.to; }), ['$1Mal$2', '$1Mal$2', '$1M$2']);
    q.deepEqual(
        rep.map((r) => { return r.from.toString(); }),
        [
            '/(' + WORD_BOUNDARY + '|^)Maréchal(' + WORD_BOUNDARY + '|$)/gi',
            '/(' + WORD_BOUNDARY + '|^)Marechal(' + WORD_BOUNDARY + '|$)/gi',
            '/(' + WORD_BOUNDARY + '|^)Monsieur(' + WORD_BOUNDARY + '|$)/gi'
        ]
    );

    q.end();
});

test('named/numbered group replacement', (q) => {
    let tokens = token.createReplacer({
        "abc": "xyz",
        "(1\\d+)": "@@@$1@@@",
        "(?<number>2\\d+)": "###${number}###"
    });
    q.deepEqual(token.replaceToken(tokens, 'abc 123 def'), 'xyz @@@123@@@ def');
    q.deepEqual(token.replaceToken(tokens, 'abc 234 def'), 'xyz ###234### def');

    q.deepEqual(token.enumerateTokenReplacements(tokens, 'abc 123 def'), [ 'xyz @@@123@@@ def', 'xyz 123 def', 'abc @@@123@@@ def', 'abc 123 def' ]);
    q.deepEqual(token.enumerateTokenReplacements(tokens, 'abc 234 def'), [ 'xyz ###234### def', 'xyz 234 def', 'abc ###234### def', 'abc 234 def' ]);

    q.end();
});

test('throw on mixed name/num replacement groups', (q) => {
    q.throws(() => {
        token.createReplacer({ "(abc)(?<namedgroup>def)": "${namedgroup}$1" });
    });
    q.end();
});

test('make sure word boundaries work right', function(q) {
    q.deepEqual(token.replaceToken(tokens, 'Rio de Janeiro'), 'R de Janeiro', "phrase-initial token");
    q.deepEqual(token.replaceToken(tokens, 'de rio Janeiro'), 'de R Janeiro', "phrase-medial token");
    q.deepEqual(token.replaceToken(tokens, 'de Janeiro Rio'), 'de Janeiro R', "phrase-terminal token");
    q.deepEqual(token.replaceToken(tokens, 'de-rio!Janeiro'), 'de-R!Janeiro', "punctuation-separated token");
    q.deepEqual(token.replaceToken(tokens, 'deteriorate'), 'deteriorate', "word-medial token (doesn't replace)");
    q.deepEqual(token.replaceToken(tokens, 'Rua Oratório'), 'Rua Oratório', "word-terminal token preceded by accented character (doesn't replace)");
    q.end();
});

test('test skipDiacritics and skipBoundaries flags', function(q) {
    let replacer = token.createReplacer({
        'ä': {skipBoundaries: true, skipDiacriticStripping: true, text: 'ae'},
        'ö': {skipBoundaries: true, skipDiacriticStripping: true, text: 'oe'},
        'ü': {skipBoundaries: true, skipDiacriticStripping: true, text: 'ue'}
    }, {includeUnambiguous: true});
    q.deepEqual(replacer, [
        { named: false, from: /ä/gi, to: 'ae', inverse: false },
        { named: false, from: /ö/gi, to: 'oe', inverse: false },
        { named: false, from: /ü/gi, to: 'ue', inverse: false },
        { named: false, from: /ae/gi, to: 'ä', inverse: true },
        { named: false, from: /oe/gi, to: 'ö', inverse: true },
        { named: false, from: /ue/gi, to: 'ü', inverse: true }
    ], 'forward and reverse replacers get created for complex objects');
    q.end();
});