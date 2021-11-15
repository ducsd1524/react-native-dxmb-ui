import * as React from 'react';
import { ImageProps, Image, ImageStyle, Animated } from 'react-native';

interface Props extends ImageProps {

};

const imageStyle: ImageStyle = {

}

const ImageLazy = (props: Props) => {
    const { ...rest } = props;

    const imageAnimated: any = new Animated.Value(0);

    const onImageLoad = () => {
        Animated.timing(imageAnimated, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Animated.Image {...rest} style={[imageStyle, props.style, { opacity: imageAnimated }]} onLoad={onImageLoad} />
    )
};

export default ImageLazy;