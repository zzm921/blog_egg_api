import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);

  router.resources('articles', '/api/articles', controller.articles);

  router.post('/api/user/login', controller.users.login);
  router.get('/api/user/info', controller.users.info);
};
