import { Tabs } from 'expo-router';
import { Colors } from '@/constants/Colors'; // Asegúrate de tener este archivo con colores
import { useColorScheme } from '@/hooks/useColorScheme'; // Asegúrate de tener este hook

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{ title: 'Hola Mundo' }}
      />
      <Tabs.Screen
        name="otroTab"
        options={{ title: 'Otro Tab' }}
      />
    </Tabs>
  );
}
