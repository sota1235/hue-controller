import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';

type Body = number | string | boolean;
type JSONData = Record<string, Body>;

function getPath(): string {
  return resolve(__dirname, '..', 'resources', 'data.json');
}

function getJson(): JSONData {
  const path = getPath();
  let json: JSONData = {};

  if (existsSync(path)) {
    json = JSON.parse(readFileSync(path, 'utf-8'));
  }

  return json;
}

function writeJson(data: JSONData): void {
  const path = getPath();
  writeFileSync(path, JSON.stringify(data));
}

export function write(data: JSONData) {
  const current = getJson();

  writeJson({
    ...current,
    ...data,
  });
}

export function read(key: string): Body | undefined {
  return getJson()[key];
}
