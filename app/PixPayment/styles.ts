import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 136,
    paddingHorizontal: 16,
    backgroundColor: '#222E62'
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
  },
});