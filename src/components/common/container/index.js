import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../../../../styles/global';


const Container = ({children , style}) => {
  return (
      <ScrollView>
          <View style={styles.wrapper}>
                  {children}
            </View>
      </ScrollView>
    
  );
};
export default Container;
