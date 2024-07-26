import { api } from '@/common/service/api';
import { HealthCheckEndpointSet } from '@/common/service/endpoint';

import type { CheckResponse } from './types';

export class HealthRepository {
  static async check() {
    return api.get<CheckResponse>({
      endpointSet: HealthCheckEndpointSet.healthCheck.check,
    });
  }
}
