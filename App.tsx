import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import './localization';
import {useTranslation} from 'react-i18next';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {t} = useTranslation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.main}>
        <View>
          <Text>{t('Welcome to React')}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
