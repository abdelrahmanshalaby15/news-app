import { NavigationContainerProps } from "@react-navigation/native"
import { IArticle } from "../../dtos/news"
import { useEffect, useState } from "react";
import { getHeadlines } from "../../api/news";
import { FlatList, Image, RefreshControl, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NewsCard } from "../../components/newsCard";
import { styles } from "./styles";

interface IProductListingProps extends IArticle {
    navigation: any,
}
export default function DetailsContainer(props: IProductListingProps) {
    return (
        // <SafeAreaView>
        <View style={styles.mainWrapper}>
            <View style={styles.headerWrapper}>
                <Text style={[styles.text, styles.header]}>{props.title.toUpperCase()}</Text>
            </View>
            <ScrollView style={styles.scrollView}>
                <View style={[styles.imageWrapper]}>
                    <Image source={{ uri: props.urlToImage }} style={[styles.image]} resizeMode="cover" />
                </View>

                <View style={styles.contentWrapper}>
                    <Text style={[styles.text, styles.contentText]}>{props.content}</Text>
                </View>
                <View style={styles.authorWrapper}>
                    <Text style={[styles.text, styles.author]}><Text style={[styles.text, styles.bold]}>Written By:</Text> {props.author}</Text>
                </View>
                <View style={styles.dateWrapper}>
                    <Text style={[styles.text, styles.date]}><Text style={[styles.text, styles.bold]}>Published At:</Text> {props.publishedAt}</Text>
                </View>
                <View style={styles.authorWrapper}>
                    <Text style={[styles.text, styles.source]}><Text style={[styles.text, styles.bold]}>Source:</Text> {props.source.name}</Text>
                </View>
            </ScrollView>
        </View>
        // </SafeAreaView>
    )
}