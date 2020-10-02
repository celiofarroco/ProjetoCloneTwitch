import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingLeft: 14,
  },
  main: {},
  containerImage: {
    paddingTop: 14,
    paddingRight: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  onlineStatus: {
    backgroundColor: colors.green,
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  avatar: {
    backgroundColor: colors.tag,
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginLeft: 20,
  },
  heading: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  headingText: {
    color: colors.black,
    fontSize: 30,
    fontWeight: 'bold',
  },
  titleText: {
    paddingTop: 9,
    paddingBottom: 9,
    color: colors.gray,
    backgroundColor: colors.primary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryList: {
    marginRight: 10,
  },
  categoryImage: {
    width: 98,
    height: 130,
  },
  categoryName: {
    marginTop: 5,
    maxWidth: 98,
    color: colors.black,
    fontSize: 13.5,
    fontWeight: 'bold',
  },
  categoryStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redCircle: {
    backgroundColor: colors.red,
    width: 9,
    height: 9,
    borderRadius: 4.5,
  },
  info: {
    marginLeft: 4,
    paddingBottom: 1,
    color: colors.gray,
    fontWeight: 'bold',
  },
  organizador: {
    flexDirection: 'row',
  },
});
