import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

const Welcome = () => {
  const {t} = useTranslation();

  return (
    <View>
      <Text>{t('Welcome to React', {useSuspense: false})}</Text>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
