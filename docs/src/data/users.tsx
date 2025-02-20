import {sortBy} from 'lodash';
import {registryUsers} from './registry-users';

export type TagType =
  | 'favorite' 
  | 'opensource'
  | 'product'
  | 'design'
  | 'large'
  | 'personal'
  | 'adapter'
  | 'client'
  | 'plugin';

export type User = {
  title: string;
  description: string;
  preview: string | null;
  website: string;
  source: string | null;
  tags: TagType[];
};

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export const Tags: {[type in TagType]: Tag} = {
  favorite: {
    label: 'Favorite',
    description: 'Our favorite projects that you must check out!',
    color: '#e9669e',
  },
  opensource: {
    label: 'Open Source',
    description: 'Open source projects can be useful for inspiration!',
    color: '#39ca30',
  },
  product: {
    label: 'Product',
    description: 'Projects related to commercial products!',
    color: '#dfd545',
  },
  design: {
    label: 'Design',
    description: 'Beautiful sites with custom designs!',
    color: '#a44fb7',
  },
  large: {
    label: 'Large',
    description: 'Large sites with lots of content!',
    color: '#8c2f00',
  },
  personal: {
    label: 'Personal',
    description: 'Personal websites and portfolios',
    color: '#14cfc3',
  },
  adapter: {
    label: 'Adapter',
    description: 'Database and storage adapters',
    color: '#bf4040',
  },
  client: {
    label: 'Client',
    description: 'Platform and service clients',
    color: '#4040bf', 
  },
  plugin: {
    label: 'Plugin',
    description: 'Feature and integration plugins',
    color: '#40bf40',
  }
};

export const TagList = Object.keys(Tags) as TagType[];

// Static entries (optional - you can add manual entries here)
const staticUsers: User[] = [];

// Combine static and registry users
export const Users: User[] = [...staticUsers, ...registryUsers];

function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
