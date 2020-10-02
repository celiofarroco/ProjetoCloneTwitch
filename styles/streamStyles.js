import {StyleSheet} from 'react-native';
import colors from './colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingRight: 24,
    marginBottom: 24,
  },

  thumbnail: {
    width: 119,
    height: 66,
  },
  row: {
    marginLeft: 11,
    flex: 1,
  },
  column: {
    height: 66,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: colors.green,
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  username: {
    color: colors.black,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  description: {
    color: colors.black,
  },
  category: {
    color: colors.black,
    fontWeight: 'bold',
  },
  tagRow: {
    marginTop: 8,
    flexDirection: 'row',
  },
  tagView: {
    backgroundColor: colors.tag,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 8,
    paddingRight: 8,
    marginRight: 5,
    borderRadius: 10,
  },
  tagText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
