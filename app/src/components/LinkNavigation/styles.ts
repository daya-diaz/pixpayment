import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  linkButton: {
    position: 'absolute',
    textAlign: 'center',
    bottom: 80,
    left: 16,
    right: 16,
    width: '100%',
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: '#E0087A',
  },  
  icon: {
    width: '100%',
    color: 'white',
    textAlign: 'center',
  },
  container: {
    display:'flex',
    alignContent:'center',
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  }
});