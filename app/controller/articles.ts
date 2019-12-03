import { Controller } from 'egg';
// import { IArticles } from '../model/Articles';
export default class ArticlesController extends Controller {
    // 获取所有
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.articles.getList();
    }

    // get 新增
    public async new() {
        const { ctx } = this;
        const { title, content, author, description, head_image, tagid } = ctx.query;
        const result = await ctx.service.articles.create({ title, content, author, description, head_image, tagid });
        ctx.body = result;
    }

    // post 新增
    public async create() {
        const { ctx } = this;
        const { title, content, author, description, head_image, tagid } = ctx.request.body;
        const result = await ctx.service.articles.create({ title, content, author, description, head_image, tagid });
        ctx.body = result;
    }

    // 获取单个
    public async show() {
        const { ctx } = this;
        const { id } = ctx.params;
        ctx.body = await ctx.service.articles.show(id);
    }

    // get 修改
    public async edit() {
        const { ctx } = this;
        const { id } = ctx.params;
        const { title, content, author, description, head_image, tagid } = ctx.query;
        ctx.body = await ctx.service.articles.update(id, { title, content, author, description, head_image, tagid });
    }

    // post 修改
    public async update() {
        const { ctx } = this;
        const { id } = ctx.params;
        const { title, content, author, description, head_image, tagid } = ctx.request.body;
        ctx.body = await ctx.service.articles.update(id, { title, content, author, description, head_image, tagid });
    }
    // 删除
    public async destroy() {
        const { ctx } = this;
        const { id } = ctx.params;
        ctx.body = await ctx.service.articles.destroy(id);
    }
}
