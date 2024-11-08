import React from 'react';
import { Pressable, Text, Linking } from 'react-native';
import { styles } from './whatsapp-login.style';
import { WhatsappButtonProps } from './whatsapp-login.type';
import { WhatsappIcon } from './_icon/whatsapp.icon';

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  callBackScreen,
  whatsappNumberCore,
  defaultMessageLogin,
  buttonText = 'Sign Up with WhatsApp',
}) => {
  const number = whatsappNumberCore || process.env.WHATSAPP_NUMBER_CORE;
  const message = defaultMessageLogin || process.env.DEFAULT_MESSAGE_LOGIN;

  const handlePress = () => {
    if (!number || !message) {
      console.log('Number or message not configured.');
      // Alert.alert('Error', 'Number or message not configured.');
      return;
    }

    const url = `whatsapp://send?phone=${number}&text=${encodeURIComponent(message)}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (!supported) {
          console.log('WhatsApp is not installed.');
          // Alert.alert('Erro', 'WhatsApp is not installed.');
        } else {
          Linking.openURL(url)
            .then(() => {
              callBackScreen();
            })
            .catch(() => {
              console.log('Unable to open WhatsApp.');
              // Alert.alert('Error', 'Unable to open WhatsApp.');
            });
        }
      })
      .catch(() => console.log('An error occurred while checking WhatsApp.'));
  };

  return (
    <Pressable style={styles.button} onPress={handlePress}>
      <WhatsappIcon width={20} height={20} color="#fff" />
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

export { WhatsappButton };