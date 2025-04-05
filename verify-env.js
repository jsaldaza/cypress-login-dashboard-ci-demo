const { execSync } = require("child_process");

function check(command, name) {
  try {
    execSync(command, { stdio: "ignore" });
    console.log(` ${name} is installed`);
  } catch {
    console.error(`${name} is missing. Please install it.`);
    process.exit(1);
  }
}

console.log("Verifying system requirements...\n");

check("java -version", "Java");
check("allure --version", "Allure CLI");

console.log("\nEnvironment is ready. You're good to go!\n");
