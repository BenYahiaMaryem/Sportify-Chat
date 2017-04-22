/**
 * Created by nour on 3/24/17.
 */

import { StyleSheet,
    Dimensions} from 'react-native';
import StyleVars from 'Sportify/StyleVars';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: StyleVars.Colors.mediumBackground
    },
    headingText: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.heading,
        fontSize: 16,
        fontWeight: "600"
    },
    text: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.general,
        fontSize: 20,
        fontWeight: "400"
    },
    navBarTitleText: {
        color: StyleVars.Colors.navBarTitle,
        fontFamily: StyleVars.Fonts.heading,
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 22
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        paddingVertical: 9,
        paddingHorizontal: 15,
        overflow: "hidden",
        backgroundColor: StyleVars.Colors.primary
    },
    buttonText: {
        color: "white",
        fontFamily: StyleVars.Fonts.general,
        fontSize: 14,
        fontWeight: "400"
    },
    Logo: {
        width: windowWidth * 0.50,
        height: windowWidth * 0.50,
    },

    innerContainer: {

        alignItems: "center",
        justifyContent: "center",
        height: windowHeight,
        width: windowWidth,

    },
    inputContainer: {
        width: windowWidth * 0.8,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderBottomColor: "rgba(255,255,255,0.75)",
        borderBottomWidth: 1
    },
    input: {
        flex: 1,
        height: 40,
        //backgroundColor: StyleVars.Colors.primary,
        color: "black",
        fontFamily: StyleVars.Fonts.general,
        fontSize: 16,
        padding: 5
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 48,
        alignItems: "center",
        paddingVertical: 15,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderTopWidth: 1,
        borderTopColor: "rgba(255,255,255,0.5)"
    },
    footerText: {
        color: "black",
        fontFamily: StyleVars.Fonts.general,
        fontSize: 14
    },
    footerActionText: {
        fontWeight: "600"
    }
});