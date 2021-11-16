import * as React from 'react';
import { TextProps, Text as ReactNativeText, TextStyle } from 'react-native';
import { styles } from './utilities/styles';
import { translate } from './i18n/translate';

interface Props extends TextProps {
    style?: TextStyle;
    value?: string;
    valueI18n?: string;
    txOptions?: object;
};

export const Text = (props: Props) => {
    const { style, value, valueI18n, children, txOptions, ...rest } = props;

    const i18nText = valueI18n && translate(valueI18n, txOptions);

    const content = value || i18nText || children;

    return (
        <ReactNativeText style={style ? style : styles.textDefault} {...rest}>
            {content}
        </ReactNativeText>
    );
};