export interface NavTab {
  name: string;
  route: string;
  roles: Array<string>;
  subTabs?: Array<NavTab>;
}
