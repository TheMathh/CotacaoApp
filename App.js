import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TelaCotacoes from '../TelaCotacoes';
import TelaPerfil from './TelaPerfil';
import TelaPagamento from './TelaPagamento';
import styles from './styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Cotações') {
              iconName = 'md-stats-chart';
            } else if (route.name === 'Perfil') {
              iconName = 'md-person';
            } else if (route.name === 'Pagamento') {
              iconName = 'md-wallet';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#00796b',
          inactiveTintColor: 'gray',
          style: styles.navBar,
        }}
      >
        <Tab.Screen name="Cotações" component={TelaCotacoes} />
        <Tab.Screen name="Perfil" component={TelaPerfil} />
        <Tab.Screen name="Pagamento" component={TelaPagamento} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
