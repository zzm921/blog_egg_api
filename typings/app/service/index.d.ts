// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArticles from '../../../app/service/Articles';
import ExportTest from '../../../app/service/Test';

declare module 'egg' {
  interface IService {
    articles: ExportArticles;
    test: ExportTest;
  }
}
