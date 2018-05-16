describe("ChangeHandler", function() {

    // Constructor tests
    it("initializes with the given amountDue", function() {
        //Arrange
        const vendor = new ChangeHandler({
            amountDue: 25,
        });
        //Assert
        expect(vendor.amountDue).toBe(25);
    });

    it("initializes cashTendered to 0", function() {
        //Arrange
        const vendor = new ChangeHandler({
            cashTendered: 0,
        });
        //Assert
        expect(vendor.cashTendered).toBe(0);
    });

    // Insert coin tests
    it("insert quarter adds 25", function() {
        //Arrange
        const vendor = new ChangeHandler({
            cashTendered: 0
        });
        //Act
        vendor.insertCoin("quarter");
        //Assert
        expect(vendor.cashTendered).toBe(25);
    });

    it("insert dime adds 10", function() {
        //Arrange
        const vendor = new ChangeHandler({
            cashTendered: 0
        });
        //Act
        vendor.insertCoin("dime");
        //Assert
        expect(vendor.cashTendered).toBe(10);
    });

    it("insert nickel adds 5", function() {
        //Arrange
        const vendor = new ChangeHandler({
            cashTendered: 0
        });
        //Act
        vendor.insertCoin("nickel");
        //Assert
        expect(vendor.cashTendered).toBe(5);
    });

    it("insert penny adds 1", function() {
        //Arrange
        const vendor = new ChangeHandler({
            cashTendered: 0
        });
        //Act
        vendor.insertCoin("penny");
        //Assert
        expect(vendor.cashTendered).toBe(1);
    });

    it("subsequent coins continue to add value", function() {
        
    });

    // isPaymentSufficient tests
    it("isPaymentSufficient returns true when enough cashTendered", function() {
        
    });

    it("isPaymentSufficient returns false when not enough cashTendered", function() {
        
    });
    
    it("isPaymentSufficient returns true when exact cashTendered", function() {
        
    });

    // Give change tests
    it("giveChange returns no coins when exact change", function() {
        
    });

    it("giveChange returns correct coins for 10", function() {
        
    });

    it("giveChange returns correct coins for 27", function() {
        
    });

    it("giveChange returns correct coins for 68", function() {
        
    });

    it("giveChange returns correct coins for 15", function() {
        
    });

    it("giveChange returns correct coins for 2", function() {
        
    });

});