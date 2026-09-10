import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';

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
        <Text style={styles.itemProductText}>Cappucino Especial</Text>
        <Text style={styles.subtitleItemProduct}>Cremoso e Delicioso</Text>
        <Text style={styles.sellItemProductText}>12,90</Text>
      </View>

      <View style={styles.principalContainer}>
        <Text style={styles.sectionTitle}>Nosso Cardápio</Text>

        <View style={styles.containerCards}>

          <View style={styles.cardItem}>
            <Text style={styles.subItemProductText}>Expresso</Text>
            <Text style={styles.subtitleSubItemProduct}>Puro e forte</Text>
            <Text style={styles.sellSubItemProductText}>R$ 7,00</Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.subItemProductText}>Cappucino</Text>
            <Text style={styles.subtitleSubItemProduct}>Clássico com espuma</Text>
            <Text style={styles.sellSubItemProductText}>R$ 12,90</Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.subItemProductText}>Latte</Text>
            <Text style={styles.subtitleSubItemProduct}>Leite cremoso</Text>
            <Text style={styles.sellSubItemProductText}>R$ 11,50</Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.subItemProductText}>Mocha</Text>
            <Text style={styles.subtitleSubItemProduct}>Toque de chocolate</Text>
            <Text style={styles.sellSubItemProductText}>R$ 13,50</Text>
          </View>

        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    paddingTop: 60,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#2fd2c'
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9b9b9b',
    marginTop: 4
  },
  avatarPlaceholder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  principalContainer: {
    width: '100%',
    paddingTop: 30,
    flexDirection: 'column',
    paddingHorizontal: 24,
  },
  containerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2fd2c'
  },
  containerSubtitle: {
    fontSize: 16,
    color: '#9b9b9b',
    marginTop: 8
  },
  myImage: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  cardProduct: {
    backgroundColor: '#ffffff',
    margin: 24,
    padding: 20,
    marginBottom: 32,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    borderRadius: 16,
    gap: 8
  },
  itemProductText: {
    fontSize: 20,
    color: '#2fd2c',
    fontWeight: 800
  },
  subtitleItemProduct: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  sellItemProductText: {
    fontSize: 20,
    color: '#c67c4e',
    fontWeight: 800
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: 800,
    color: '#2f2d2c',
    marginBottom: 16
  },
  cardItem: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    elevation: 3,
    marginBottom: 16,
    display:  'flex',
    flexDirection: 'column',
    gap: 5
  },
  subItemProductText: {
    fontSize: 18,
    color: '#2fd2c',
    fontWeight: 800
  },
  subtitleSubItemProduct: {
    fontSize: 14,
    color: '#9b9b9b',
  },
  sellSubItemProductText: {
    fontSize: 16,
    color: '#c67c4e',
    fontWeight: 800
  },
  containerCards:{
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between'
  } 

})