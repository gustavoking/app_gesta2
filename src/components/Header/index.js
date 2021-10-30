import React from 'react';
import {
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export default function Header({titulo = 'GESTA'}) {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => navigation.toggleDrawer()}>
        <Icon name="menu" color="#FECEA5" size={25} style={{marginLeft: 5}} />
      </TouchableWithoutFeedback>
      <Text style={styles.text}>{titulo}</Text>
      {/* <TouchableWithoutFeedback
                onPress={() => navigation.goBack()}>
                <Icon name="keyboard-backspace" color="#FECEA5" size={25} style={{ marginRight: 5 }} />
            </TouchableWithoutFeedback> */}
      <View />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#3F5C57',
    flexDirection: 'row',
    height: 50,
    elevation: 5,
  },
  text: {
    color: '#FECEA5',
    fontSize: 20,
    marginLeft: -20,
  },
});
