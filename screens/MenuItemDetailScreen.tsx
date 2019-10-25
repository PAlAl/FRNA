import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import TextView from "../components/TextView"

const styles = StyleSheet.create({});

export default class MenuItemDetailScreen extends React.Component {

    static navigationOptions = ({navigation, screenProps, navigationOptions}: any) => {
        return {
            headerTitle: 'Детали о продукте'
        }
    };

    render() {
        return (
            <View style={{flex:1}}>
                <TextView textSize={15}>Tetx</TextView>
            </View>
        )
    }
}