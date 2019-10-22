import React from 'react';
import {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export interface  TextViewProps {
    textSize: number
}

export default class TextView extends Component<TextViewProps> {
    constructor(props: TextViewProps) {
        super(props);

        this.state = {
            textSize: props.textSize
        }
    }

    render() {
        return (
            <Text style={{...styles.text, ...{fontSize: this.props.textSize} }}>{this.props.children}</Text>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "konstanting-regular"
    }
});