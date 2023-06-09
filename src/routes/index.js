import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// MY IMPORTS 
import Home from '../pages/home';
import Search from '../pages/search';
import Inbox from '../pages/inbox';
import New from '../pages/new';
import Profile from '../pages/profile';

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator 
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,

                tabBarStyle:{
                    backgroundColor: '#000',
                    borderTopWidth: 0,
                },

                tabBarActiveTintColor: '#FFF',
            }}
        >

            <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons name='home' size={size} color={color} />
                        }
                        return <Ionicons name='home-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name='Search' 
                component={Search}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons name='search' size={size} color={color} />
                        }
                        return <Ionicons name='search-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name='New' 
                component={New}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons name='newspaper' size={size} color={color} />
                        }
                        return <Ionicons name='newspaper-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name='Inbox' 
                component={Inbox}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons name='ios-chatbubble-ellipses' size={size} color={color} />
                        }
                        return <Ionicons name='ios-chatbubble-ellipses-outline' size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name='Profile' 
                component={Profile}
                options={{
                    tabBarIcon: ({ focused, size, color }) => {
                        if(focused){
                            return <Ionicons name='person' size={size} color={color} />
                        }
                        return <Ionicons name='person-outline' size={size} color={color} />
                    }
                }}
            />

        </Tab.Navigator>
    )
}