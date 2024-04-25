import { NavigationContainerProps } from "@react-navigation/native"
import { IArticle } from "../../dtos/news"
import { useEffect, useState } from "react";
import { getHeadlines } from "../../api/news";
import { FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewsCard } from "../../components/newsCard";

interface IProductListingProps {
    navigation: any,

}
export default function NewsListing(props: IProductListingProps) {
    const [newsItems, setNewsItems] = useState<{ totalCount: number, articles: IArticle[] }>({ totalCount: 0, articles: [] });
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    function getNews(page = 1, isNew: boolean = false) {
        getHeadlines(query, page).then((res) => {
            if (isNew) {
                setNewsItems(newsItems);
            } else {
                setNewsItems({ totalCount: res.totalCount, articles: [...newsItems.articles, ...res.articles] });
            }
        });
    }
    function handlePaginationChange() {
        const totalPages = Math.ceil(newsItems.totalCount / 20);
        if (page + 1 <= totalPages) {
            getNews(page + 1);
            setPage(page + 1);
        }
    }
    useEffect(() => {
        getNews(page);
    }, [])
    return (
        <SafeAreaView>
            <FlatList
                data={newsItems.articles}
                keyExtractor={(item => item.publishedAt)}
                renderItem={(info) => {
                    return <NewsCard imageUrl={info.item.urlToImage} title={info.item.title} />
                }}
                onEndReached={handlePaginationChange}
                onEndReachedThreshold={1}
            />
        </SafeAreaView>
    )
}