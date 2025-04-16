import { Image, TouchableOpacity, Text } from "react-native";
import HomeBookmarkScreen from "@/components/ui/screen/home/HomeBookmarkScreen";
import HomeCartScreen from "@/components/ui/screen/home/HomeCartScreen";
import HomeMenuScreen from "@/components/ui/screen/home/HomeMenuScreen";
import HomePageScreen from "@/components/ui/screen/home/HomePageScreen";
import HomeProductsScreen from "@/components/ui/screen/home/HomeProductsScreen";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/constants/ColorPallete";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const logo = require("../../../assets/images/logo.jpeg");

export default function HomeBottomTabNavigation({ navigation }: any) {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route, focused }: any) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Menu")
            iconName = focused ? "menu" : "menu-outline";
          else if (route.name === "Cart")
            iconName = focused ? "cart" : "cart-outline";
          else if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Bookmark")
            iconName = focused ? "heart" : "heart-outline";
          else if (route.name === "Products")
            iconName = focused ? "grid" : "grid-outline";
          // @ts-ignore
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: COLORS.orange,
        tabBarInactiveTintColor: COLORS.darkGrey,
      })}
    >
      <Tab.Screen name={"Menu"} component={HomeMenuScreen} />
      <Tab.Screen name={"Cart"} component={HomeCartScreen} />
      <Tab.Screen name={"Home"} component={HomePageScreen} options={{
        headerLeft:()=>(
            <Image source={logo} resizeMode={'contain'}
            style={{width:50, height:50, marginLeft:10}} />
        ),
        headerTitle:'', // set header title empty
        headerRight:()=>(
            <TouchableOpacity
                style={{
                    marginRight:10,
                    width:120,
                    backgroundColor:COLORS.orange,
                    borderRadius:3,
                    height:35,
                    alignItems:'center',
                    justifyContent:'center'
                }}
            >
                <Text style={{color:COLORS.light}}>Admin Console</Text>
            </TouchableOpacity>
        )
      }} />
      <Tab.Screen name={"Bookmark"} component={HomeBookmarkScreen} />
      <Tab.Screen name={"Products"} component={HomeProductsScreen} />
    </Tab.Navigator>
  );
}
