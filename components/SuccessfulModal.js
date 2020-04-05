import React from 'react'
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const SuccessfulModal = (props) => {
    return (
        <Modal animationType='slide' visible={props.modalVisible} transparent={true}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>
                {`Parabéns, você acabou de reciclar ${props.quantity}${props.measureOption} de ${props.product}`}
            </Text>

            <LottieView source={require('../animations/trash-successfully.json')} autoPlay loop={false} />
            <View style={styles.ModalTouchablesView}>
              <TouchableOpacity onPress={() => props.toggleModal(false)} style={[styles.modalTouchable, styles.cancelButton]}>
                <Text style={[styles.modalTouchableText, {color: 'white'}]}>Ok</Text>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>
    )
}

export default SuccessfulModal

const styles = StyleSheet.create({
    modalView: {
        marginTop: '60%',
        width: '90%',
        height: '35%',
        backgroundColor: 'white',
        marginLeft: '5%',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 25,
    },
    ModalTouchablesView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    modalTouchable: {
        height: 'auto',
        borderTopWidth: 0.5
    },
    cancelButton: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'green',
    },
    modalTouchableText: {
        textAlign: 'center',
        fontSize: 25,
        paddingVertical: 10
    }
})