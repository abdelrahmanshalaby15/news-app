import { NavigationAction, NavigationProp, NavigationState } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "react-native-screens";
import NewsListing from "../../containers/newsListing";
export default function HomeScreen({ navigation }: any) {
    return (<>
        <NewsListing navigation={navigation} />
    </>)
}