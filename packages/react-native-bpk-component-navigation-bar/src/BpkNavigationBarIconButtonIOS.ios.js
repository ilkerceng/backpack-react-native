/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016-2020 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';
import BpkIcon, { icons } from 'react-native-bpk-component-icon';
import {
  colorSkyGrayTint04,
  textPrimaryColor,
} from 'bpk-tokens/tokens/base.react.native';
import { useBpkDynamicValue } from 'react-native-bpk-appearance';

export type Props = {
  title: string,
  icon: $Keys<typeof icons>,
  disabled: boolean,
  onPress: ?() => mixed,

  // Internal only
  leading: boolean,
  tintColor: ?string,
  disabledTintColor: ?string,
};

const styles = StyleSheet.create({
  button: {
    zIndex: 2,
    height: '100%',
    justifyContent: 'center',
  },
  icon: {
    lineHeight: 28,
    fontSize: 28,
  },
  leading: {
    marginStart: 3, // eslint-disable-line backpack/use-tokens
  },
  trailing: {
    marginEnd: 3, // eslint-disable-line backpack/use-tokens
  },
});

const BpkNavigationBarIconButtonIOS = (props: Props) => {
  const {
    title,
    disabled,
    icon,
    leading,
    onPress,
    disabledTintColor,
    tintColor,
    ...rest
  } = props;
  const defaultTintColor = useBpkDynamicValue(textPrimaryColor);
  const tintColorFinal = disabled
    ? disabledTintColor || colorSkyGrayTint04
    : tintColor || defaultTintColor;
  const iconStyle = [styles.icon, { color: tintColorFinal }];
  const buttonStyle = [styles.button];
  const accessibilityStates = [];

  if (disabled) {
    accessibilityStates.push('disabled');
  }

  if (leading) {
    buttonStyle.push(styles.leading);
  } else {
    buttonStyle.push(styles.trailing);
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      accessibilityRole="button"
      accessibilityStates={accessibilityStates}
      accessibilityLabel={title}
      accessible
      style={buttonStyle}
      disabled={disabled}
      {...rest}
    >
      <BpkIcon icon={icons[icon]} style={iconStyle} />
    </TouchableOpacity>
  );
};

BpkNavigationBarIconButtonIOS.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  // Internal only
  leading: PropTypes.bool,
  tintColor: PropTypes.string,
  disabledTintColor: PropTypes.string,
};

BpkNavigationBarIconButtonIOS.defaultProps = {
  disabled: false,
  onPress: null,
  // Internal only
  leading: false,
  tintColor: null,
  disabledTintColor: null,
};

export default BpkNavigationBarIconButtonIOS;
