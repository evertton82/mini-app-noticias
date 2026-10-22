import { Stack } from 'expo-router/stack';

export default function EsportesLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Esportes' }} />
      <Stack.Screen name="[id]" options={{ title: '' }} />
    </Stack>
  );
}
