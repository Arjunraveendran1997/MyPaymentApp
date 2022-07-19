import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';

import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert
} from 'react-native'

export default function App() {

  const handlePayment = () => {
    var options = {
      name: "In makes",
      description: "For test payment",
      currency: 'INR',
      amount: 50000,
      key: 'rzp_test_PN4spOP304nFBY',
      prefill: {
        email: "arjun@gmail.com",
        contact: '27491342139',
        name: 'tester'
      },
      theme: { color: "#528FF0" }
    }
    RazorpayCheckout.open(options).then((response) => {
      Alert.alert("Successfully payed")
    }).catch((error) => {
      Alert.alert(`Payment failed : ${error.code} | ${error.description}`)
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Inmakes</Text>
      <Text style={styles.rupeeText}>Rs.500</Text>
      <View style={styles.button}>
        <Button title='Buy' onPress={handlePayment} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  button: {
    width: '30%',
    height: 40,
    backgroundColor: 'blue'
  },
  rupeeText: {
    fontSize: 18,
    fontWeight: "bold",
    color: 'green',
    marginTop: 20,
    marginBottom: 20
  }
})