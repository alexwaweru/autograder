/*
        *File: file_reader.js
        *Author: Alex Waweru
        *Created: 24th March 2019
*/
var fs = require('fs');

var file = {
    /**
             * @function
             * @name read
             * @description Read a file and return its contents
             * @param {String} filename: The name of the file to be read
    */
    read: function(filename){
        contents = fs.readFileSync(filename, 'utf8');
        //console.log(contents);
        return contents;
    }
}

module.exports = file;
// Tests
//file.read('./search.js');
