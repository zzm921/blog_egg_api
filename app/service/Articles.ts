import { Service } from 'egg';
import { IArticlesModel, IArticles } from '../model/Articles';
/**
 * Test Service
 */
export default class Articles extends Service {

    public async getList(): Promise<IArticles[]> {
        return this.ctx.model.Articles.find();
    }
    public async sayHi(name: string) {
        return `hi, ${name}`;
    }

    public async create(articles: IArticles): Promise<IArticlesModel> {
        return this.ctx.model.Articles.create(articles);
    }

    public async update(_id: string, articles: IArticles): Promise<IArticlesModel> {
        return this.ctx.model.Articles.updateOne({ _id }, articles);
    }

    public async show(_id: string): Promise<IArticles> {
        const info = await this.ctx.model.Articles.findById(_id);
        return info;
    }

    public async destroy(_id: string): Promise<any> {
        const info = await this.ctx.model.Articles.deleteOne({ _id });
        return info;
    }
}
