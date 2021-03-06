import { Skill } from './skill';

/*
 * Filename: batch.ts
 * Creator: August Duet
 * Created: 10/30/19
 * Issue: E/1
 * Desc: Model class used for data transfer
 */
export interface Curriculum {
  id: number;
  name: string;
  isActive: boolean;
  isCore: boolean;
  skills: Partial<Skill[]>;
}
