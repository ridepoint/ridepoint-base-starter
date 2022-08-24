import { DefaultTheme } from "react-native-paper";
import colors from "src/styles/colors";
import typograph from "src/styles/typograph";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        ...colors,
        ...typograph
    },
};
