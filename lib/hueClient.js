"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const isomorphic_unfetch_1 = __importDefault(require("isomorphic-unfetch"));
class HueHTTPClient {
    constructor() {
        this.defaultHeaders = {};
    }
    async get(path, params = {}) {
        const getParams = new URLSearchParams();
        for (const key in params) {
            const value = params[key];
            if (value !== undefined) {
                getParams.set(key, params[key]);
            }
        }
        let url = `${this.baseURL}${path}`;
        if (getParams.toString() !== '') {
            url = `${url}?${getParams.toString()}`;
        }
        const res = await isomorphic_unfetch_1.default(url, {
            method: 'GET',
            headers: this.defaultHeaders,
            credentials: 'omit',
        });
        const body = await res.json();
        this.checkError(body);
        return body;
    }
    async post(path, params = {}) {
        const requestOption = {
            method: 'POST',
            headers: Object.assign({}, this.defaultHeaders, {
                'Content-Type': 'application/json',
            }),
            credentials: 'omit',
        };
        requestOption.body = JSON.stringify(params);
        const res = await isomorphic_unfetch_1.default(`${this.baseURL}${path}`, requestOption);
        const body = await res.json();
        this.checkError(body);
        return body;
    }
    async delete(path) {
        const requestOption = {
            method: 'DELETE',
            headers: Object.assign({}, this.defaultHeaders, {
                'Content-Type': 'application/json',
            }),
            credentials: 'omit',
        };
        const res = await isomorphic_unfetch_1.default(`${this.baseURL}${path}`, requestOption);
        const body = await res.json();
        this.checkError(body);
        return body;
    }
    setBaseURL(baseURL) {
        this.baseURL = baseURL;
    }
    checkError(res) {
        if (Object.keys(res[0])[0] === 'error') {
            throw new Error(JSON.stringify(res[0].error));
        }
    }
}
const client = new HueHTTPClient();
client.setBaseURL('http://192.168.11.3');
exports.default = client;
