const { default: { stream } } = require("got");
const { createWriteStream } = require("fs");
const { execSync } = require("child_process");

const url = "https://cdn.darrennathanael.com/jars/Lavalink.jar";

const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("node_modules/jdk-13/bin/java -jar Lavalink.jar", { stdio: "inherit" });
    });
};

start();
