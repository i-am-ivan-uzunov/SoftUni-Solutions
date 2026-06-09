function solve(input) {
  const parts = ["Method", "URI", "Version", "Message"];
  const methods = ["GET", "POST", "DELETE", "CONNECT"];
  const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];

  const keys = Object.keys(input);

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].toLocaleLowerCase() !== keys[i]) {
      throw new Error(`Invalid request header: Invalid ${parts[i]}`);
    }
  }

  if (!methods.includes(input.method)) {
    throw new Error(`Invalid request header: Invalid Method`);
  }

  if (/[^A-Za-z0-9.]/g.test(input.uri) || input.uri === "") {
    throw new Error(`Invalid request header: Invalid URI`);
  }

  if (!versions.includes(input.version)) {
    throw new Error(`Invalid request header: Invalid Version`);
  }

  if (!/^[^<>\&&\\'’"‘“]*$/.test(input.message)) {
    throw new Error(`Invalid request header: Invalid Message`);
  }

  return input;
}

// solve({
//   method: "GET",
//   uri: "svn.public.catalog",
//   version: "HTTP/1.1",
//   message: "",
// });

// solve({
//   method: "OPTIONS",
//   uri: "git.master",
//   version: "HTTP/1.1",
//   message: "-recursive",
// });

// solve({
//   method: "POST",
//   uri: "home.bash",
//   message: "rm -rf /*",
// });

const obj = solve({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
});

console.log(obj);

// expect(obj.method).to.equal('GET', 'Object was modified.');
// expect(obj.uri).to.equal('svn.public.catalog', 'Object was modified.');
// expect(obj.version).to.equal('HTTP/1.1', 'Object was modified.');
// expect(obj.message).to.equal('', 'Object was modified.');
