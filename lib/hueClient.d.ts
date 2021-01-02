declare type HueResponse = Record<string, any>[];
declare class HueHTTPClient {
    private defaultHeaders;
    private baseURL;
    get(path: string, params?: Record<string, any>): Promise<HueResponse>;
    post(path: string, params?: any): Promise<HueResponse>;
    delete(path: string): Promise<HueResponse>;
    setBaseURL(baseURL: string): void;
    private checkError;
}
declare const client: HueHTTPClient;
export default client;
