const fs = require('fs');
const value_1 = parseInt(process.argv[2]);
const value_2 = parseInt(process.argv[3]);

(async () => {
  const bytes = fs.readFileSync(
    __dirname + '/AddInt.wasm'
  );
  const obj = await WebAssembly.instantiate(
    new Uint8Array(bytes)
  );
  const AddInt = obj.instance.exports.AddInt;
  let add_value = AddInt(value_1, value_2);
  console.log(`${value_1} + ${value_2} = ${add_value}`);
})();
