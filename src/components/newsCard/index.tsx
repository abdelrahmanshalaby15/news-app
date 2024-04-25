import React from "react";
import { styles } from "./styles";
import { Image, Text, View } from "react-native";

interface INewsCardProps {
    imageUrl: string,
    title: string,
}
export function NewsCard({ imageUrl, title }: INewsCardProps) {
    return (<>
        <View style={[styles.cardWrapper]}>
            <View style={[styles.imageWrapper]}>
                <Image source={{ uri: imageUrl }} style={[styles.image]} resizeMode="cover" />
            </View>
            <View style={[styles.titleWrapper]}>
                <Text numberOfLines={2} style={[styles.titleText]}>
                    {title}
                </Text>
            </View>
        </View>
    </>)
}