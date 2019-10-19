import React from 'react';
import { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class App extends Component{
  render(){
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
              <View>
                <Text>First Title</Text>
              </View>
            </ScrollView>
          </SafeAreaView>
        </>
    )
  }
}