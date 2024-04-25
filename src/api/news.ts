import { AxiosResponse } from "axios";
import { IArticle, IHeadlinesResponse } from "../dtos/news";
import { axiosInstance } from "../store";

export function getHeadlines(q?: string, page: number = 1): Promise<{ totalCount: number, articles: IArticle[] }> {
    return new Promise((resolve, reject) => {
        axiosInstance.get(`/v2/top-headlines?${q ? `q=${q}` : ""}&page=${page}&country=ae&pageSize=20`).then((res: AxiosResponse<IHeadlinesResponse, any>) => {
            if (res.status == 200) {
                resolve({ totalCount: res.data.totalResults, articles: res.data.articles });
            }
        }).catch((err) => {
            reject(`${err.response.status} - ${err.response.message}`);
        });
    });

}