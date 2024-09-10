import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  linkButton: {
    textAlign: 'center',
    width: '100%',
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: '#E0087A',
  },
  primary: {
    backgroundColor: '#E0087A',
  },
  secondary: {
    backgroundColor: 'transparent',
  },
  outline: {
    backgroundColor: 'transparent',
    borderColor: '#E0087A',
    borderWidth: 2,
  },
  icon: {
    width: '100%',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
