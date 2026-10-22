import { Tabs } from 'expo-router/tabs';
import { Ionicons } from '@expo/vector-icons';

export default function NoticiasLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2196f3',
      }}
    >
      <Tabs.Screen
        name="tecnologia"
        options={{
          title: 'Tecnologia',
          tabBarIcon: ({ color, size }) => <Ionicons name="hardware-chip-outline" color={color as string} size={size} />,
        }}
      />
      <Tabs.Screen
        name="esportes"
        options={{
          title: 'Esportes',
          tabBarIcon: ({ color, size }) => <Ionicons name="trophy-outline" color={color as string} size={size} />,
        }}
      />
    </Tabs>
  );
}
