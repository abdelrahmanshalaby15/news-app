import { NavigationContainerProps } from "@react-navigation/native"
import { IArticle } from "../../dtos/news"
import { useEffect, useState } from "react";
import { getHeadlines } from "../../api/news";
import { FlatList, RefreshControl, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewsCard } from "../../components/newsCard";
import { styles } from "./styles";

interface IProductListingProps {
    navigation: any,

}
export default function NewsListing(props: IProductListingProps) {
    const [newsItems, setNewsItems] = useState<{ totalCount: number, articles: IArticle[] }>({ totalCount: 0, articles: [] });
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [e, setError] = useState("");
    function getNews(page = 1) {
        setLoading(true);
        getHeadlines(query, page).then((res) => {
            if (query.length > 3) {
                setNewsItems(res);
            } else {
                setNewsItems({ totalCount: res.totalCount, articles: [...newsItems.articles, ...res.articles] });
            }
            setLoading(false);
        }).catch((e) => {
            setNewsItems({ totalCount: 0, articles: [] });
            setError(e);
            setLoading(false);
        });

    }
    function handlePaginationChange() {
        const totalPages = Math.ceil(newsItems.totalCount / 20);
        if (page + 1 <= totalPages) {
            getNews(page + 1);
            setPage(page + 1);
        }
    }
    function onSearch(q: string) {
        setQuery(q);
        setPage(1);
    }
    function onRefresh() {
        setPage(1);
        getNews(1);
    }
    useEffect(() => {
        getNews(page);
    }, [])
    useEffect(() => {
        if (query.length > 3 || query.length == 0) {
            getNews(1);
        }
    }, [query])
    return (
        <SafeAreaView>
            <View style={styles.mainWrapper}>
                <View style={[styles.searchWrapper]}>
                    <TextInput
                        style={[styles.search]}
                        placeholder="Search"
                        onChangeText={onSearch}
                    />
                </View>
                <FlatList
                    data={newsItems.articles}
                    keyExtractor={(item => item.publishedAt)}
                    renderItem={(info) => {
                        return <NewsCard imageUrl={info.item.urlToImage} title={info.item.title} />
                    }}
                    onEndReached={handlePaginationChange}
                    onEndReachedThreshold={1}
                    onRefresh={onRefresh}
                    refreshing={loading}
                    ListEmptyComponent={() => <Text>{e.length > 0 ? e : "No Items found"}</Text>}
                />
            </View>
        </SafeAreaView>
    )
}