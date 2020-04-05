import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, StatusBar, TextInput, View, TouchableOpacity, Modal, Image } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import OptionsModal from './components/OptionsModal'
import SuccessfulModal from './components/SuccessfulModal'

const App = () => {
  const [optionsModalVisible, setOptionsModalVisible] = useState(false)
  const [successfulModal, setSuccessfulModal] = useState(false)
  const [backgroundModal, setBackgroundModal] = useState(false)
  const [messageError, setMessageError] = useState(null)
  
  //User's data
  const [studentRA, setStudentRA] = useState(null) //number
  const [product, setProduct] = useState(null) //string
  const [quantity, setQuantity] = useState(null) //number
  const [measureOption, setMeasureOption] = useState('Medida')


  const toggleModal = (value, text) => {
    setOptionsModalVisible(value)
    setBackgroundModal(value)

    if(text)
      setMeasureOption(text)
  }


  const verifyInputs = () => {
    let errors = ['Preencha o campo de RA.', 'Preencha o campo de produto.', 'Preencha o campo de quantidade.', 'Preencha o campo de medida.']
    let inputs = [studentRA, product, quantity, measureOption]
    let isThereAMessage = false

    inputs.map((input, index) => {
      if(input == null || input == 'Medida' || input == ''){
        if(isThereAMessage)
          return

        setMessageError(errors[index])
        isThereAMessage = true
      }
    })
    
    setTimeout(() => setMessageError(null), 5000)

    if(!isThereAMessage && !messageError){
      setMessageError(null)
      toggleSuccessfulModal(true)
    }
  }

  const toggleSuccessfulModal = (value) => {
    setSuccessfulModal(value)
    setBackgroundModal(value)
  }

  return (
      <SafeAreaView style={styles.scrollView}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Reciclick</Text>
        <TextInput onChangeText={(number) => setStudentRA(number)} keyboardType='numeric' maxLength={10} placeholderTextColor="gray" placeholder='Preencha o RA' style={[styles.RAinput, styles.input, { marginTop: '20%',}]} />
        <TextInput onChangeText={(text) => setProduct(text)} placeholderTextColor="gray" placeholder='Preencha o produto' style={[styles.productInput, styles.input]}/>

        <View style={styles.panel}>
          <TextInput onChangeText={(number) => setQuantity(number)} keyboardType="numeric" placeholderTextColor="gray" placeholder='Quantidade' style={[styles.quantityInput, styles.input]}/>
          <TouchableOpacity style={[styles.measureButton, styles.input]} onPress={() => toggleModal(true)}>
            <Text style={styles.measureText}>{ measureOption == 'Medida' ? `${measureOption}` :`(${measureOption})` }</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.recycleButton} onPress={() => verifyInputs()}>
          <Text style={styles.textButton}>RECICLAR</Text>
        </TouchableOpacity>

        <OptionsModal modalVisible={optionsModalVisible} toggleModal={toggleModal}/>
        <SuccessfulModal product={product} quantity={quantity} measureOption={measureOption} modalVisible={successfulModal} toggleModal={toggleSuccessfulModal}/>

        { backgroundModal &&
            <View style={{flex: 1, backgroundColor: 'black', height: '100%', width: '100%', position: 'absolute', opacity: 0.5}} />
        }
        { messageError &&
          <View style={styles.viewError}>
            <Text style={styles.messageError}>{messageError}</Text>
          </View>
        }
        <Image style={{height: '20%', width: '100%', marginTop: '10%'}} source={require('./images/leafs.png')} />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1
  },
  title: {
    fontSize: 30,
    paddingTop: '10%',
    textAlign: 'center',
    color: 'green',
    fontWeight: "bold"
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
    backgroundColor: 'green',
    width: '80%',
    height: 50,
  },
  textButton: {
    textAlign: 'center',
    paddingVertical: 10,
    fontSize: 20,
    color: 'white'
  },
  messageError: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    padding: 5
  },
  viewError: {
    backgroundColor: 'red',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '6%',
    zIndex: 1
  }
});

export default App;