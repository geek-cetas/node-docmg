var pool = require('./conn/pool');


var initialize = module.exports = function() {
    pool.init();
}
