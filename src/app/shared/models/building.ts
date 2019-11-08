import { Room } from './room';

/*
 * Filename: batch.ts
 * Creator: August Duet
 * Created: 10/30/19
 * Issue: E/1
 * Desc: Model class used for data transfer
 */

export interface Building {
  id: number;
  name: string;
  location: Partial<Location>;
  rooms: Partial<Room[]>;
}
