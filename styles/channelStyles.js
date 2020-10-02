import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  channel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 14,
    marginBottom: 25,
  },

  leftSide: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  avatar: {
    backgroundColor: colors.tag,
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  column: {
    paddingLeft: 10,
  },
  username: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    marginTop: 1,
    color: colors.gray,
    fontSize: 13,
  },
  rightSide: {},
  whiteCircle: {
    backgroundColor: colors.black,
    width: 9,
    height: 9,
    borderRadius: 4.5,
    opacity: 0.85,
  },
});
