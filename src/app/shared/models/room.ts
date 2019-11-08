import { Building } from './building';

/*
 * Filename: batch.ts
 * Creator: August Duet
 * Created: 10/30/19
 * Issue: E/1
 * Desc: Model class used for data transfer
 */
export interface Room {
  id: number;
  name: string;
  build: Partial<Building>;
}
