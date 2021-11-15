import * as React from 'react';
import { View as ReactNativeView, ScrollView, SafeAreaView, ViewProps, ViewStyle, Platform, ScrollViewProps } from 'react-native';
import { styles } from './utilities/styles';

interface ContainerProps extends ViewProps {
    style?: ViewStyle;
};

export const ContainerView = (props: ContainerProps) => {
    const { style } = props;
    if (Platform.OS === 'android') {
        return (
            <ReactNativeView style={style ? style : styles.container} >
                {props.children}
            </ReactNativeView>
        )
    } else {
        return (
            <SafeAreaView style={style ? style : styles.container}>
                {props.children}
            </SafeAreaView>
        )
    }
};

interface BodyProps extends ScrollViewProps {
    style?: ViewStyle;
}

export const Body = (props: BodyProps) => {
    const { style } = props;
    return (
        <ScrollView style={style ? style : styles.container} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
            {props.children}
        </ScrollView>
    )
};
