import fetch from 'isomorphic-unfetch';

type HueResponse = Record<string, any>[];

class HueHTTPClient {
  private defaultHeaders: HeadersInit = {};
  private baseURL: string | undefined;

  async get(
    path: string,
    params: Record<string, any> = {},
  ): Promise<HueResponse> {
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

    const res = await fetch(url, {
      method: 'GET',
      headers: this.defaultHeaders,
      credentials: 'omit',
    });
    const body = await res.json();

    this.checkError(body);

    return body;
  }

  async post(path: string, params: any = {}): Promise<HueResponse> {
    const requestOption: RequestInit = {
      method: 'POST',
      headers: Object.assign({}, this.defaultHeaders, {
        'Content-Type': 'application/json',
      }),
      credentials: 'omit',
    };

    requestOption.body = JSON.stringify(params);

    const res = await fetch(`${this.baseURL}${path}`, requestOption);
    const body = await res.json();

    this.checkError(body);

    return body;
  }

  async delete(path: string): Promise<HueResponse> {
    const requestOption: RequestInit = {
      method: 'DELETE',
      headers: Object.assign({}, this.defaultHeaders, {
        'Content-Type': 'application/json',
      }),
      credentials: 'omit',
    };

    const res = await fetch(`${this.baseURL}${path}`, requestOption);
    const body = await res.json();

    this.checkError(body);

    return body;
  }

  public setBaseURL(baseURL: string) {
    this.baseURL = baseURL;
  }

  private checkError(res: HueResponse): void {
    if (Object.keys(res[0])[0] === 'error') {
      throw new Error(JSON.stringify(res[0].error));
    }
  }
}

const client = new HueHTTPClient();
client.setBaseURL('http://192.168.11.3'); // process.env.HUE_API_HOST as string);

export default client;
