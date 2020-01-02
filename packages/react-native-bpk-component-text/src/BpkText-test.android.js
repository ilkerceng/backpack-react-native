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
import renderer from 'react-test-renderer';
import BpkThemeProvider from 'react-native-bpk-theming';

import BpkText from './BpkText';
import commonTests from './BpkText-test.common';

import { WEIGHT_STYLES } from '..';

jest.mock('react-native', () => {
  const reactNative = jest.requireActual('react-native');
  jest
    .spyOn(reactNative.Platform, 'select')
    .mockImplementation(obj => obj.android || obj.default);
  reactNative.Platform.OS = 'android';

  return reactNative;
});

jest.mock('bpk-tokens/tokens/base.react.native', () =>
  jest.requireActual('bpk-tokens/tokens/base.react.native.android.js'),
);

describe('Android', () => {
  commonTests();

  Object.keys(WEIGHT_STYLES).forEach(weight => {
    it(`should render correctly with custom font for weight ${weight}`, () => {
      const theme = {
        textFontFamily: 'themed_font',
      };
      const tree = renderer
        .create(
          <BpkThemeProvider theme={theme}>
            <BpkText weight={weight} textStyle="xxl">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </BpkText>
          </BpkThemeProvider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
