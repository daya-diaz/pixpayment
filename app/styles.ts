import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    backgroundColor: '#222E62',
    paddingHorizontal: 16

  },
  textsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  },
  title: {
    fontSize: 52,
    color: 'white',
    width: '80%',
    fontWeight: "bold",
    paddingTop: 48
  },
  span: {
    color: '#B5B7BF',
    fontSize: 16
  },
  linkButton: {
    position: 'absolute',
    textAlign: 'center',
    bottom: 80,
    left: 16,
    right: 16,
    width: '100%',
    paddingVertical: 20,
    borderRadius: 8,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#E0087A',
  }
});