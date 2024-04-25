import { NavigationAction, NavigationProp, NavigationState } from "@react-navigation/native";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScreenProps } from "react-native-screens";
import NewsListing from "../../containers/newsListing";
import DetailsContainer from "../../containers/Details";
export default function DetailsScreen({ navigation, route }: any) {
    return (<>
        <DetailsContainer navigation={navigation} {...route.params} />
    </>)
}