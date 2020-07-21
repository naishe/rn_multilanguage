import React, {ReactNode} from 'react';
import {StyleSheet, View, Text} from 'react-native';

interface Props {
  children: ReactNode;
  title: string;
}

const Section = ({title, children}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {children}
    </View>
  );
};

export default Section;

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    marginVertical: 10,
    padding: 10,
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'maroon',
  },
});
