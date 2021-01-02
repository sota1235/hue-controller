declare type Body = number | string | boolean;
declare type JSONData = Record<string, Body>;
export declare function write(data: JSONData): void;
export declare function read(key: string): Body | undefined;
export {};
