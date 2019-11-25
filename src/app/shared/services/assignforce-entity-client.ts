import { RestClient, RestClientConfig } from './rest-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AssignforceEntityClient<T> implements RestClient<T> {
  private baseUrl: string;
  private nextRequestUrl: string;
  private nextRequestHeaders: HttpHeaders;

  constructor(private http: HttpClient) {}

  configure(config: RestClientConfig) {
    this.baseUrl = config.urlTemplate;
    this.baseUrl = this.baseUrl.replace(
      `{${config.urlTemplateServiceKey}}`,
      config.servicePath
    );
    this.nextRequestUrl = this.baseUrl;
  }

  get<X>(): Observable<X> {
    const headers = this.nextRequestHeaders;
    const o = this.http.get<X>(this.nextRequestUrl, {
      headers,
    });
    this.reset();
    return o;
  }

  post(it: T): Observable<T> {
    const headers = this.nextRequestHeaders;

    const o = this.http.post<T>(this.nextRequestUrl, it, {
      headers,
    });
    this.reset();
    return o;
  }
  put(it: T): Observable<T> {
    const headers = this.nextRequestHeaders;

    const o = this.http.put<T>(this.nextRequestUrl, it, {
      headers,
    });
    this.reset();
    return o;
  }
  delete(): void | Observable<T> | Promise<T> {
    const headers = this.nextRequestHeaders;

    const o = this.http.delete<T>(this.nextRequestUrl, {
      headers,
    });
    this.reset();
    return o;
  }
  addPath(pathValue: string): AssignforceEntityClient<T> {
    const parts = this.splitAndGetUrlParts();

    if (parts.length && parts[0]) {
      parts[0] = `${parts[0]}/${pathValue}`;
      this.nextRequestUrl = parts.join('?');
      return this;
    } else {
      throw new Error('Entity client configuration not complete');
    }
  }
  addQuery(queryKey: string, queryValue: string): AssignforceEntityClient<T> {
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

  setHeaders(headers: HttpHeaders): AssignforceEntityClient<T> {
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

  private reset() {
    this.nextRequestUrl = this.baseUrl;
    this.nextRequestHeaders = null;
  }
}
