import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TextInput } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React from 'react'

export default class Chance extends React.Component {

    constructor(props) {
        super(props); 
        this.state = {
            mobileNumber: false,
        }
    }

    render() {
        const { mobileNumber } = this.state;

        return (

            <View style={styles.Container}>

                <>
                    <View style={styles.Chancelogo}>
                        <Image style={{ width: 250, height: 250, top: 30 }} source={require('../Images/wewe.png')} />
                        <Image style={{ width: 150, height: 100, bottom: 20 }} source={require('../Images/Chance.png')} />
                    </View>
                </>

                <>
                    <View style={styles.Chancetext}>
                        <Text style={styles.Textmain}>The personality first connecting app</Text>
                        <Text style={styles.SubText}>if you were a fruit, then you'd be a fine-apple</Text>
                        <Text style={styles.SubText2}>Alredy a user? Try <Text onPress={() => { this.setState({ mobileNumber: true }) }} style={{ color: '#110bd6' }}>Signing in </Text></Text>
                    </View>

                </>

                <>
                    <Modal visible={mobileNumber}
                        transparent={true}
                        onRequestClose={() => { this.setState({ mobileNumber: false }) }} >
                        <View style={styles.Mobilenumbermodal} >
                            <View style={styles.mainmodal} >
                                <Text style={styles.modaltext}>Enter Your Number</Text>
                                <TextInput style={styles.modelinput} maxLength={10} placeholder='_ _ _ _ _ _ _ _ _ _' placeholderTextColor={'#858585'} keyboardType="number-pad" />
                                <TouchableOpacity style={styles.nextbtn}>
                                    <Text style={styles.nextbtntext}>Next</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </>

                <>
                    <View style={styles.btn}>
                        <TouchableOpacity style={styles.movebtn}>
                            <Image source={require('../Images/Arrow.png')} style={styles.arrowimage} />
                        </TouchableOpacity>
                    </View>
                </>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    Chancelogo: {
        flex: 2,
        width: '100%',
        height: 500,
        paddingTop: 15,
        backgroundColor: '#edf9fd',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    Chancetext: {
        flex: 2,
        width: '100%',
        height: 500,
        backgroundColor: '#ffffff',
    },
    Textmain: {
        color: '#000',
        fontSize: 35,
        letterSpacing: 3,
        paddingTop: 20,
        paddingLeft: 30,
    },
    SubText: {
        color: '#000',
        fontSize: 15,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 20,
    },
    SubText2: {
        color: '#000',
        fontSize: 15,
        paddingTop: 15,
        paddingLeft: 30,
        paddingRight: 20,
    },
    Mobilenumbermodal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    mainmodal: {
        padding: 15,
        width: '100%',
        height: 300,
        backgroundColor: '#ffffff',
        borderTopRightRadius: 17,
        borderTopLeftRadius: 17,
        overflow: 'hidden',
        elevation: 20,
    },
    modaltext: {
        fontWeight: '500',
        fontSize: 25,
        color: '#000',
        textAlign: 'left',
        width: '100%',
        padding: 10
    },
    modelinput: {
        fontSize: 20,
        width: '100%',
        color: "black",
        backgroundColor: 'white',
        letterSpacing: 5,
        padding: 10,
    },
    nextbtn: {
        width: '90%',
        backgroundColor: '#86b2e5',
        height: 50,
        alignSelf: 'center',
        top: 120
    },
    nextbtntext: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18,
        top: 13
    },
    btn: {
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 20
    },
    movebtn: {
        width: 50,
        height: 50,
        backgroundColor: '#86b2e5',
        borderRadius: 50 / 2,
    },
    arrowimage: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        overflow: 'hidden',
        top: 12,
        left: 1
    }

})
