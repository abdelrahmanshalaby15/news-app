import EStyleSheet from "react-native-extended-stylesheet";

export const styles = EStyleSheet.create({
    cardWrapper: {
        flex: 1,
        minHeight: 250,
        marginVertical: 5,
        // marginHorizontal: 10,
        backgroundColor: "#415f91",
        borderRadius: 5,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
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
        padding: 5,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        color: "white",
    },

})