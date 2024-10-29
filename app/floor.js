import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Pressable,
  ScrollView
} from 'react-native';
export function Floor({route, navigation}) {
  const { bookedTables = [] } = route?.params || {}; 

  return (
  <SafeAreaView resizeMode="contain" style={styles.container}>
    <ScrollView>
      <View style={styles.fixToText}>
      
        <Pressable disabled={bookedTables.includes("M1")} style={[bookedTables.includes("M1") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M1",
          });
        }}>
            <Text style={styles.text}>M1</Text>
        </Pressable>
      </View>  
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M2")} style={[bookedTables.includes("M2") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M2",
          });
        }}>
            <Text style={styles.text}>M2</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M3")} style={[bookedTables.includes("M3") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M3",
          });
        }}>
            <Text style={styles.text}>M3</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M4")} style={[bookedTables.includes("M4") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M4",
          });
        }}>
            <Text style={styles.text}>M4</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M5")} style={[bookedTables.includes("M5") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M5",
          });
        }}>
            <Text style={styles.text}>M5</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M6")} style={[bookedTables.includes("M6") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M6",
          });
        }}>
            <Text style={styles.text}>M6</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M7")} style={[bookedTables.includes("M7") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M7",
          });
        }}>
            <Text style={styles.text}>M7</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M8")} style={[bookedTables.includes("M8") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M8",
          });
        }}>
            <Text style={styles.text}>M8</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M9")} style={[bookedTables.includes("M9") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M9",
          });
        }}>
            <Text style={styles.text}>M9</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("M10")} style={[bookedTables.includes("M10") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M10",
          });
        }}>
            <Text style={styles.text}>M10</Text>
        </Pressable>
        
      </View>

      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O1")} style={[bookedTables.includes('"O1"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O1",
          });
        }}>
            <Text style={styles.text}>O1</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O2")} style={[bookedTables.includes('"O2"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O2",
          });
        }}>
            <Text style={styles.text}>O2</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O3")} style={[bookedTables.includes('"O3"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O3",
          });
        }}>
            <Text style={styles.text}>O3</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O4")} style={[bookedTables.includes('"O4"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O4",
          });
        }}>
            <Text style={styles.text}>O4</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O5")} style={[bookedTables.includes('"O5"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O5",
          });
        }}>
            <Text style={styles.text}>O5</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O6")} style={[bookedTables.includes('"O6"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O6",
          });
        }}>
            <Text style={styles.text}>O6</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O7")} style={[bookedTables.includes('"O7"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O7",
          });
        }}>
            <Text style={styles.text}>O7</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O8")} style={[bookedTables.includes('"O8"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O8",
          });
        }}>
            <Text style={styles.text}>O8</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O9")} style={[bookedTables.includes('"O9"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O9",
          });
        }}>
            <Text style={styles.text}>O9</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("O10")} style={[bookedTables.includes("O10") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O10",
          });
        }}>
            <Text style={styles.text}>O10</Text>
        </Pressable>
        
      </View>

      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B1")} style={[bookedTables.includes("B1") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B1",
          });
        }}>
            <Text style={styles.text}>B1</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B2")} style={[bookedTables.includes("B2") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B2",
          });
        }}>
            <Text style={styles.text}>B2</Text>
        </Pressable>

      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B3")} style={[bookedTables.includes("B3") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B3",
          });
        }}>
            <Text style={styles.text}>B3</Text>
        </Pressable>

      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B4")} style={[bookedTables.includes("B4") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B4",
          });
        }}>
            <Text style={styles.text}>B4</Text>
        </Pressable>

      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B5")} style={[bookedTables.includes("B5") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B5",
          });
        }}>
            <Text style={styles.text}>B5</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B6")} style={[bookedTables.includes("B6") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B6",
          });
        }}>
            <Text style={styles.text}>B6</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B7")} style={[bookedTables.includes("B7") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B7",
          });
        }}>
            <Text style={styles.text}>B7</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B8")} style={[bookedTables.includes("B8") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B8",
          });
        }}>
            <Text style={styles.text}>B8</Text>
        </Pressable>
       
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B9")} style={[bookedTables.includes("B9") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B9",
          });
        }}>
            <Text style={styles.text}>B9</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={bookedTables.includes("B10")} style={[bookedTables.includes("B10") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B10",
          });
        }}>
            <Text style={styles.text}>B10</Text>
        </Pressable>
        
      </View>
    </ScrollView>
  </SafeAreaView>
  );
};

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
    width:'100%',
    fontFamily: 'Open Sans',
    '&$disabled': {
        color: 'red',
    },
  },
  reserveButtonRed: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
    width:'100%',
    fontFamily: 'Open Sans',
  },
  text: {
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  hide: {
    display:'none',
  }
});

export default Floor;