"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.read = exports.write = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
function getPath() {
    return path_1.resolve(__dirname, '..', 'resources', 'data.json');
}
function getJson() {
    const path = getPath();
    let json = {};
    if (fs_1.existsSync(path)) {
        json = JSON.parse(fs_1.readFileSync(path, 'utf-8'));
    }
    return json;
}
function writeJson(data) {
    const path = getPath();
    fs_1.writeFileSync(path, JSON.stringify(data));
}
function write(data) {
    const current = getJson();
    writeJson({
        ...current,
        ...data,
    });
}
exports.write = write;
function read(key) {
    return getJson()[key];
}
exports.read = read;
