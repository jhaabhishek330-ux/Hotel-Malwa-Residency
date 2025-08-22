const { exec } = require("child_process");
const os = require("os");
const qrcode = require("qrcode-terminal");

// Get local IP address
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (net.family === "IPv4" && !net.internal) {
        return net.address;
      }
    }
  }
  return "127.0.0.1";
}

const ip = getLocalIP();
const url = `http://${ip}:4200`;

console.log(`🚀 Starting Angular on ${url}`);
console.log("📱 Scan this QR code on your phone:");

qrcode.generate(url, { small: true });

// Run Angular serve
const child = exec("ng serve --host 0.0.0.0 --port 4200", { stdio: "inherit" });

child.stdout.on("data", data => console.log(data));
child.stderr.on("data", data => console.error(data));
