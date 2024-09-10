import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#151515',
    maxWidth: 340,
  },
  content: {
    padding: 15,
    backgroundColor: '#fff',
    lineHeight: 22,
  },
  pressed: {
    backgroundColor: '#ffd9ed',
  },
});
