import { Dimensions, Platform, StatusBar } from "react-native";

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const { width, height } = Dimensions.get('window')

const scale = (size = 0) => (width / guidelineBaseWidth) * size;
const verticalScale = (size = 0) => (height / guidelineBaseHeight) * size;
const moderateScale = (size = 0, factor = 0.5) =>
    size + (scale(size) - size) * factor;
const moderateScaleVertical = (size = 0, factor = 0.5) =>
    size + (verticalScale(size) - size) * factor;
const textScale = (percent = 0) => {
    const screenHeight = Dimensions.get('window').height;
    //calculate absolute ratio for bigger screens 18.5:9 requiring smaller scaling
    const ratio =
        Dimensions.get('window').height / Dimensions.get('window').width;
    //Guideline sizes are based on standard ~5″ screen mobile device
    const deviceHeight = screenHeight === 375
        ? screenHeight * (ratio > 1.8 ? 0.14 : 0.15) //Set guideline depending on absolute ratio
        : Platform.OS === 'android'
            ? screenHeight - StatusBar?.currentHeight || 0
            : screenHeight;

    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
}

export {
    width,
    height,
    scale,
    verticalScale,
    moderateScale,
    moderateScaleVertical,
    textScale



};