import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#F5F6F6',
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 24,
    marginHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 60,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 8 }, // Offset horizontal e vertical
    shadowOpacity: 0.79, // Opacidade da sombra
    shadowRadius: 24, // Raio da sombra
    elevation: 8,
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16, 
    alignItems: 'center',
  },
  image: {
    width: 96,
    height: 96
  },
  headerTexts: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8, 
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#151515'
  },
  headerDate: {
    fontSize: 14,
    fontWeight: '300',
    color: '#767676',
  },
  partner: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 270,
  },
  partnerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    height: 100,
  },
  partnerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#505050',
  },
  partnerCnpj: {
    fontSize: 14,
    color: '#999999',
    textTransform: 'uppercase',
  },
  separator: {
    width: '100%', 
    height: 1, 
    backgroundColor: '#c8c8c8',
    marginVertical: 12,
  },
  infosContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 16,
    gap: 2,
  },
  infosTitle: {
    fontSize: 14,
    color: '#767676',
  },
  infosValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#505050',

  },
  valueInRealContainer:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  valueInRealTexts: {
    fontSize: 16,
    fontWeight: '600',
    color: '#505050',
  },
  subtract: {
    position: 'absolute',
    bottom: -10,
    left: -16,
    width: 400
  },
  buttonContainer: {
    height: 130,
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 16,
    right: 16,
  }, 
})