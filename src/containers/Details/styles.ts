import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
    imageWrapper: {
        width: "100%",
        height: 200,
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    mainWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        height: "100%",
    },
    scrollView: {
        height: "100%",
    },
    text: {
        color: "black",
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
    },
    headerWrapper: {
        marginVertical: 25,
    },
    contentWrapper: {
        paddingVertical: 20,
    },
    contentText: {
        fontSize: 15,
    },
    bold: {
        fontWeight: "bold",
    }
})