import { Observable } from 'rxjs';

/*
 * Filename: http-client.ts
 * Creator: August Duet
 * Created: 11/22/19
 * Issue: N/A
 * Desc: Give abstraction for services to interface with remote Http services
 * ...
 */

export interface RestClientConfig {
  urlTemplate: string;
  urlTemplateServiceKey: string;
  servicePath: string;
}

export interface RestClientHeader {
  [key: string]: string;
}
export interface RestClient<T> {
  configure(config: RestClientConfig);
  get(): T | Observable<T> | Promise<T> | T[] | Observable<T[]> | Promise<T[]>;
  post(it: T): Observable<T> | Promise<T> | void;
  put(it: T): Observable<T> | Promise<T> | void;
  delete(it: T): Observable<T> | Promise<T> | void;
  addPath(pathValue: string): RestClient<T>;
  addQuery(queryKey: string, queryValue: string): RestClient<T>;
  addBody(bodyValue: any): RestClient<T>;
  addHeader(header: RestClientHeader): RestClient<T>;
  setHeaders(headers: RestClientHeader[]): RestClient<T>;
  checkNextRequestUrl(
    expected: string
  ): boolean | Observable<boolean> | Promise<boolean>;
}
