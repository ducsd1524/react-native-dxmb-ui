import * as React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../Text';
import style from './style';

interface Props {
    title: string;
    onPress: () => void;
    iconLeft: any;
    right?: any;
    backgroundColor: string
};

const Header = (props: Props) => {
    const { title, onPress, right, iconLeft, backgroundColor } = props;

    return (
        <View style={[style.container, { backgroundColor: backgroundColor }]}>
            <TouchableOpacity style={style.touchIconLeft} onPress={() => onPress()}>
                {/* <Ionicons name={icon} style={style.iconLeft} /> */}
                {iconLeft}
            </TouchableOpacity>
            <View style={style.viewTitle}>
                <Text value={title} style={style.text} />
            </View>
            <View style={style.viewRight}>
                {right}
            </View>
        </View>
    )
};

export default Header;

