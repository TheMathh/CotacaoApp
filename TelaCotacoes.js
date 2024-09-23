import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

const TelaCotacoes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        setQuotes(Object.entries(data.rates).map(([currency, value]) => ({ currency, value })));
      } catch (error) {
        console.error('Erro ao buscar dados de moeda:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuotes();
    const intervalId = setInterval(fetchQuotes, 60000); // Atualiza a cada 60 segundos

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Cotações de Moeda</Text>
        {loading ? (
          <Text style={styles.loading}>Carregando...</Text>
        ) : (
          quotes.map((quote, index) => (
            <View key={index} style={styles.quoteContainer}>
              <Text style={styles.quoteTitle}>{quote.currency}</Text>
              <Text style={styles.quoteValue}>${quote.value.toFixed(2)}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default TelaCotacoes;
