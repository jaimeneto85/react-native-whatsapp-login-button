import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { WhatsappButton } from './index';
import { Linking } from 'react-native';

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn(),
  canOpenURL: jest.fn(() => Promise.resolve(true)),
}));

describe('WhatsappButton', () => {
  it('should render correctly', () => {
    const { getByText } = render(<WhatsappButton callBackScreen={() => {}} />);
    expect(getByText('Login com WhatsApp')).toBeTruthy();
  });

  it('should open WhatsApp when pressed', () => {
    const { getByText } = render(
      <WhatsappButton
        callBackScreen={() => {}}
        whatsappNumberCore="+5511999999999"
        defaultMessageLogin="Teste"
      />
    );

    fireEvent.press(getByText('Login com WhatsApp'));
    expect(Linking.openURL).toHaveBeenCalled();
  });
});
