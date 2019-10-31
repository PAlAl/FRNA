import React from "react";
import {View} from "react-native";

export default class LineView extends React.Component {
    render() {
        return (
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            />
        )
    }
}
