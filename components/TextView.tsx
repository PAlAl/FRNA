import React from 'react'
import {Component} from 'react'
import {
    FlexStyle,
    StyleProp,
    StyleSheet,
    Text
} from 'react-native'
import Color from "../modules/Color"
import Constants from "../modules/Constants";

export interface TextViewProps {
    textSize: number,
    textColor?: string,
    flexStyle?: StyleProp<FlexStyle>
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
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
        let textAlign = this.props.textAlign ? this.props.textAlign : 'center';
        return (
            <Text style={[styles.text, {
                fontSize: textSize,
                color: textColor,
                textAlign: textAlign
            }, this.props.flexStyle]}>
                {this.props.children}
            </Text>
        )
    }
}