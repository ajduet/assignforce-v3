import { Injectable } from '@angular/core';
import { AssignforceEntityClientFactory } from 'src/app/shared/services/assignforce-entity-client-factory.service';
import { AssignforceEntityClient } from 'src/app/shared/services/assignforce-entity-client';
import { Batch } from 'src/app/shared/models';
import {
  RestClientConfig,
  RestClientHeader,
} from 'src/app/shared/services/rest-client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';

@Injectable()
export class BatchService {
  private batchesClient: AssignforceEntityClient<Batch>;

  private clientConfig: RestClientConfig = {
    urlTemplate: environment.assignforceClientConfigOpts.apiBaseUrl,
    urlTemplateServiceKey:
      environment.assignforceClientConfigOpts.serviceTemplateKey,
    servicePath: environment.assignforceClientConfigOpts.batchesServicePath,
  };
  constructor(private clientFactory: AssignforceEntityClientFactory) {
    this.batchesClient = clientFactory.getInstance<Batch>(this.clientConfig);
  }

  getAllBatches(): Observable<Batch[]> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');

    return this.batchesClient.setHeaders(headers).get();
  }

  getByid(id: number): Observable<Batch> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Accept', 'application/json');

    return this.batchesClient
      .addPath(`${id}`)
      .setHeaders(headers)
      .get();
  }

  saveNewBatch(batch: Batch): Observable<Batch> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.batchesClient.setHeaders(headers).post(batch);
  }

  saveUpdatedBatch(batch: Batch): Observable<Batch> {
    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.batchesClient.setHeaders(headers).put(batch);
  }
}
