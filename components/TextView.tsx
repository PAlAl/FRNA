import React from 'react';
import {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export interface TextViewProps {
    textSize: number,
    textColor: string
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "konstanting-regular"
    }
});

export default class TextView extends Component<TextViewProps> {
    render() {
        return (
            <Text style={{...styles.text, ...{fontSize: this.props.textSize, color: this.props.textColor}}}>
                {this.props.children}
            </Text>
        )
    }
}