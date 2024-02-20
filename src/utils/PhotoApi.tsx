interface Config {
  url: string;
  headers: {
    [key: string]: string;
  };
}

class PhotoApi {
  private _url: string;
  private _headers: {
    [key: string]: string;
  };

  constructor(config: Config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  private _checkResponse(res: Response): Promise<any> {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject('An error has occurred');
  }

  public searchPhoto(keyword: string): Promise<any> {
    return fetch(`${this._url}search?query=${keyword}&per_page=80`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  public fetchStartPhotos(): Promise<any> {
    return fetch(`${this._url}curated?per_page=13`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const photoApi = new PhotoApi({
  url: 'https://api.pexels.com/v1/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'zq95MtbKLDwXRldJIq1QXrV0hhR99pfSwHVkWZiQO6byYJyvH1OYv77Q',
  },
});

export default photoApi;
