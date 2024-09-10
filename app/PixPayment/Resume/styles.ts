import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 16,
    height: '100%',
    width: '100%'
  },
  buttonContainer: {
    height: 130,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    bottom: 160,
    left: 16,
    right: 16,
  }, 
  img: {
    width: 80,
    height: 80,
    backgroundColor: '#E0087A',
  },
  partner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 300,
  },
  partnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    height: 100,
  },
  partnerName: {
    fontSize: 21,
    fontWeight: '600',
    color: '#505050',
  },
  partnerCnpj: {
    fontSize: 14,
    color: '#767676',
    textTransform: 'uppercase',
  },
  resumeContainer: {},
  separator: {
    width: '100%', 
    height: 1, 
    backgroundColor: '#c8c8c8',
    marginVertical: 24
  },
  resumeTitle: {
    color: '#505050',
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '500'
  },
  resumeValues: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,

  },
  resumeInfosContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pointsQuantity: {
    fontSize: 16,
    color: '#767676',
    fontWeight: '400'
  },
  realQuantity: {
    fontSize: 16,
    color: '#505050',
    fontWeight: '700'
  }

})