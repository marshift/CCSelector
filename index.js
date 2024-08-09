// Requires
const fs = require("fs");
const path = require("path");
const cwd = process.cwd();

// HTML elements
const entrypointSelect = document.getElementById("entrypoint-select");
const reloadButton = document.getElementById("reload-button");
const startButton = document.getElementById("start-button");

/** Get the absolute path from a Dirent */
const getFullPath = (e) => path.join(e.path, e.name);

/** Get the absolute paths of all entrypoints */
const getEntrypoints = (contents) => contents
    .filter((e) => e.name.endsWith(".html"))
    .map(getFullPath);

/** Walk a directory tree for valid entrypoints */
function walk(dir, found) {
    // Read current dir
    const contents = fs.readdirSync(dir, { withFileTypes: true });

    // First see if we have any in the current dir
    const entries = getEntrypoints(contents);
    if (entries.length !== 0) found.push(...entries);

    // Then, walk child dirs
    const children = contents.filter((c) => c.isDirectory());
    children.forEach((dir) => walk(getFullPath(dir), found));
}

// Find entrypoints, starting in the CWD
const found = [];
walk(cwd, found);

// Add found entrypoints to selector
found.forEach((path) => {
    const elem = document.createElement("option");
    elem.text = path;
    entrypointSelect.add(elem);
})

// Make buttons do things
reloadButton.addEventListener("click", () => window.location.reload());
startButton.addEventListener("click", () => window.location.replace(entrypointSelect.value.slice(cwd.length)));
