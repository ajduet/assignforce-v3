/*
 * Filename: batch.ts
 * Creator: August Duet
 * Created: 10/30/19
 * Issue: E/1
 * Desc: Model class used for data transfer
 */
import { Curriculum } from './curriculum';
import { Trainer } from './trainer';
import { Building } from './building';
import { Room } from './room';
import { FinalProject } from './final-project';

export interface Batch {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date;
  curriculum: Partial<Curriculum>;
  trainer: Partial<Trainer>;
  coTrainer: Partial<Trainer>;
  location: Partial<Location>;
  building: Partial<Building>;
  room: Partial<Room>;
  finalProject: Partial<FinalProject>;
}
