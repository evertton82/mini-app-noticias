import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTitleAlign: 'center',
        drawerActiveTintColor: '#2196f3',
      }}
    >
      <Drawer.Screen
        name="noticias"
        options={{
          title: 'Notícias',
          drawerIcon: ({ color, size }) => <Ionicons name="newspaper-outline" color={color as string} size={size} />,
        }}
      />
      <Drawer.Screen
        name="sobre"
        options={{
          title: 'Sobre',
          drawerIcon: ({ color, size }) => <Ionicons name="information-circle-outline" color={color as string} size={size} />,
        }}
      />
    </Drawer>
  );
}
