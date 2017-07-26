declare class Curl {
  static option: {
    ACCEPT_ENCODING: number,
    CAINFO: number,
    COOKIE: number,
    COOKIEFILE: number,
    COOKIELIST: number,
    CUSTOMREQUEST: number,
    DEBUGFUNCTION: number,
    FOLLOWLOCATION: number,
    HTTPAUTH: number,
    HTTPGET: number,
    HTTPHEADER: number,
    HTTPPOST: number,
    INFILESIZE: number,
    KEYPASSWD: number,
    NOBODY: number,
    NOPROGRESS: number,
    NOPROXY: number,
    PASSWORD: number,
    POST: number,
    POSTFIELDS: number,
    PROXY: number,
    PROXYAUTH: number,
    READDATA: number,
    SSLCERT: number,
    SSLCERTTYPE: number,
    SSLKEY: number,
    SSL_VERIFYHOST: number,
    SSL_VERIFYPEER: number,
    TIMEOUT_MS: number,
    UNIX_SOCKET_PATH: number,
    UPLOAD: number,
    URL: number,
    USERAGENT: number,
    USERNAME: number,
    VERBOSE: number,
    XFERINFOFUNCTION: number,
  };

  static auth: {
    NTLM: string,
    DIGEST: string,
    BASIC: string,
    ANY: string
  };

  static code: {
    CURLE_ABORTED_BY_CALLBACK: string
  };

  static info: {
    EFFECTIVE_URL: string,
    SIZE_DOWNLOAD: string,
    TOTAL_TIME: string,
    debug: {
      SSL_DATA_IN: string,
      SSL_DATA_OUT: string,
    }
  };

  setOpt: (option: number, ...args: Array<any>) => void;
  getInfo: (option: string, ...args: Array<any>) => any;
  perform: () => void;
  close: () => void;
  on: (event: string, callback: Function) => void;
}

declare module 'node-libcurl' {
  declare module.exports: {
    Curl: typeof Curl
  }
}
