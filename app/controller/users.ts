import { Controller } from 'egg';

export default class UsersController extends Controller {
    public async login() {
        const { ctx } = this;
        ctx.body = {
            code: 20000,
            data: 'admin',
        };
    }

    public async info() {
        const { ctx } = this;
        ctx.body = {
            code: 20000,
            data: {
                roles: [ 'admin' ],
                introduction: 'I am a super administrator',
                avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
                name: 'Super Admin',
            },
        };
    }
}
