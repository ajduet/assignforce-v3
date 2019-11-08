import { Skill } from './skill';

/*
 * Filename: batch.ts
 * Creator: August Duet
 * Created: 10/30/19
 * Issue: E/1
 * Desc: Model class used for data transfer
 */
export interface Trainer {
  id: number;
  firstName: string;
  lastName: string;
  skills: Partial<Skill[]>;
  isActive: boolean;
  resume: string;
  preferredLocation: Partial<Location>;
  email: string;
}
