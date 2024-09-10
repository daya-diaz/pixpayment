import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    // position: 'relative',
    // top: 0,
    // left: 0,
    // right: 0,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 30,
    height: 160,
    backgroundColor: '#242F66',
    zIndex: 1,
  },
  headerTitle: {
    fontSize: 24,
    color: '#fff',
    fontWeight: "500"
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    paddingTop: 90,
    paddingHorizontal: 16  
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
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6
  },
  paymentFormTitle: {
    fontSize: 16,
    color: '#242F66',
    fontWeight: '500'
  },
  paymentFormSpan: {
    fontSize: 16,
    color: '#505050',
  },
  selectPaymentForm: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16
  },
  paymentFormSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  },
  navigationButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 56,
    height: 56
  },
  qeaTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: '#242F66',
    marginBottom: 16
  }
});
