/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar, TextInput, View, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  return (
      <SafeAreaView style={styles.scrollView}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput placeholder='Preencha o RA' style={styles.RAinput}/>
          <TextInput placeholder='Preencha o produto' style={styles.productInput}/>

          <View style={styles.panel}>
            <TextInput placeholder='Quantidade' style={styles.quantityInput}/>
            <TextInput placeholder='Medida' style={styles.measureInput}/>
          </View>

          <TouchableOpacity style={styles.recycleButton}>
            <Text style={styles.textButton}>RECICLAR</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1
  },
  RAinput: {
    marginTop: '25%',
    borderBottomWidth: 3,
    borderBottomColor: 'blue',
    fontSize: 20
  },
  productInput: {
    marginTop: '10%',
    borderBottomWidth: 3,
    borderBottomColor: 'green',
    fontSize: 20
  },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  quantityInput: {
    marginTop: '10%',
    borderBottomWidth: 3,
    borderBottomColor: 'green',
    fontSize: 20,
    width: '45%'
  },
  measureInput: {
    marginTop: '10%',
    borderBottomWidth: 3,
    borderBottomColor: 'green',
    fontSize: 20,
    width: '45%',
  },
  recycleButton: {
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '80%',
    height: 50,
    marginTop: '10%'
  },
  textButton: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    color: 'white'
  }
});

export default App;