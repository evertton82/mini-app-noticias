import { Pressable, Text } from 'react-native';
import { Noticia } from '../dados/noticias';

type Props = {
  noticia: Noticia;
  onPress: () => void;
};

export default function CardNoticia(props: Props) {
  return (
    <Pressable
      onPress={props.onPress}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        elevation: 2,
      }}
    >
      <Text style={{ fontSize: 11, color: '#777777', textTransform: 'uppercase', marginBottom: 4 }}>
        {props.noticia.categoria}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>{props.noticia.titulo}</Text>
      <Text style={{ fontSize: 14, color: '#444444' }} numberOfLines={2}>
        {props.noticia.resumo}
      </Text>
    </Pressable>
  );
}
