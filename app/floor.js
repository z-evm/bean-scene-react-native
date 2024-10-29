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
  const { bookedTables } = route?.params || {}; 
  var booktables;
  if (bookedTables == null || bookedTables == undefined) {
    booktables = [];
  } else {
    booktables = bookedTables;
  }
  return (
  <SafeAreaView resizeMode="contain" style={styles.container}>
    <ScrollView>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M1")} style={[booktables.includes("M1") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M1",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M1") ? "M1 - Booked" : "M1"]}</Text>
        </Pressable>
      </View>  
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M2")} style={[booktables.includes("M2") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M2",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M2") ? "M2 - Booked" : "M2"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M3")} style={[booktables.includes("M3") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M3",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M3") ? "M3 - Booked" : "M3"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M4")} style={[booktables.includes("M4") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M4",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M4") ? "M4 - Booked" : "M4"]}</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M5")} style={[booktables.includes("M5") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M5",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M5") ? "M5 - Booked" : "M5"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M6")} style={[booktables.includes("M6") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M6",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M6") ? "M6 - Booked" : "M6"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M7")} style={[booktables.includes("M7") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M7",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M7") ? "M7 - Booked" : "M7"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M8")} style={[booktables.includes("M8") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M8",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M8") ? "M8 - Booked" : "M8"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M9")} style={[booktables.includes("M9") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M9",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M9") ? "M9 - Booked" : "M9"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("M10")} style={[booktables.includes("M10") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "M10",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("M10") ? "M10 - Booked" : "M10"]}</Text>
        </Pressable>
        
      </View>

      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O1")} style={[booktables.includes('"O1"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O1",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O1") ? "O1 - Booked" : "O1"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O2")} style={[booktables.includes('"O2"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O2",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O2") ? "O2 - Booked" : "O2"]}</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O3")} style={[booktables.includes('"O3"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O3",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O3") ? "O3 - Booked" : "O3"]}</Text>
        </Pressable>
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O4")} style={[booktables.includes('"O4"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O4",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O4") ? "O4 - Booked" : "O4"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O5")} style={[booktables.includes('"O5"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O5",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O5") ? "O5 - Booked" : "O5"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O6")} style={[booktables.includes('"O6"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O6",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O6") ? "O6 - Booked" : "O6"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O7")} style={[booktables.includes('"O7"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O7",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O7") ? "O7 - Booked" : "O7"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O8")} style={[booktables.includes('"O8"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O8",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O8") ? "O8 - Booked" : "O8"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O9")} style={[booktables.includes('"O9"') ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O9",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O9") ? "O9 - Booked" : "O9"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("O10")} style={[booktables.includes("O10") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "O10",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("O10") ? "O10 - Booked" : "O10"]}</Text>
        </Pressable>
        
      </View>

      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B1")} style={[booktables.includes("B1") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B1",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B1") ? "B1 - Booked" : "B1"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B2")} style={[booktables.includes("B2") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B2",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B2") ? "B2 - Booked" : "B2"]}</Text>
        </Pressable>

      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B3")} style={[booktables.includes("B3") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B3",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B3") ? "B3 - Booked" : "B3"]}</Text>
        </Pressable>

      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B4")} style={[booktables.includes("B4") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B4",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B4") ? "B4 - Booked" : "B4"]}</Text>
        </Pressable>

      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B5")} style={[booktables.includes("B5") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B5",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B5") ? "B5 - Booked" : "B5"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B6")} style={[booktables.includes("B6") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B6",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B6") ? "B6 - Booked" : "B6"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B7")} style={[booktables.includes("B7") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B7",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B7") ? "B7 - Booked" : "B7"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B8")} style={[booktables.includes("B8") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B8",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B8") ? "B8 - Booked" : "B8"]}</Text>
        </Pressable>
       
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B9")} style={[booktables.includes("B9") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B9",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B9") ? "B9 - Booked" : "B9"]}</Text>
        </Pressable>
        
      </View>
      <View style={styles.fixToText}>
        <Pressable disabled={booktables.includes("B10")} style={[booktables.includes("B10") ? styles.reserveButtonRed : styles.reserveButton]} onPress={() => {
          navigation.navigate('Order', {
            tableId: "B10",
            bookedTables: bookedTables,
          });
        }}>
            <Text style={styles.text}>{[booktables.includes("B10") ? "B10 - Booked" : "B10"]}</Text>
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
    backgroundColor: '#000',
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