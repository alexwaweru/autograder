const pattern_search = require('./../bin/search');
const file_reader = require('./../bin/file_reader');

var similarity_in_code = {
        /**
                 * @function
                 * @name similarity_in_code
                 * @description Function gets the similarity in code word for word between two source code files
                 * @param {String} fileA: One of the two source code file's name
                 * @param {String} fileB: One of the two source code file's name
        */
    similarity: function(fileA, fileB){
        var fileA_contents = file_reader.read(fileA);
        var fileB_contents = file_reader.read(fileB);
        fileA_contents = fileA_contents.replace(/[^a-zA-Z ]/g, " ");
        fileB_contents = fileB_contents.replace(/[^a-zA-Z ]/g, " ");

        var fileA_array = [...new Set(fileA_contents.split(/\s+/))];
        var fileB_array = [...new Set(fileB_contents.split(/\s+/))];

        var fileA_size = fileA_array.length;

        var similarity_index = 0
        for (var i = 0; i < fileA_size; i++){
            if (fileA_array[i].length > 4){
                similarity_index += pattern_search.search(fileB_contents, fileA_array[i]);
            }
        }

        similarity_index = similarity_index/ fileA_size;

        return similarity_index
    }
}


module.exports = similarity_in_code;

// Tests
console.log(similarity_in_code.similarity('file1.txt', 'file2.txt'));
