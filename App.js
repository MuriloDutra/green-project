/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar, TextInput, View, TouchableOpacity, Modal, } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [measureOption, setMeasureOption] = useState('Medida')

  return (
      <SafeAreaView style={styles.scrollView}>
        <StatusBar barStyle="light-content" />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput placeholderTextColor="gray" placeholder='Preencha o RA' style={[styles.RAinput, styles.input, { marginTop: '25%',}]} />
          <TextInput placeholderTextColor="gray" placeholder='Preencha o produto' style={[styles.productInput, styles.input]}/>

          <View style={styles.panel}>
            <TextInput placeholderTextColor="gray" placeholder='Quantidade' style={[styles.quantityInput, styles.input]}/>
            <TouchableOpacity style={[styles.measureButton, styles.input]} onPress={() => setModalVisible(true)}>
              <Text style={styles.measureText}>{ measureOption }</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.recycleButton}>
            <Text style={styles.textButton}>RECICLAR</Text>
          </TouchableOpacity>

          <Modal animationType="slide" visible={modalVisible} transparent={true}>
            <View style={styles.modalView}>
              <TouchableOpacity style={{backgroundColor: 'red', height: '30%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>
                <Text style={{textAlign: 'center', fontSize: 25, paddingVertical: 10,}}>(g)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{backgroundColor: 'red', height: '30%', borderWidth: 1}}>
                <Text style={{textAlign: 'center', fontSize: 25, paddingVertical: 10,}}>(kg)</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.recycleButton}>
                <Text style={styles.textButton}>OK</Text>
              </TouchableOpacity>
              <Text>Escolha a unidade de medida</Text>
              <Text>ARRUMAR OS STYLES DOS TOUCHABLES DO MODAL</Text>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1
  },
  input: {
    borderBottomWidth: 3,
    fontSize: 20,
    marginTop: '10%',
  },
  RAinput: {
    borderBottomColor: 'blue',
  },
  productInput: {
    borderBottomColor: 'green',
  },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  quantityInput: {
    borderBottomColor: 'green',
    width: '45%'
  },
  measureButton: {
    borderBottomColor: 'green',
    width: '45%',
    flexDirection: 'row'
  },
  measureText: {
    textAlign: 'center',
    marginVertical: '10%',
    justifyContent: 'flex-start',
    fontSize: 20,
    color: 'gray'
  },
  recycleButton: {
    marginTop: '10%',
    alignSelf: 'center',
    backgroundColor: 'black',
    width: '80%',
    height: 50,
  },
  textButton: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    color: 'white'
  },
  modalView: {
    marginTop: '60%',
    backgroundColor: 'green',
    width: '90%',
    height: '30%',
    marginLeft: '5%',
    borderRadius: 20,
    borderWidth: 0.5,
  }
});

export default App;