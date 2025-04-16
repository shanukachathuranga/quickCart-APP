import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabNavigation from "../tab-navigation/HomeBottomTabNavigation";
import CustomerCareScreen from "@/components/ui/screen/other/CustomerCareScreen";
import DailyDealsScreen from "@/components/ui/screen/other/DailyDealsScreen";
import LatestProductsScreen from "@/components/ui/screen/other/LatestProductsScreen";
import MyOrdersScreen from "@/components/ui/screen/other/MyOrdersScreen";
import NotificationScreen from "@/components/ui/screen/other/NotificationScreen";
import ProfileScreen from "@/components/ui/screen/other/ProfileScreen";
import SettingsScreen from "@/components/ui/screen/other/SettingsScreen";
import VouchersScreen from "@/components/ui/screen/other/VouchersScreen";
import LoginScreen from "@/components/ui/screen/security/LoginScreen";

const Stack = createStackNavigator();
export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Menu"}
        options={{ headerLeft: () => null, headerShown: false }}
        component={HomeBottomTabNavigation}
      />
      <Stack.Screen
        name={"CustomerCare"}
        options={{ title: "Customer Care" }}
        component={CustomerCareScreen}
      />
      <Stack.Screen
        name={"DailyDeals"}
        options={{ title: "Daily Deals" }}
        component={DailyDealsScreen}
      />
      <Stack.Screen
        name={"LatestProducts"}
        options={{ title: "Latest Products" }}
        component={LatestProductsScreen}
      />
      <Stack.Screen
        name={"MyOrders"}
        options={{ title: "My Oders" }}
        component={MyOrdersScreen}
      />
      <Stack.Screen
        name={"Notifications"}
        options={{ title: "Notifications" }}
        component={NotificationScreen}
      />
      <Stack.Screen
        name={"Profile"}
        options={{ title: "Profile" }}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={"Settings"}
        options={{ title: "Settings" }}
        component={SettingsScreen}
      />
      <Stack.Screen
        name={"Vouchers"}
        options={{ title: "Vouchers" }}
        component={VouchersScreen}
      />
      <Stack.Screen
        name={"Login"}
        options={{ title: "Login Here" }}
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
