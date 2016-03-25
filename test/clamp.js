function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

describe('Synchronous Code', function() {
    describe('#clamp()', function () {
        it('should return the number', function () {
            expect(clamp(5, 0, 10)).to.equal(5);
        });
        it('should return max if the number is larger', function () {
            expect(clamp(20, 0, 10)).to.equal(10);
        });
        it('should return min if the number is smaller', function () {
            expect(clamp(-20, 0, 10)).to.equal(0);
        });
    });
});
