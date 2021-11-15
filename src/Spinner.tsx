import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';

interface ModalSpinnerProps {
    loading: boolean;
    size: "large" | "small";
    color: string
};

interface SpinnerProps {
    loading: boolean;
    size: "large" | "small";
    color: string
};

const ModalSpinner = (props: ModalSpinnerProps) => {
    const { loading, size, color } = props;
    return (
        <Modal
            isVisible={loading}
            deviceHeight={0}
            deviceWidth={0}
            animationIn={"tada"}
        >
            <ActivityIndicator size={size} color={color} />
        </Modal>
    )
}

const Spinner = (props: SpinnerProps) => {
    const { loading, size, color } = props;
    return (
        <>
            {loading ?
                <ActivityIndicator size={size} color={color} />
                :
                <></>
            }
        </>
    )
}

export { ModalSpinner, Spinner };