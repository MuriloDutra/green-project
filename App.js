import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, Text, StatusBar, TextInput, View, TouchableOpacity, Modal, Animated, Easing } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import LottieView from 'lottie-react-native'

const App = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [backgroundModal, setBackgroundModal] = useState(false)
  const [messageError, setMessageError] = useState(null)
  const [progressAnimation, setProgressAnimation] = useState(new Animated.Value(0))
  
  //User's data
  const [studentRA, setStudentRA] = useState(null) //number
  const [product, setProduct] = useState(null) //string
  const [quantity, setQuantity] = useState(null) //number
  const [measureOption, setMeasureOption] = useState('Medida')


  const toggleModal = (value, text) => {
    setModalVisible(value)
    setBackgroundModal(value)

    if(text)
      setMeasureOption(`(${text})`)
  }


  const verifyInputs = () => {
    let errors = ['Preencha o campo de RA.', 'Preencha o campo de produto.', 'Preencha o campo de quantidade.', 'Preencha o campo de medida.']
    let inputs = [studentRA, product, quantity, measureOption]
    let isThereAMessage = false

    inputs.map((input, index) => {
      if(input == null || input == 'Medida' || input == '' && !isThereAMessage){
        setMessageError(errors[index])
        isThereAMessage = true
      }
    })
    
    setTimeout(() => setMessageError(null), 500)
  }


  return (
      <SafeAreaView style={styles.scrollView}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Reciclick</Text>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <TextInput onChangeText={(number) => setStudentRA(number)} keyboardType='numeric' maxLength={10} placeholderTextColor="gray" placeholder='Preencha o RA' style={[styles.RAinput, styles.input, { marginTop: '20%',}]} />
          <TextInput onChangeText={(text) => setProduct(text)} placeholderTextColor="gray" placeholder='Preencha o produto' style={[styles.productInput, styles.input]}/>

          <View style={styles.panel}>
            <TextInput onChangeText={(number) => setQuantity(number)} keyboardType="numeric" placeholderTextColor="gray" placeholder='Quantidade' style={[styles.quantityInput, styles.input]}/>
            <TouchableOpacity style={[styles.measureButton, styles.input]} onPress={() => toggleModal(true)}>
              <Text style={styles.measureText}>{ measureOption }</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.recycleButton} onPress={() => verifyInputs()}>
            <Text style={styles.textButton}>RECICLAR</Text>
          </TouchableOpacity>

          <Modal animationType='slide' visible={modalVisible} transparent={true}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Escolha a unidade de medida</Text>
              <View style={styles.ModalTouchablesView}>
                <TouchableOpacity onPress={() => toggleModal(false, 'g')} style={styles.modalTouchable}>
                  <Text style={styles.modalTouchableText}>(g)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleModal(false, 'kg')} style={styles.modalTouchable}>
                  <Text style={styles.modalTouchableText}>(kg)</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => toggleModal(false)} style={[styles.modalTouchable, styles.cancelButton]}>
                  <Text style={[styles.modalTouchableText, {color: 'white'}]}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <Text>ISOLAR CERTAS PARTES DO CSS, POR EXEMPLO, O TAMANHO DAS FONTES</Text>
        </ScrollView>

        { backgroundModal &&
            <View style={{flex: 1, backgroundColor: 'black', height: '100%', width: '100%', position: 'absolute', opacity: 0.5}} />
        }
        { messageError &&
          <View style={styles.viewError}>
            <Text style={styles.messageError}>{messageError}</Text>
          </View>
        }
        <LottieView source={require('./animation/10548-forest.json')} progress={progressAnimation}/>
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
  modalView: {
    marginTop: '60%',
    width: '90%',
    height: '35%',
    backgroundColor: 'white',
    marginLeft: '5%',
    borderRadius: 20,
    borderWidth: 0.5,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 22,
    paddingTop: 25
  },
  ModalTouchablesView: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalTouchable: {
    height: 'auto',
    borderWidth: 0.5
  },
  cancelButton: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'black'
  },
  modalTouchableText: {
    textAlign: 'center',
    fontSize: 25,
    paddingVertical: 10
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
    height: '6%'
  }
});

export default App;