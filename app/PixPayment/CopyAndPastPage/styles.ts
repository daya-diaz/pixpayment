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
  label: {
    fontSize: 24,
    maxWidth: 330,
    lineHeight: 32,
    fontWeight: '500',
    color:'#161616'
  },
  input: {
    borderColor: '#767676',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 16,
    color: '#767676',
    padding: 16,
  },
  inputError: {
    borderColor: '#E03131', 
  },
  error: {
    color: '#E03131',
    fontSize: 12,
    marginTop: -12,
    textAlign: 'left',
  },
  inputFocused: {
    borderColor: '#E0087A',
    backgroundColor: '#f9f9f9',
    borderWidth: 2
  },
  inputArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
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
  button: {
    backgroundColor: '#E0087A',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },  
  

})