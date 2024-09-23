import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';

const TelaPerfil = () => {
  const [name, setName] = useState('João Silva');
  const [email, setEmail] = useState('joao.silva@example.com');
  const [phone, setPhone] = useState('(11) 98765-4321');
  const [address, setAddress] = useState('Rua das Flores, 123');
  const [editMode, setEditMode] = useState(false);

  const saveProfile = () => {
    setEditMode(false);
    console.log('Perfil salvo:', { name, email, phone, address });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      {editMode ? (
        <ScrollView contentContainerStyle={styles.scrollView}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Nome"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Telefone"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Endereço"
          />
          <TouchableOpacity style={styles.button} onPress={saveProfile}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
        </ScrollView>
      ) : (
        <View style={styles.profileInfoContainer}>
          <Text style={styles.profileInfo}>Nome: {name}</Text>
          <Text style={styles.profileInfo}>Email: {email}</Text>
          <Text style={styles.profileInfo}>Telefone: {phone}</Text>
          <Text style={styles.profileInfo}>Endereço: {address}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setEditMode(true)}>
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default TelaPerfil;
