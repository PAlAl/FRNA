import React from 'react'
import {Component} from 'react'
import {
    FlexStyle,
    StyleProp,
    StyleSheet,
    Text
} from 'react-native'
import Color from "../constans/Color"
import Constants from "../constans/Constants";

export interface TextViewProps {
    textSize: number,
    textColor?: string,
    flexStyle?: StyleProp<FlexStyle>
}

const styles = StyleSheet.create({
    text: {
        fontFamily: Constants.fontFamily,
        textAlign: "center",
        textAlignVertical: "center"
    }
});

export default class TextView extends Component<TextViewProps> {
    render() {
        let textColor = this.props.textColor ? this.props.textColor : Color.defaultTextColor;
        let textSize = this.props.textSize ? this.props.textSize : 16;
        return (
            <Text style={[styles.text, {fontSize: textSize, color: textColor}, this.props.flexStyle]}>
                {this.props.children}
            </Text>
        )
    }
}