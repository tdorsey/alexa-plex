var expect = require('chai').expect;

require('./db-helper.js').dbFramework();
describe('db module', function() {
    before(function() {
        this.db = require('../lib/db');
        this.user = "userid";
        this.player = { "name" : "myplayer"};
    });

    describe('initializeUserRecord', function() {
        it('should return a user record if one was found');
        it('should create a new record if none existed');
        it('should gracefully handle a DB error in the get request');
        it('should gracefully handle a DB error in the put request');
        it.only('should save a player', function(done) {
            var self = this;
            return expect(this.db.updateUserPlayer(this.user, this.player))
                .to.eventually.be.an('object')
                .then(function(updatedUser){
                    expect(self.testdb.queryUser(self.user)).to.eventually.deep.equal(updatedUser.Attributes)
                        .notify(done);
                });
        });
    });

});
