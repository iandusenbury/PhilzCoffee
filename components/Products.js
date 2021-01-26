import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../actions/cart'

import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import { Button, ListItem, Avatar, Icon } from 'react-native-elements'

function Item({ id }) {
  const dispatch = useDispatch()
  const product = useSelector(state => state.products.products[id])

  return (
    <ListItem bottomDivider>
      <Avatar source={{uri: product.image}} />
      <ListItem.Content style={styles.item}>
        <ListItem.Title>{product.title}</ListItem.Title>

        <ListItem.Subtitle>
          <Button
            style={styles.addToCartButton}
            title="Add to Cart"
            onPress={() => dispatch(addToCart(product.id))}
            icon={
              <Icon
                style={styles.cartIcon}
                name="cart-plus"
                type='font-awesome'
                color="#fff"
              />
            }
          />
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default function Products()  {
  const productIds = useSelector(state => state.products.productIds)

  const renderItem = ({ item }) => <Item id={item} />

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Products</Text>

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
    paddingTop: 22,
   },
  item: {
    flex: 1,
    fontSize: 18,
    alignItems: 'flex-start',
  },
  addToCartButton: {
    paddingTop: 10
  },
  cartIcon: {
    paddingRight: 10
  },
  titleText: { // TODO: extract out for reuse
    fontSize: 30,
    alignItems: 'center',
    padding: 20
  }
})
