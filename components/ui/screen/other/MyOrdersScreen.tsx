import { View, Text, StyleSheet } from "react-native";


export default function MyOrdersScreen(){
    return(
        <View style={styles.container}>
            <Text>My Orders</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

