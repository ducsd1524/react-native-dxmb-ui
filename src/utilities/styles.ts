import {TextStyle, ViewStyle, Dimensions} from 'react-native';
import {backgroundColor, Blue1D, textColorDefault} from './colors';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const container: ViewStyle = {
  flex: 1,
  backgroundColor: backgroundColor,
  paddingBottom: 10,
};

const textDefault: TextStyle = {
  fontSize: 14,
  color: textColorDefault,
};

const iconDefault: TextStyle = {
  fontSize: 18,
  color: Blue1D,
};

const padding10 = {padding: 10};
const paddingTop10 = {paddingTop: 10};
const paddingBottom10 = {paddingBottom: 10};
const paddingLeft10 = {paddingLeft: 10};
const paddingRight10 = {paddingRight: 10};
const paddingHorizontal10 = {paddingHorizontal: 10};
const paddingVertical10 = {paddingVertical: 10};

const margin10 = {margin: 10};
const marginTop10 = {marginTop: 10};
const marginBottom10 = {marginBottom: 10};
const marginLeft10 = {marginLeft: 10};
const marginRight10 = {marginRight: 10};
const marginHorizontal10 = {marginHorizontal: 10};
const marginVertical10 = {marginVertical: 10};

export const styles = {
  container,
  textDefault,
  iconDefault,
  padding10,
  paddingTop10,
  paddingBottom10,
  paddingLeft10,
  paddingRight10,
  paddingHorizontal10,
  paddingVertical10,
  margin10,
  marginTop10,
  marginBottom10,
  marginLeft10,
  marginRight10,
  marginHorizontal10,
  marginVertical10,
};
