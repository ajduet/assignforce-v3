import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

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

export interface RestClient<T> {
  configure(config: RestClientConfig);
  get<X extends T>(): Observable<X> | Promise<X> | X;
  get<X extends T[]>(): Observable<X[]> | Promise<X[]> | X[];
  post(it: T): Observable<T> | Promise<T> | void;
  put(it: T): Observable<T> | Promise<T> | void;
  delete(): Observable<T> | Promise<T> | void;
  addPath(pathValue: string): RestClient<T>;
  addQuery(queryKey: string, queryValue: string): RestClient<T>;
  setHeaders(headers: HttpHeaders): RestClient<T>;
  checkNextRequestUrl(
    expected: string
  ): boolean | Observable<boolean> | Promise<boolean>;
}
