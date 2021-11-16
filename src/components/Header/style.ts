import { StyleSheet } from "react-native";
import { White } from "../../utilities/colors";

const style = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    touchIconLeft: {
        padding: 10,
    },
    iconLeft: {
        fontSize: 20,
        fontWeight: "bold",
        color: White,
    },
    viewTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: White,
        marginLeft: 10,
    },
    viewRight: {
        padding: 10,
    },
});

export default style;
