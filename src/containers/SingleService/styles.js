import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    height: '100%',
    width: '100%',
    padding: 3,
  },
  placeholderContainer: {
    width: '95%',
    backgroundColor: '#ffff',
    position: 'absolute',
    height: 200,
    borderRadius: 50,
    alignContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  placeholder: {
    width: '90%',
    height: '87%',
    alignContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 9,
    marginLeft: 9,
    borderRadius: 10,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  placeholdertitle: {
    height: 7,
    marginBottom: 40,
    marginLeft: 25,
    borderRadius: 50,
    alignSelf: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#eeeeee',
  },
  text: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#b2bec3',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    position: 'absolute',
    padding: 10,
  },
  notfound: {
    flex: 1,
    marginTop: 200,
    alignSelf: 'center',
    marginLeft: 10,
  },
  textnotfound: {
    alignSelf: 'center',
    fontSize: 24,
    color: '#b2bec3',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 30,
  },
  grid: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    margin: 5,
    backgroundColor: '#ffff',
    height: 150,
    width: 180,
    borderRadius: 10,
  },
  serviceImage: {
    flex: 1,
    alignSelf: 'center',
    margin: 5,
    height: 150,
    width: 180,
  },
  textService: {
    color: '#ffff',
    alignSelf: 'center',
    alignContent: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: '#34495e',
    width: 80,
    borderRadius: 10,
    opacity: 0.8,
    textAlign: 'center',
  },
  badgecount: {
    marginRight: -70,
  },
  containerbadge: {
    marginBottom: 10,
  },
});