import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: "#E34D5B",
            headerStyle: {
                backgroundColor: "#0F297B", //Encabezado
            },
            headerShadowVisible: false,
            headerTintColor: "#fff", //Letras Encabezado
            tabBarStyle: { backgroundColor: "#2179B0" },
        }}> 


            <Tabs.Screen name="Refugios"
                options={{
                    headerTitle: " Localizar Refugios",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "map-outline" : "map-outline"}
                            color={color}
                            size={24} />),
                }}
            />


            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Inicio",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "home-sharp" : "home-outline"}
                            color={color}
                            size={24} />),
                }} />




            <Tabs.Screen name="Reportes"
                options={{
                    headerTitle: "Reportes",
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons
                            name={focused ? "clipboard-outline" : "clipboard-outline"}
                            color={color}
                            size={24} />),
                }} />


            <Tabs.Screen
                name="not-found"
                options={
                    {
                        headerShown: false,
                    }}
            />
        </Tabs >

    );
}
