import React from 'react';
import { Platform } from 'react-native';
import {
  HeaderButton,
  HeaderButtonProps,
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const HeaderButtonComponent = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color='black'
    />
  );
};

export default HeaderButtonComponent;
