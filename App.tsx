import React from 'react';
import {SafeAreaView, StyleSheet, Text, StatusBar} from 'react-native';
import './localization';
import {useTranslation} from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import Section from './Section';

declare const global: {HermesInternal: null | {}};

const App = () => {
  const {t} = useTranslation();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaView style={styles.main}>
        <Section title="NAMESPACES">
          <Text>homePage NS: {t('homePage:welcome')}</Text>
          <Text>Deafult NS: {t('ok')}</Text>
        </Section>
        <Section title="CHANGE LANGUAGE">
          <LanguageSelector />
        </Section>
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
