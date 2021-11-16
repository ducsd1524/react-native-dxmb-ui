import * as React from 'react';
import Modal from 'react-native-modal';
import { ViewStyle, View, StyleSheet } from 'react-native';
import { deviceHeight, deviceWidth } from '../../utilities/styles';

interface Props {
    isVisible: boolean;
    onClose: () => void;
    header?: React.ReactNode
    body: React.ReactNode
    footer?: React.ReactNode;
    children?: any;
    styleProps?: ViewStyle;
    positon: "center" | "bottom" | "top",
    animationIn?: "bounce" | "flash" | "jello" | "pulse" | "rotate" | "rubberBand" | "shake" | "swing" | "tada" | "wobble" | "bounceIn" | "bounceInDown" | "bounceInUp" | "bounceInLeft" | "bounceInRight" | "bounceOut" | "bounceOutDown" | "bounceOutUp" | "bounceOutLeft" | "bounceOutRight" | "fadeIn" | "fadeInDown" | "fadeInDownBig" | "fadeInUp" | "fadeInUpBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "fadeOut" | "fadeOutDown" | "fadeOutDownBig" | "fadeOutUp" | "fadeOutUpBig" | "fadeOutLeft" | "fadeOutLeftBig" | "fadeOutRight" | "fadeOutRightBig" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY" | "lightSpeedIn" | "lightSpeedOut" | "slideInDown" | "slideInUp" | "slideInLeft" | "slideInRight" | "slideOutDown" | "slideOutUp" | "slideOutLeft" | "slideOutRight" | "zoomIn" | "zoomInDown" | "zoomInUp" | "zoomInLeft" | "zoomInRight" | "zoomOut" | "zoomOutDown" | "zoomOutUp" | "zoomOutLeft" | "zoomOutRight";
    animationOut?: "bounce" | "flash" | "jello" | "pulse" | "rotate" | "rubberBand" | "shake" | "swing" | "tada" | "wobble" | "bounceIn" | "bounceInDown" | "bounceInUp" | "bounceInLeft" | "bounceInRight" | "bounceOut" | "bounceOutDown" | "bounceOutUp" | "bounceOutLeft" | "bounceOutRight" | "fadeIn" | "fadeInDown" | "fadeInDownBig" | "fadeInUp" | "fadeInUpBig" | "fadeInLeft" | "fadeInLeftBig" | "fadeInRight" | "fadeInRightBig" | "fadeOut" | "fadeOutDown" | "fadeOutDownBig" | "fadeOutUp" | "fadeOutUpBig" | "fadeOutLeft" | "fadeOutLeftBig" | "fadeOutRight" | "fadeOutRightBig" | "flipInX" | "flipInY" | "flipOutX" | "flipOutY" | "lightSpeedIn" | "lightSpeedOut" | "slideInDown" | "slideInUp" | "slideInLeft" | "slideInRight" | "slideOutDown" | "slideOutUp" | "slideOutLeft" | "slideOutRight" | "zoomIn" | "zoomInDown" | "zoomInUp" | "zoomInLeft" | "zoomInRight" | "zoomOut" | "zoomOutDown" | "zoomOutUp" | "zoomOutLeft" | "zoomOutRight";
    animationInTiming?: number | 0;
    animationOutTiming?: number | 0;
};

const ModalBase = (props: Props) => {
    const [height, setHeight] = React.useState(0);
    const { isVisible, onClose, header, body, footer, styleProps, positon, animationIn, animationInTiming, animationOut, animationOutTiming } = props;
    const onLayout = (e: any) => {
        if (height == 0) {
            setHeight(e.nativeEvent.layout.height);
        }
    }

    const getStyle = () => {
        switch (positon) {
            case "center":
                return [style.center,];
            case "bottom":
                return [style.bottom, height >= deviceHeight ? { top: 60 } : {}];
            case "top":
                return style.top;
            default:
                return style.center;
        }
    }



    return (
        <Modal
            {...props}
            deviceWidth={-1}
            deviceHeight={-1}
            isVisible={isVisible}
            onBackButtonPress={() => onClose()}
            onBackdropPress={() => onClose()}
            animationIn={animationIn ? animationIn : "fadeInUp"}
            animationOut={animationOut ? animationOut : "fadeOutDown"}
            animationInTiming={animationInTiming ? animationInTiming : 1000}
            animationOutTiming={animationOutTiming ? animationOutTiming : 1000}
        >
            <View style={[getStyle(), styleProps]}
                onLayout={onLayout}
            >
                {header}
                {body}
                {footer}
            </View>
        </Modal >
    )
};

const style = StyleSheet.create({
    center: {
        borderRadius: 10,
        position: "absolute",
        alignSelf: "center",
        width: deviceWidth - 20,
        backgroundColor: "#fff",
        paddingBottom: 20,
    },
    bottom: {
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        alignSelf: "auto",
        bottom: 0,
        position: "absolute",
        width: deviceWidth,
        backgroundColor: "#fff",
        paddingBottom: 20,
    },
    top: {
        alignSelf: "auto",
        top: 0,
        position: "absolute",
        width: deviceWidth,
        backgroundColor: "#fff",
        paddingBottom: 20,
    }
})

export default React.memo(ModalBase)