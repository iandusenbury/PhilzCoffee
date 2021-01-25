import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/products'

import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Button,
} from 'react-native'

function Item({ id }) {
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.products[id])

  return (
    <View style={styles.item}>
      <Text>{product.title}</Text>

      <Button
        title="Add to Cart"
        color="#841584"
        onPress={() => dispatch(addToCart(id))}
      />
    </View>
  )
}

export default function Products()  {
  const productIds = useSelector(state => state.products.productIds)

  const renderItem = ({ item }) => <Item id={item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text>Products</Text>

      <FlatList
        data={productIds}
        renderItem={renderItem}
        keyExtractor={item => `${item}`}
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
