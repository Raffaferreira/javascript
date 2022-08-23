

function sum(a, b) {
    return a + b;
}

module.exports = sum;

exports.log = {
    console: function(msg) {
        console.log(msg);
    },
    file: function(msg) {
        // log to file here
      }
}