/*
        *File: search.js
        *Author: Alex Waweru
        *Created: 24th March 2019
*/

var pattern_search = {
    /**
             * @function
             * @name badCharHeuristics
             * @description Function gets the character heuristics of a given text
             * @param {String} text: The text whose character heuristics we get
             * @param {Number} size: The length of text
    */
   badCharHeuristics: function(text, size){
        badChar = Array.from(Array(256), () => -1);
        for (var i=0; i<size; i++){
            badChar[text.charCodeAt(i)] = i;
        }

        return badChar;
    },


    /**
             * @function
             * @name badCharHeuristics
             * @description Boyer Moore Algorithm for Pattern Searching
             * @param {String} text: The text in which we search
             * @param {String} pattern: The pattern whose occurences we are searching in a text
    */
    search: function (text, pattern){
        var occurences = 0;
        var m = pattern.length;
        var n = text.length;
        var badChar = this.badCharHeuristics(pattern, m);
        var s = 0;
        while (s <= n-m){
            var j = m - 1;
            while (j >= 0 && pattern[j] == text[s+j]){
                j -= 1;
            }
            if (j < 0){
                occurences += 1;
                if (s+m < n){
                    s += m - badChar[text.charCodeAt(s+m)];
                } else {
                    s += 1;
                }
            } else {
                s += Math.max(1, j-badChar[text.charCodeAt(s+j)]);
            }
        }

        return occurences;
    }
}


module.exports  = pattern_search;

//Test
//console.log(pattern_search.search('This is a test test test', 'test'));
// 3