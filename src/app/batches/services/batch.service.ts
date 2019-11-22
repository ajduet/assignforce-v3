import { Injectable } from '@angular/core';
import { AssignforceEntityClientFactory } from 'src/app/shared/services/assignforce-entity-client-factory.service';
import { AssignforceEntityClient } from 'src/app/shared/services/assignforce-entity-client';
import { Batch } from 'src/app/shared/models';
import { RestClientConfig } from 'src/app/shared/services/rest-client';
import { environment } from 'src/environments/environment';

@Injectable()
export class BatchService {
  private batchesClient: AssignforceEntityClient<Batch>;
  private clientConfig: RestClientConfig = {
    urlTemplate: environment.assignforceClientConfigOpts.apiBaseUrl,
    urlTemplateServiceKey: 'service',
    servicePath: 'batches',
  };
  constructor(private clientFactory: AssignforceEntityClientFactory) {
    this.batchesClient = clientFactory.getInstance<Batch>(this.clientConfig);
  }
}
