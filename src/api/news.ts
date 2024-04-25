import { AxiosResponse } from "axios";
import { IArticle, IHeadlinesResponse } from "../dtos/news";
import { axiosInstance } from "../store";

export function getHeadlines(q?: string, page: number = 1): Promise<{ totalCount: number, articles: IArticle[] }> {
    return new Promise((resolve, reject) => {

        axiosInstance.get(`/v2/everything?${q ? `q=${q}` : ""}&page=${page}&pageSize=20&domains=techcrunch.com,thenextweb.com,bbc.co.uk,news.google.com`).then((res: AxiosResponse<IHeadlinesResponse, any>) => {
            if (res.status == 200) {
                resolve({ totalCount: res.data.totalResults, articles: res.data.articles });
            }
        }).catch((err) => {
            console.log(err.response.data);
            reject(`${err.response.data.status} - ${err.response.data.message}`);
        });
    });

}