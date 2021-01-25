import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button
} from 'react-native'

function Item({ id, quantity }) {
  // const dispatch = useDispatch()
  const product = useSelector(state => state.products.products[id])

  return (
    <View style={styles.item}>
      <Text>{product.title}</Text>
      <Text>quantity: {quantity}</Text>

      <Button
        title="Remove"
        color="#841584"
        onPress={() => {}}
      />
    </View>
  )
}

export default function Cart() {
  const items = useSelector(state => state.cart.items)
  const formattedData = Object.values(items)

  const renderItem = ({ item }) => <Item id={item.id} quantity={item.quantity} />
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Cart</Text>

      <FlatList
        data={formattedData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
   },
  item: {
    flex: 1,
    padding: 10,
    fontSize: 18,
    alignItems: 'flex-start',
  }
})

