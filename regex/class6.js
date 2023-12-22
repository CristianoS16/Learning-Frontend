// ^ Começa com
// $ termina com

const { cpfs, ips } = require("./base");

// console.log(cpfs.match(/(\d{3}\.){2}\d{3}-\d{2}/g)) // --> get CPFs

const ipRegex = /((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)(\.)){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)/g;

for (let i = 0; i <= 300; i++) {
  const ip = `${i}.${i}.${i}.${i}`;
  console.log(ip, ip.match(ipRegex)); // --> get IPs
}

console.log(ips.match(ipRegex)) // --> get IPs
