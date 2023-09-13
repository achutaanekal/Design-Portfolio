import AboutScreen from '@/screens/about/AboutScreen';
import HomeScreen from '@/screens/home/HomeScreen';
import BusinessProjectScreen from '@/screens/projects/BusinessProjectScreen';
import DecentralizeProjectScreen from '@/screens/projects/DecentralizeProjectScreen';
import DiscoveryProjectScreen from '@/screens/projects/DiscoveryProjectScreen';
import FinancialProjectScreen from '@/screens/projects/FinancialProjectScreen';
import SecurityProjectScreen from '@/screens/projects/SecurityProjectScreen';

export enum RouteNames {
  Home = 'home',
  About = 'about',
  SecurityProject = 'securityProject',
  BusinessProject = 'businessProject',
  FinancialProject = 'financialProject',
  DiscoveryProject = 'discoveryProject',
  DecentralizeProject = 'decentralizeProject',
}

export enum RoutePaths {
  Home = '/',
  About = '/about',
  SecurityProject = '/project-security',
  BusinessProject = '/project-business',
  FinancialProject = '/project-financial',
  DiscoveryProject = '/project-discovery',
  DecentralizeProject = '/project-decentralize',
}

export const routes = [
  { name: RouteNames.Home, path: RoutePaths.Home, component: HomeScreen },
  { name: RouteNames.About, path: RoutePaths.About, component: AboutScreen },
];

export const projectRoutes = [
  {
    name: RouteNames.SecurityProject,
    path: RoutePaths.SecurityProject,
    component: SecurityProjectScreen,
  },
  {
    name: RouteNames.BusinessProject,
    path: RoutePaths.BusinessProject,
    component: BusinessProjectScreen,
  },
  {
    name: RouteNames.FinancialProject,
    path: RoutePaths.FinancialProject,
    component: FinancialProjectScreen,
  },
  {
    name: RouteNames.DiscoveryProject,
    path: RoutePaths.DiscoveryProject,
    component: DiscoveryProjectScreen,
  },
  {
    name: RouteNames.DecentralizeProject,
    path: RoutePaths.DecentralizeProject,
    component: DecentralizeProjectScreen,
  },
];
