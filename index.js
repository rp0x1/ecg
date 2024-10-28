#!/usr/bin/env node
import fs from "node:fs";
import http from "node:http";

const note = process.argv[2] || undefined;
const newNote = {
    content: note,
    id: Date.now()
}

console.log(newNote);