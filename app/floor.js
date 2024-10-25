import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  ScrollView
} from 'react-native';
const Floor = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M1",
          });
        }}>
            <Text style={styles.text}>M1</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M1",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M2",
          });
        }}>
            <Text style={styles.text}>M2</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M2",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M3",
          });
        }}>
            <Text style={styles.text}>M3</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M3",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M4",
          });
        }}>
            <Text style={styles.text}>M4</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M4",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M5",
          });
        }}>
            <Text style={styles.text}>M5</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M5",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M6",
          });
        }}>
            <Text style={styles.text}>M6</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M6",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M7",
          });
        }}>
            <Text style={styles.text}>M7</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M7",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M8",
          });
        }}>
            <Text style={styles.text}>M8</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M8",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M9",
          });
        }}>
            <Text style={styles.text}>M9</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M9",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M10",
          });
        }}>
            <Text style={styles.text}>M10</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M10",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>

      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O1",
          });
        }}>
            <Text style={styles.text}>O1</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O1",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O2",
          });
        }}>
            <Text style={styles.text}>O2</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O2",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O3",
          });
        }}>
            <Text style={styles.text}>O3</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O3",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O4",
          });
        }}>
            <Text style={styles.text}>O4</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O4",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O5",
          });
        }}>
            <Text style={styles.text}>O5</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O5",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O6",
          });
        }}>
            <Text style={styles.text}>O6</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O6",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O7",
          });
        }}>
            <Text style={styles.text}>O7</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O7",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O8",
          });
        }}>
            <Text style={styles.text}>O8</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O8",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O9",
          });
        }}>
            <Text style={styles.text}>O9</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O9",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O10",
          });
        }}>
            <Text style={styles.text}>O10</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O10",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>

      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B1",
          });
        }}>
            <Text style={styles.text}>B1</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B1",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B2",
          });
        }}>
            <Text style={styles.text}>B2</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B2",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B3",
          });
        }}>
            <Text style={styles.text}>B3</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B3",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B4",
          });
        }}>
            <Text style={styles.text}>B4</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B4",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B5",
          });
        }}>
            <Text style={styles.text}>B5</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B5",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B6",
          });
        }}>
            <Text style={styles.text}>B6</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B6",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B7",
          });
        }}>
            <Text style={styles.text}>B7</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B7",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B8",
          });
        }}>
            <Text style={styles.text}>B8</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B8",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B9",
          });
        }}>
            <Text style={styles.text}>B9</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B9",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable style={styles.reserveButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B10",
          });
        }}>
            <Text style={styles.text}>B10</Text>
        </Pressable>
        <Pressable style={styles.orderButton} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B10",
          });
        }}>
            <Text style={styles.text}>Order</Text>
        </Pressable>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  reserveButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#2F6672',
    width:'65%',
    fontFamily: 'Open Sans',
  },
  orderButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#4AA1B5',
    textAlign:'center',
    width:'30%',
    fontFamily: 'Open Sans',
  },
  text: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Floor;