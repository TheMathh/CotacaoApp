import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 20,
  },
  scrollView: {
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  loading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
  quoteContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  quoteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#005f73',
  },
  quoteValue: {
    fontSize: 16,
    marginTop: 5,
    color: '#0a74da',
  },
  profileInfo: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  paymentInfo: {
    fontSize: 18,
    marginBottom: 10,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  navBar: {
    backgroundColor: '#00796b',
  },
});

export default styles;
