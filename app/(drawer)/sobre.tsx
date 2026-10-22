import { View, Text, Pressable } from 'react-native';
import { router } from 'expo-router';

export default function SobreScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f2f2f2', padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginTop: 16 }}>Sobre</Text>

      <View style={{ height: 1, backgroundColor: '#333333', marginVertical: 16 }} />

      <Text style={{ fontSize: 15, color: '#333333' }}>Esse é o Mini App de Notícias.</Text>
      <Text style={{ fontSize: 15, color: '#333333' }}>
        Você vai praticar diferentes tipos de navegação com React Native:
      </Text>
      <Text style={{ fontSize: 15, color: '#333333', marginLeft: 16, marginTop: 6 }}>• Drawer (raiz)</Text>
      <Text style={{ fontSize: 15, color: '#333333', marginLeft: 16, marginTop: 6 }}>• Tabs (Tecnologia/Esportes)</Text>
      <Text style={{ fontSize: 15, color: '#333333', marginLeft: 16, marginTop: 6 }}>• Stacks (Lista → Detalhes)</Text>

      <Pressable
        onPress={() => router.navigate('/noticias/tecnologia')}
        style={{
          marginTop: 'auto',
          backgroundColor: '#2196f3',
          paddingVertical: 12,
          borderRadius: 4,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>VOLTAR</Text>
      </Pressable>
    </View>
  );
}
