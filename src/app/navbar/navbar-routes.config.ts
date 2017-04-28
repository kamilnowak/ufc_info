import { MenuType, RouteInfo } from './navbar.metadata';

export const ROUTES: RouteInfo[] = [
  { path: '', title: 'UFC INFO', menuType: MenuType.BRAND },
  { path: 'news', title: 'News', menuType: MenuType.LEFT },
  { path: 'fighters', title: 'Fighters', menuType: MenuType.RIGHT },
  { path: 'events', title: 'Events', menuType: MenuType.RIGHT },
  { path: 'media', title: 'Media', menuType: MenuType.RIGHT }
];
