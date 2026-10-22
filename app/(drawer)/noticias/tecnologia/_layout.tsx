import { Stack } from 'expo-router/stack';

export default function TecnologiaLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Tecnologia' }} />
      <Stack.Screen name="[id]" options={{ title: '' }} />
    </Stack>
  );
}
