function getIP(callback) {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://ip.jsontest.com/', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            callback(JSON.parse(request.responseText));
        } else {
            throw request.status;
        }
    };

    request.onerror = function() {
        throw 'Error';
    };

    request.send();
}

describe('Ajax', function() {
    describe('JSON', function() {
        it('should request and parse without error', function(done) {
            getIP(function(json) {
                expect(json).to.have.property('ip');
                done();
            });
        });
    });
});
