import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from '../src/pages/home';
import { Passwords } from '../src/pages/passwords';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#1E1E1E', 
                },
                tabBarActiveTintColor: '#ffffff', 
                tabBarInactiveTintColor: '#888888', 
                headerShown: false, 
                
            
            }}
        >
            <Tab.Screen
                name="home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="home" />;
                        }
                        return <Ionicons size={size} color={color} name="home-outline" />;
                    }
                }}
            />

            <Tab.Screen
                name="passwords"
                component={Passwords}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={size} color={color} name="lock-closed" />;
                        }
                        return <Ionicons size={size} color={color} name="lock-closed-outline" />;
                    }
                }}
            />
        </Tab.Navigator>
    );
}
