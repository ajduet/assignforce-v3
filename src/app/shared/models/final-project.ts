import { Trainer } from './trainer';

/*
 * Filename: batch.ts
 * Creator: August Duet
 * Created: 10/30/19
 * Issue: E/1
 * Desc: Model class used for data transfer
 */
export interface FinalProject {
  id: number;
  name: string;
  owner: Partial<Trainer>;
  coOwner: Partial<Trainer>;
}
