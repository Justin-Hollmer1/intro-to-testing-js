// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane"), returns "Hello, Jane!"', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex"), returns "Hello, Alex!"', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat"), returns "Hello, Pat!"', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('sayHello(), returns "Hello, World!', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true), returns "Hello, World!', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false), returns "Hello, World!', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('sayHello(null), returns "Hello, World!', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('sayHello("") returns "Hello, World!', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('sayHello(5) returns "Please enter a non-numeric value."', function() {
        expect(sayHello(5)).toBe("Please enter a non-numeric value.");
    });
    it('sayHello("5") returns "Please enter a non-numeric value."', function() {
        expect(sayHello("5")).toBe("Please enter a non-numeric value.");
    });
});

describe("isFive", function() {
    it('is a defined function', function() {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean regardless of input', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('isFive(5) should return true', function() {
        expect(isFive(5)).toBe(true);
    });
    it('isFive("5") should return true', function() {
        expect(isFive("5")).toBe(true);
    });
});

describe("isEven", function() {
    it('is a defined function', function() {
        expect(typeof isEven).toBe("function");
    });
    it('returns a boolean regardless of input', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('isEven(2) returns true', function() {
        expect(isEven(2)).toBe(true);
    });
    it('isEven(-4) returns true', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('isEven(3) returns false', function() {
        expect(isEven(3)).toBe(false);
    });
    it('isEven("banana") returns false', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('isEven("8") returns true', function() {
        expect(isEven("8")).toBe(true);
    });
    it('isEven(infinity) returns false', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('isEven(true) returns false', function() {
        expect(isEven(true)).toBe(false);
    });
    it('isEven(false) returns false', function() {
        expect(isEven(false)).toBe(false);
    });
    it('isEven() returns false', function() {
        expect(isEven()).toBe(false);
    });
});

describe("isVowel", function() {
    it('isVowel is a defined function', function() {
        expect(typeof isVowel).toBe("function");
    });
    it('always returns a boolean', function (){
        expect(typeof isVowel()).toBe("boolean");
    });
    it('isVowel("a") returns true', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('isVowel("A") returns true', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('isVowel("y") returns false', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('isVowel(4) returns false', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('isVowel(true) returns false', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('isVowel(false) returns false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('isVowel("banana") returns false', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('isVowel() returns false', function() {
        expect(isVowel()).toBe(false);
    });
});

















