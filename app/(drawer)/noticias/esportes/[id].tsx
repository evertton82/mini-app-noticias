import { useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { noticiasEsportes } from '../../../../dados/noticias';

export default function DetalheEsportesScreen() {
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();
  const noticia = noticiasEsportes.find((item) => item.id === id);

  useEffect(() => {
    navigation.setOptions({ title: noticia?.titulo });
  }, [navigation, noticia]);

  if (!noticia) {
    return <Text style={{ padding: 16 }}>Notícia não encontrada.</Text>;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2' }} contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 11, color: '#777777', textTransform: 'uppercase', marginBottom: 6 }}>
        {noticia.categoria}
      </Text>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>{noticia.titulo}</Text>
      <Text style={{ fontSize: 16, lineHeight: 24, color: '#333333' }}>{noticia.conteudo}</Text>
    </ScrollView>
  );
}
