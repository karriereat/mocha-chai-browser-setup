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

describe('Asynchronous Code', function() {
    describe('#getIPAddress()', function() {
        it('should get and parse without error', function(done) {
            getIP(function(json) {
                json.should.have.property('ip');
                done();
            });
        });
    });
});
