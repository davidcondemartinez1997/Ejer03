var suma = require('../index.js');
describe("A suite is just a function", function() {
	var resultado;
  it("and so is a spec", function() {
    resultado = suma.sumar(5,7);

    expect(resultado).toBe(12);
  });
});
