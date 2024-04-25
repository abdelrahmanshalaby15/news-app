import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
    cardWrapper: {
        flex: 1,
        minHeight: 250,
        margin: 5,
        backgroundColor: "red",
        borderRadius: 5,
    },
    imageWrapper: {
        width: "100%",
        height: 200,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    titleWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        color: "black",
    },

})