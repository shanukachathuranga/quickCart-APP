import { View, Text, StyleSheet } from "react-native";


export default function VouchersScreen(){
    return(
        <View style={styles.container}>
            <Text>Vouchers</Text>
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

