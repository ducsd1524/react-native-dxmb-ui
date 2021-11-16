import * as React from 'react';
import { TextInputProps, TextInput as ReactNativeTextInput, StyleSheet } from 'react-native';
import { borderTextInputDefault } from './utilities/colors';
import { styles } from './utilities/styles';

interface Props extends TextInputProps {
    border?: boolean;
    placeholder?: string;
};

const TextInput = (props: Props) => {
    const { border, placeholder, ...rest } = props;
    const style = StyleSheet.create({
        container: {
            ...styles.padding10,
            borderColor: borderTextInputDefault,
            fontSize: 14
        }
    });
    return (
        <ReactNativeTextInput
            {...rest}
            style={[style.container, props.style]}
            placeholder={placeholder ? placeholder : 'Nhập'}
        />
    )
};



export default TextInput;