import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/src/pages/home/index";
import { Passwords } from "@/src/pages/passwords/index";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#1c1917",
          borderTopWidth: 0,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen 
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            
            return <Ionicons name="home" size={size} color={color} />;
          }
        }} />
      <Tab.Screen 
        name="Passwords" 
        component={Passwords} 
        options={{
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name="lock-closed" size={size} color={color} />;
            }

            return <Ionicons name="lock-closed-outline" size={size} color={color} />;
          }
        }}/>
    </Tab.Navigator>
  );
}