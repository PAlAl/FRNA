import React, {Component} from 'react'
import {HeaderButton, HeaderButtonProps} from "react-navigation-header-buttons";
import {Platform} from "react-native";
import Color from "../../constans/Color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class CustomHeaderButton extends Component<HeaderButtonProps> {
    render() {
        return (
            <HeaderButton
                {...this.props}
                iconSize={23}
                IconComponent={MaterialIcons}
                color={Platform.OS === 'android' ? 'white' : Color.primary}/>
        )
    }
}