import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native'

import { Icon, ListItem, Avatar } from 'react-native-elements'
import { incItemQuantity, decItemQuantity, removeItem } from '../actions/cart'

// TODO: extract into own component
function Item({ id, quantity }) {
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.products[id])

  return (
    <ListItem bottomDivider>
      <Avatar source={{uri: product.image}} />
      <ListItem.Content>
        <ListItem.Title>{product.title}</ListItem.Title>
        <View style={styles.subtitle}>
          <Icon
            name='minus-square-o'
            type='font-awesome'
            color='#000'
            onPress={() => dispatch(decItemQuantity(id))}
          />
          <Text style={styles.quantity}>quantity: {quantity} </Text>
          <Icon
            style={styles.minusIcon}
            name='plus-square-o'
            type='font-awesome'
            color='#000'
            onPress={() => dispatch(incItemQuantity(id))}
          />
          <Icon
            name='trash'
            type='font-awesome'
            color='#FF0000'
            onPress={() => dispatch(removeItem(id))}
          />
          </View>
      </ListItem.Content>
    </ListItem>
  )
}

export default function Cart() {
  const items = useSelector(state => state.cart.items)
  const formattedData = Object.values(items)

  const renderItem = ({ item }) => <Item key={item.id} id={item.id} quantity={item.quantity} />
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Cart</Text>
      
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
  },
  subtitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  minusIcon: {
    paddingRight: 10,
  },
  titleText: { // TODO: extract out for reuse
    fontSize: 30,
    alignItems: 'center',
    padding: 20,
  }
})

