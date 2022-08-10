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
})