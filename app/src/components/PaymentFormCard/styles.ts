import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C5C5C5',
    width: 104,
    height: 92,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    alignItems: 'center'
  },
  text: {
    color: '#151515',
    fontWeight: "500",
    fontSize: 12,
    maxWidth: 88,
    textAlign: 'center',
    lineHeight: 15.6
  },
  icon: {
    width: '100%',
    color: '#DF0979',
    textAlign: 'center',
  },
})