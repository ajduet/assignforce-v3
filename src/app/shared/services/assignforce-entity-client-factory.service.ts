import { Injectable } from '@angular/core';
import { RestClientConfig } from './rest-client';
import { HttpClient } from '@angular/common/http';
import { AssignforceEntityClient } from './assignforce-entity-client';

@Injectable()
export class AssignforceEntityClientFactory {
  constructor(private http: HttpClient) {}
  getInstance<T>(config: RestClientConfig): AssignforceEntityClient<T> {
    const instance = new AssignforceEntityClient<T>(this.http);
    instance.configure(config);
    return instance;
  }
}
