import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import CardNoticia from '../../../../components/CardNoticia';
import { noticiasEsportes } from '../../../../dados/noticias';

export default function EsportesScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2' }} contentContainerStyle={{ padding: 12 }}>
      {noticiasEsportes.map((noticia) => (
        <CardNoticia
          key={noticia.id}
          noticia={noticia}
          onPress={() => router.push(`/noticias/esportes/${noticia.id}`)}
        />
      ))}
    </ScrollView>
  );
}
