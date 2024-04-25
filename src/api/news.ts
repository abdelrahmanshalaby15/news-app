import { AxiosResponse } from "axios";
import { IArticle, IHeadlinesResponse } from "../dtos/news";
import { axiosInstance } from "../store";

export function getHeadlines(q?: string, page: number = 1): Promise<{ totalCount: number, articles: IArticle[] }> {
    return new Promise((resolve, reject) => {
        console.log("query-2", q, page);

        axiosInstance.get(`/v2/everything?${q ? `q=${q}` : ""}&page=${page}&pageSize=20&domains=techcrunch.com,thenextweb.com,bbc.co.uk,news.google.com`).then((res: AxiosResponse<IHeadlinesResponse, any>) => {
            console.log("shit-", res.data);
            if (res.status == 200) {
                resolve({ totalCount: res.data.totalResults, articles: res.data.articles });
            }
        }).catch((err) => {
            reject(`${err.response.status} - ${err.response.message}`);
        });
    });

}