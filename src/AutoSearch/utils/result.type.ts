import { StringifyOptions } from 'querystring';

export enum SearchTypeEnum {
  POPULAR = 'popular',
  NEW = 'new',
  LOWERPRICE = 'lowerprice',
}

export const SearchTypeMapper = {
  [SearchTypeEnum.POPULAR]: 'BEST',
  [SearchTypeEnum.NEW]: 'NEW',
  [SearchTypeEnum.LOWERPRICE]: 'MinPrice',
};

export interface Result {
  imageSrc: string;
  model: string;
  spec: string[];
}
