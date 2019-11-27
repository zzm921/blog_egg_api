// import { Application } from 'egg';
import { Document, Model, model, Schema } from 'mongoose'; // tslint:disable-line

// 定义用户接口
export interface IArticles {
    createdAt?: Date;
    title: string;
    author?: string;
    content: string;
    description?: string;
    status?: string;
    tag?: string;
    head_image?: string;
    originalviews?: number;
    commentnum?: number;
    clickgoodnum?: number;
    tagid?: number;
}

// 定义mongoose.Model接口
export interface IArticlesModel extends IArticles, Document {
}

// 定义Schema实例
export const articlesSchema: Schema = new Schema({
    createdAt: { type: Date, default: Date.now },
    title: { type: String, default: '' },
    author: { type: String, default: '' },
    content: { type: String, default: '' },
    description: { type: String, default: '' },
    status: { type: Number, default: 1 },
    tag: { type: String, default: '' },
    head_image: { type: String, default: '' },
    originalviews: { type: Number, default: 0 },
    commentnum: { type: Number, default: 0 },
    clickgoodnum: { type: Number, default: 0 },
    tagid: { type: Number, default: 0 },
});

// egg-mongoose注入
export default (): Model<IArticlesModel> => {
    return model<IArticlesModel>('Articles', articlesSchema);
};
