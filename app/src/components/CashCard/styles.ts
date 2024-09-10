import { StyleSheet } from "react-native";

export 
const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 8,
    position: "absolute",
    top: -40,
    left: 16,
    right: 16,
    width: '100%',
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,

    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 24, 
    elevation: 2,
    zIndex: 2,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  span: {
    color: '#505050',
    fontSize: 16,
    width: 118,
  },
  points: {
    color: '#505050',
    fontSize: 16,
    fontWeight: '600'
  },
  reais: {
    color: '#242F66',
    fontSize: 24,
    fontWeight: '700',
  }
})