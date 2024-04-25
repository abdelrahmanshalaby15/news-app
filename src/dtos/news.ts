interface IArticleSource {
    id: number,
    name: string,
}
export interface IArticle {
    source: IArticleSource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}
export interface IHeadlinesResponse {
    status: string,
    totalResults: number,
    articles: IArticle[],
}
