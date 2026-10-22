import { ScrollView } from 'react-native';
import { router } from 'expo-router';
import CardNoticia from '../../../../components/CardNoticia';
import { noticiasTecnologia } from '../../../../dados/noticias';

export default function TecnologiaScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f2f2f2' }} contentContainerStyle={{ padding: 12 }}>
      {noticiasTecnologia.map((noticia) => (
        <CardNoticia
          key={noticia.id}
          noticia={noticia}
          onPress={() => router.push(`/noticias/tecnologia/${noticia.id}`)}
        />
      ))}
    </ScrollView>
  );
}
