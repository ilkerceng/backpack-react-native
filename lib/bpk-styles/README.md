# bpk-styles

> Common styles for React Native components.

## Installation

Check the main [Readme](https://github.com/skyscanner/backpack-react-native#usage) for a complete installation guide.

## Shadows

The package includes definitions for the Backpack shadows. These are available as objects that can be spread in style definitions. These are iOS only and need to be complemented with an appropriate elevation for Android.

### Usage

```javascript
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  colorWhite,
  borderRadiusXs,
  elevationBase,
  elevationLg,
} from 'bpk-tokens/tokens/base.react.native';
import { shadows } from 'backpack-react-native/bpk-styles';

const styles = StyleSheet.create({
  component: {
    backgroundColor: colorWhite,
    borderRadius: borderRadiusXs,
    ...Platform.select({
      ios: shadows.base(),
      android: {
        elevation: elevationBase,
      },
    }),
  },
  componentFocused: Platform.select({
    ios: shadows.large(),
    android: {
      elevation: elevationLg,
    },
  }),
});

const MyComponent = props => {
  const { focused, children } = props;
  return (
    <View style={[styles.component, focused && styles.componentFocused]}>
      {children}
    </View>
  );
};

export default MyComponent;
```

## Gradients

The package includes definitions for the Backpack gradients. These are available as objects that can be spread in the props of a `LinearGradient` from `react-native-linear-gradient`.

### Usage

```javascript
import React from 'react';
import { View } from 'react-native-linear-gradient';
import LinearGradient from 'react-native-linear-gradient';
import {
  colorWhite,
  borderRadiusXs,
  elevationBase,
  elevationLg,
} from 'bpk-tokens/tokens/base.react.native';
import { gradients } from 'bpk-styles';

const MyComponent = props => {
  return (
    <View>
      <LinearGradient {...gradients.primary()}>{children}</LinearGradient>
      <LinearGradient {...gradients.primary(gradients.ANGLES.down)}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default MyComponent;
```

### API

The `gradients.primary` function takes an optional argument indicating the direction(given by the start to end) of the gradient. The valid directions are available in `gradients.ANGLES` and are:

- `ANGLES.down`
- `ANGLES.right`
- `ANGLES.left`
- `ANGLES.up`
- `ANGLES.topLeft`
- `ANGLES.topRight`
- `ANGLES.bottomLeft`
- `ANGLES.bottomRight`
