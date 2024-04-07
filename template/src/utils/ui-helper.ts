import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const convertWidth = (percent: number) => {
  return (windowWidth / 100) * percent;
};

export const convertHeight = (percent: number) => {
  return (windowHeight / 100) * percent;
};
