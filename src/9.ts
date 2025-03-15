// FinalProject.ts
import { User } from '../user/User';
import { Project } from './Project';

export interface FinalProject {
  user: User;
  project: Project;
}

export const FinalProject = (): FinalProject => ({
  user: User(),
  project: Project(),
});
