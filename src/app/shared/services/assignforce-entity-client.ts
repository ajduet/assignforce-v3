import { RestClient, RestClientConfig, RestClientHeader } from './rest-client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AssignforceEntityClient<T> implements RestClient<T> {
  private baseUrl: string;
  private nextRequestUrl: string;
  private nextRequestBody: any;
  private nextRequestHeaders: RestClientHeader[];

  constructor(private http: HttpClient) {}

  configure(config: RestClientConfig) {
    this.baseUrl = config.urlTemplate;
    this.baseUrl = this.baseUrl.replace(
      `{${config.urlTemplateServiceKey}}`,
      config.servicePath
    );
    this.nextRequestUrl = this.baseUrl;
  }

  get(): T | Observable<T> | Promise<T> | T[] | Observable<T[]> | Promise<T[]> {
    throw new Error('Method not implemented.');
  }
  post(it: T): void | Observable<T> | Promise<T> {
    throw new Error('Method not implemented.');
  }
  put(it: T): void | Observable<T> | Promise<T> {
    throw new Error('Method not implemented.');
  }
  delete(it: T): void | Observable<T> | Promise<T> {
    throw new Error('Method not implemented.');
  }
  addPath(pathValue: string): RestClient<T> {
    const parts = this.splitAndGetUrlParts();

    if (parts.length && parts[0]) {
      parts[0] = `${parts[0]}/${pathValue}`;
      this.nextRequestUrl = parts.join('?');
      return this;
    } else {
      throw new Error('Entity client configuration not complete');
    }
  }
  addQuery(queryKey: string, queryValue: string): RestClient<T> {
    const parts = this.splitAndGetUrlParts();

    if (parts.length) {
      if (parts[1].length > 0) {
        parts[1] = `${parts[1]}&${queryKey}=${queryValue}`;
      } else {
        parts[1] = `${queryKey}=${queryValue}`;
      }
      this.nextRequestUrl = parts.join('?');
      return this;
    } else {
      throw new Error('Entity client configuration is not complete');
    }
  }
  addBody(bodyValue: any): RestClient<T> {
    this.nextRequestBody = bodyValue;
    return this;
  }
  addHeader(header: RestClientHeader): RestClient<T> {
    this.nextRequestHeaders = [...this.nextRequestHeaders, header];
    return this;
  }
  setHeaders(headers: RestClientHeader[]): RestClient<T> {
    this.nextRequestHeaders = headers;
    return this;
  }
  checkNextRequestUrl(
    expected: string
  ): boolean | Observable<boolean> | Promise<boolean> {
    return this.nextRequestUrl === expected;
  }

  private splitAndGetUrlParts(): string[] {
    return this.nextRequestUrl.split('?') || [];
  }
}
