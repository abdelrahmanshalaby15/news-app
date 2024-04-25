import React from "react";
import { styles } from "./styles";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";

interface INewsCardProps {
    imageUrl: string,
    title: string,
    onPress: () => void,
}
export function NewsCard({ imageUrl, title, onPress }: INewsCardProps) {
    return (<>
        <TouchableOpacity onPress={onPress} style={[styles.cardWrapper]}>
            <View style={[styles.imageWrapper]}>
                <Image source={{ uri: imageUrl }} style={[styles.image]} resizeMode="cover" />
            </View>
            <View style={[styles.titleWrapper]}>
                <Text numberOfLines={2} style={[styles.titleText]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    </>)
}