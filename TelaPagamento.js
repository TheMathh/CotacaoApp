import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const TelaPagamento = () => {
  const [paymentMethods, setPaymentMethods] = useState([
    { id: '1', method: 'Cartão de Crédito' },
    { id: '2', method: 'PayPal' },
    { id: '3', method: 'Transferência Bancária' },
  ]);
  const [newMethod, setNewMethod] = useState('');

  const addPaymentMethod = () => {
    if (newMethod.trim()) {
      setPaymentMethods([...paymentMethods, { id: Date.now().toString(), method: newMethod }]);
      setNewMethod('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formas de Pagamento</Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {paymentMethods.map(method => (
          <Text key={method.id} style={styles.paymentInfo}>{method.method}</Text>
        ))}
        <TextInput
          style={styles.input}
          value={newMethod}
          onChangeText={setNewMethod}
          placeholder="Adicionar nova forma de pagamento"
        />
        <TouchableOpacity style={styles.button} onPress={addPaymentMethod}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default TelaPagamento;
