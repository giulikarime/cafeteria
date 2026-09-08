import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>

        <View id='header-text'>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez.</Text>
        </View>

        <View style={styles.avatarPlaceholder}>
          <Ionicons name='person' size={20} color='#2f2d2c'></Ionicons>
        </View>

      </View>

      <View style={styles.principalContainer}>
        <Text style={styles.containerTitle}>Bom dia!</Text>
        <Text style={styles.containerSubtitle}>Que tal um café hoje?</Text>
      </View>

      <View style={styles.cardProduct}>
        <Image style={styles.myImage} source={require('./assets/coffee.jpg')}></Image>
        <Text>Cappucino Especial</Text>
        <Text>Cremoso e Delicioso</Text>
        <Text>12,90</Text>
      </View>
    </ScrollView> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  header:{
    width: '100%',
    paddingTop:60,
    paddingHorizontal: 24,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  headerTitle:{
    fontSize:22,
    fontWeight: '800',
    color: '#2fd2c'
  },
  headerSubtitle:{
    fontSize: 14,
    color: '#9b9b9b',
    marginTop: 4
  },
  avatarPlaceholder:{
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  principalContainer:{
    width: '100%',
    paddingTop:30,
    flexDirection:'column',
    paddingHorizontal: 24,
  },
  containerTitle:{
    fontSize:32,
    fontWeight: '800',
    color: '#2fd2c'
  },
  containerSubtitle:{
    fontSize: 16,
    color: '#9b9b9b',
    marginTop: 8
  },
  myImage:{
    width:'100%',
    height: '80%',
    borderRadius: 10
  },
  cardProduct:{
    backgroundColor:'#ffffff',
    margin: 24,
    padding: 30,
    marginBottom: 32,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    elevation:4,
    borderRadius: 16
  }
})