import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import CardComponent from './CardComponent'; // Importando o componente do cartão

const TelaPagamento = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [newCardNumber, setNewCardNumber] = useState('');
  const [newCardHolder, setNewCardHolder] = useState('');
  const [newExpiryDate, setNewExpiryDate] = useState('');
  const [newCvc, setNewCvc] = useState('');

  const addPaymentMethod = () => {
    if (
      newCardNumber.trim() &&
      newCardHolder.trim() &&
      newExpiryDate.trim() &&
      newCvc.trim()
    ) {
      setPaymentMethods([
        ...paymentMethods,
        {
          id: Date.now().toString(),
          cardNumber: newCardNumber,
          cardHolder: newCardHolder,
          expiryDate: newExpiryDate,
          cvc: newCvc,
        },
      ]);
      // Resetar campos de entrada
      setNewCardNumber('');
      setNewCardHolder('');
      setNewExpiryDate('');
      setNewCvc('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formas de Pagamento</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {paymentMethods.map(method => (
          <CardComponent
            key={method.id}
            cardNumber={method.cardNumber}
            cardHolder={method.cardHolder}
            expiryDate={method.expiryDate}
          />
        ))}
        <TextInput
          style={styles.input}
          value={newCardNumber}
          onChangeText={setNewCardNumber}
          placeholder="Número do Cartão"
        />
        <TextInput
          style={styles.input}
          value={newCardHolder}
          onChangeText={setNewCardHolder}
          placeholder="Nome do Titular"
        />
        <TextInput
          style={styles.input}
          value={newExpiryDate}
          onChangeText={setNewExpiryDate}
          placeholder="Validade (MM/AA)"
        />
        <TextInput
          style={styles.input}
          value={newCvc}
          onChangeText={setNewCvc}
          placeholder="Código de Segurança (CVC)"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={addPaymentMethod}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TelaPagamento;
