import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';
import CardPeripherique from './cardPeripherique';
const {width} = Dimensions.get('window');
const scale = width / 420;

import {Modal, Portal} from 'react-native-paper';
import {TextInput} from 'react-native-paper';

export default function Apparailes() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState('');
  const onClose = () => setIsOpen(false);

  const [visible, setVisible] = React.useState(false);
  const [textColor, setTextColor] = React.useState(colors.primary);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [type, setType] = React.useState('');
  const [access, setAccess] = React.useState('');
  const [ipAddress, setIpAddress] = React.useState('');
  const [macAddress, setMacAddress] = React.useState('');
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Apparailes" />
        <ScrollView>
          <View
            style={{
              width: '100%', // adjust the width to your needs
              height: 10000 * scale, // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale, // this will create a semi-circle
              position: 'fixed',
              top: 0 * scale,
              left: 0 * scale,
            }}>
            <NativeBaseProvider>
              {/* here the rest of code */}

              <View
                style={{
                  marginTop: 30* scale,
                }}></View>

              <Card
                elevation={4}
                style={{
                  height: 270 * scale,
                  marginRight: 10 * scale,
                  marginLeft: 10 * scale,
                  backgroundColor: colors.Quaternary,
                  shadowColor: colors.white,
                  borderRadius: 30 * scale,
                  justifyContent: 'center',
                  marginTop: 30* scale,
                }}>
                <Card.Content
                  style={{
                    justifyContent: 'space-between',
                    marginLeftdcerfvr: 20* scale,
                  }}>
                  <Text
                    style={{
                      color: colors.primary,
                      fontSize: 23 * scale,
                      textAlign: 'center',
                      marginBottom: 20* scale,
                      fontWeight: 'bold',
                    }}>
                    peripherique N#
                  </Text>

                  <View
                    style={{
                      marginBottom: 20* scale,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: 17 * scale,

                          marginRight: 5 * scale,
                        }}>
                        Type :
                      </Text>

                      <Text
                        style={{
                          color: colors.secondary,
                          fontSize: 17 * scale,
                          fontWeight: 'bold',
                        }}>
                        Mobile
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: 17 * scale,

                          marginRight: 5 * scale,
                        }}>
                        Acces :
                      </Text>

                      <Text
                        style={{
                          color: colors.secondary,
                          fontSize: 17 * scale,
                          fontWeight: 'bold',
                        }}>
                        Admin
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                      }}>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: 17 * scale,

                          marginRight: 5 * scale,
                        }}>
                        Adresse IP :
                      </Text>

                      <Text
                        style={{
                          color: colors.secondary,
                          fontSize: 17 * scale,
                          fontWeight: 'bold',
                        }}>
                        192.168.123.132
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <Text
                        style={{
                          color: colors.white,
                          fontSize: 17 * scale,

                          marginRight: 5 * scale,
                        }}>
                        Adresse MAC :
                      </Text>

                      <Text
                        style={{
                          color: colors.secondary,
                          fontSize: 17 * scale,
                          fontWeight: 'bold',
                        }}>
                        00:1B:44:11:3A:B7
                      </Text>
                    </View>
                  </View>

                  <View style={{justifyContent: 'center'}}>
                    <Button
                      style={{
                        width: 170* scale,
                        backgroundColor: colors.primary,
                        marginHorizontal: 'auto',
                        borderRadius: 10* scale,

                        color: colors.Quaternary,
                      }}
                      mode="contained"
                      onPress={showModal}>
                      <Text
                        style={{
                          color: colors.Quaternary,
                          fontSize: 17 * scale,
                          fontWeight: 'bold',
                        }}>
                        Modifier
                      </Text>
                    </Button>

                    {/* hna push up */}
                  </View>
                </Card.Content>
              </Card>

              <CardPeripherique />
              <CardPeripherique />
              <CardPeripherique />
              <CardPeripherique />
              <CardPeripherique />
              <CardPeripherique />
            </NativeBaseProvider>
          </View>
        </ScrollView>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            padding: 40* scale,
            margin: 40* scale,
            backgroundColor: colors.white,
            borderRadius: 20* scale,
          }}>
           

<TouchableOpacity  style={{
             flexDirection: 'row',
             justifyContent: 'space-between',
             alignItems: 'center',
           
            }} onPress={hideModal}>
<View>

</View>
    <Image
            source={icons.exit}
            
            style={{
              height: 30 * scale,
              width: 30 * scale,
              tintColor: colors.Quaternary,
              padding: -20* scale,
              margin: -20* scale,
            
            }}
          />
</TouchableOpacity>
               
        
       

          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20* scale,
              color: colors.Quaternary,
              marginBottom: 20* scale,
            }}>
            Nouveau Peripherique
          </Text>

          <TextInput
            label={
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Type :{' '}
                <Text
                  style={{
                    fontWeight: 'normal',
                  }}>
                  Ex .Mobile
                </Text>
              </Text>
            }
            value={text}
            onChangeText={text => {
              setText(text);
              // change the text color to primary when the text changes
              setTextColor(colors.primary);
            }}
            style={{
              height: 50* scale,
              backgroundColor: '#9DB3BE',
              opacity: 0.6,
              borderRadius: 5* scale,
              color: colors.primary,
              marginBottom: 10* scale,
            }}
          />

          <TextInput
            label={
              <Text style={{fontWeight: 'bold'}} >
                Acces :{' '}
                <Text
                  style={{
                    fontWeight: 'normal',
                  }}>
                  Ex .Admin
                </Text>
              </Text>
            }
            value={access}
            onChangeText={text => setAccess(text)
              // change the text color to primary when the text changes
              
            }
            style={{
              height: 50* scale,
              backgroundColor: '#9DB3BE',
              opacity: 0.6,
              borderRadius: 5* scale,
              color: textColor,
              marginBottom: 10* scale,
            }}
          />

          <TextInput
            label={
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Adresse IP :{' '}
                <Text
                  style={{
                    fontWeight: 'normal',
                  }}>
                  Ex .192.168.XXX.XXX
                </Text>
              </Text>
            }
            value={ipAddress}
            onChangeText={text => setIpAddress(text)
              // change the text color to primary when the text changes
              
            }
            style={{
              height: 50* scale,
              backgroundColor: '#9DB3BE',
              opacity: 0.6,
              borderRadius: 5* scale,
              color: textColor,
              marginBottom: 10* scale,
            }}
          />
          <TextInput
            label={
              <Text
                style={{
                  fontWeight: 'bold',
                }}>
                Adresse MAC :{' '}
                <Text
                  style={{
                    fontWeight: 'normal',
                  }}>
                  Ex .XX:XX:XX:XX
                </Text>
              </Text>
            }
            value={macAddress}
            onChangeText={text => setMacAddress(text)
            }
            style={{
              height: 50* scale,
              backgroundColor: '#9DB3BE',
              opacity: 0.6,
              borderRadius: 5* scale,
              color: textColor,
              marginBottom: 10* scale,
            }}
          />

          <View style={{justifyContent: 'center'}}>
            <Button
              style={{
                width: 170* scale,
                marginTop: 20* scale,
                backgroundColor: colors.primary,
                marginHorizontal: 'auto',
                borderRadius: 10* scale,

                color: colors.Quaternary,
              }}
              mode="contained"
              onPress={hideModal}>
              <Text
                style={{
                  color: colors.Quaternary,
                  fontSize: 17 * scale,
                  fontWeight: 'bold',
                }}>
                Confirmer
              </Text>
            </Button>

            {/* hna push up */}
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
