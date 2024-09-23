// CardComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardComponent = ({ cardNumber, cardHolder, expiryDate }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardNumber}>{cardNumber}</Text>
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.cardHolder}>{cardHolder}</Text>
        <Text style={styles.expiryDate}>Validade: {expiryDate}</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.bankName}>Banco Exemplo</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#005f73',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHeader: {
    marginBottom: 15,
  },
  cardNumber: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  cardDetails: {
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 16,
    color: '#ffffff',
  },
  expiryDate: {
    fontSize: 14,
    color: '#ffffff',
  },
  cardFooter: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ffffff',
    paddingTop: 10,
  },
  bankName: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'right',
  },
});

export default CardComponent;
