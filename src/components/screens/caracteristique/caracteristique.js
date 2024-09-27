import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions} from 'react-native';
import {Card} from 'react-native-paper';
import {Modal} from 'react-native-paper';

const {width} = Dimensions.get('window');
const scale = width / 420;

const Caracteristique = () => {

  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);


  const [visible2, setVisible2] = React.useState(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  const [visible3, setVisible3] = React.useState(false);
  const showModal3 = () => setVisible3(true);
  const hideModal3 = () => setVisible3(false);

  const [visible4, setVisible4] = React.useState(false);
  const showModal4 = () => setVisible4(true);
  const hideModal4 = () => setVisible4(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Caracteristique" />
        <ScrollView>
          <View
            style={{
              width: '100%', // adjust the width to your needs
              height: 1300, // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale, // this will create a semi-circle
              position: 'fixed',
              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
              <View>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: colors.secondary,
                    textAlign: 'center',
                    marginTop: 30,
                    marginBottom: 30,
                  }}>
                 Nos meilleures fonctionnalités
                </Text>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  fontSize: 18 * scale,
                  marginBottom: 20 * scale,
                  color: colors.secondary,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 270 * scale,
                }}>
                <Card
                  elevation={4}
                  style={{
                    flex: 1,
                    flexGrow: 1,
                    marginRight: 10 * scale,
                    backgroundColor: colors.Quaternary,
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                   
                    <Image
                      source={icons.build}
                      style={{
                        height: 130 * scale,
                        width: 130 * scale,
                        tintColor: colors.primary,
                        marginBottom: 6 * scale,
                        marginTop: 15 * scale,
                      }}
                    />
 <Text
                      style={{
                        fontSize: 24 * scale,
                        fontWeight: 500,
                        color: colors.white,
                        marginBottom: 15 * scale,
                   
                      }}>
                      Installation
                    </Text>
                    <TouchableOpacity onPress={showModal}>
                      <View
                        style={{
                          width: '90%',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 18 * scale,
                            textAlign: 'right',
                            flex: 1,
                            color: colors.secondary,
                          }}>
                          Plus
                        </Text>

                        <Image
                          source={icons.left}
                          style={{
                            height: 15 * scale,
                            width: 10 * scale,
                            tintColor: colors.primary,
                            marginLeft: 15,
                            marginRight: 20,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>




              <View
                style={{
                  marginLeft: 20 * scale,
                  fontSize: 18 * scale,
                  marginBottom: 20 * scale,
                  color: colors.secondary,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 270 * scale,
                }}>
                <Card
                  elevation={4}
                  style={{
                    flex: 1,
                    flexGrow: 1,
                    marginRight: 10 * scale,
                    backgroundColor: colors.Quaternary,
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                   
                    <Image
                      source={icons.carTemp}
                      style={{
                        height: 130 * scale,
                        width: 130 * scale,
                        tintColor: colors.primary,
                        marginBottom: 6 * scale,
                        marginTop: 15 * scale,
                      }}
                    />
 <Text
                      style={{
                        fontSize: 22 * scale,
                        fontWeight: 400,
                        color: colors.white,
                        marginBottom: 15 * scale,
                       
                      }}>
                      Service apre vente
                    </Text>
                    <TouchableOpacity onPress={showModal2}>
                      <View
                        style={{
                          width: '90%',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 18 * scale,
                            textAlign: 'right',
                            flex: 1,
                            color: colors.secondary,
                          }}>
                          Plus
                        </Text>

                        <Image
                          source={icons.left}
                          style={{
                            height: 15 * scale,
                            width: 10 * scale,
                            tintColor: colors.primary,
                            marginLeft: 15,
                            marginRight: 20,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>



              <View
                style={{
                  marginLeft: 20 * scale,
                  fontSize: 18 * scale,
                  marginBottom: 20 * scale,
                  color: colors.secondary,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 270 * scale,
                }}>
                <Card
                  elevation={4}
                  style={{
                    flex: 1,
                    flexGrow: 1,
                    marginRight: 10 * scale,
                    backgroundColor: colors.Quaternary,
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                   
                    <Image
                      source={icons.miseAjoure}
                      style={{
                        height: 130 * scale,
                        width: 130 * scale,
                        tintColor: colors.primary,
                        marginBottom: 6 * scale,
                        marginTop: 15 * scale,
                      }}
                    />
 <Text
                      style={{
                        fontSize: 22 * scale,
                        fontWeight: 400,
                        color: colors.white,
                        marginBottom: 15 * scale,
                       
                      }}>
                      Mises a jours
                    </Text>
                    <TouchableOpacity onPress={showModal3}>
                      <View
                        style={{
                          width: '90%',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 18 * scale,
                            textAlign: 'right',
                            flex: 1,
                            color: colors.secondary,
                          }}>
                          Plus
                        </Text>

                        <Image
                          source={icons.left}
                          style={{
                            height: 15 * scale,
                            width: 10 * scale,
                            tintColor: colors.primary,
                            marginLeft: 15,
                            marginRight: 20,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>



              <View
                style={{
                  marginLeft: 20 * scale,
                  fontSize: 18 * scale,
                  marginBottom: 20 * scale,
                  color: colors.secondary,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 270 * scale,
                }}>
                <Card
                  elevation={4}
                  style={{
                    flex: 1,
                    flexGrow: 1,
                    marginRight: 10 * scale,
                    backgroundColor: colors.Quaternary,
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                   
                    <Image
                      source={icons.certificate}
                      style={{
                        height: 130 * scale,
                        width: 130 * scale,
                        tintColor: colors.primary,
                        marginBottom: 6 * scale,
                        marginTop: 15 * scale,
                      }}
                    />
 <Text
                      style={{
                        fontSize: 22 * scale,
                        fontWeight: 400,
                        color: colors.white,
                        marginBottom: 15 * scale,
                       
                      }}>
                     Agree
                    </Text>
                    <TouchableOpacity onPress={showModal4}>
                      <View
                        style={{
                          width: '90%',
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 18 * scale,
                            textAlign: 'right',
                            flex: 1,
                            color: colors.secondary,
                          }}>
                          Plus
                        </Text>

                        <Image
                          source={icons.left}
                          style={{
                            height: 15 * scale,
                            width: 10 * scale,
                            tintColor: colors.primary,
                            marginLeft: 15,
                            marginRight: 20,
                          }}
                        />
                      </View>
                    </TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>


            </NativeBaseProvider>
          </View>
        </ScrollView>


        
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={{
            padding: 40 * scale,
            margin: 40 * scale,
            backgroundColor: colors.white,
            borderRadius: 20 * scale,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20 * scale,
                color: colors.Quaternary,

                flex: 1,
              }}>
             Installation
            </Text>

            <TouchableOpacity style={{}} onPress={hideModal}>
              <View></View>
              <Image
                source={icons.exit}
                style={{
                  height: 25 * scale,
                  width: 25 * scale,
                  tintColor: colors.Quaternary,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'justify',

              fontSize: 16 * scale,
              color: colors.tertiary,
            }}>
       Nous assurons une installation professionnelle de vos produits pour garantir leur fonctionnement optimal et votre sécurité.
          </Text>
        </Modal>

        <Modal
          visible={visible2}
          onDismiss={hideModal2}
          contentContainerStyle={{
            padding: 40 * scale,
            margin: 40 * scale,
            backgroundColor: colors.white,
            borderRadius: 20 * scale,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20 * scale,
                color: colors.Quaternary,

                flex: 1,
              }}>
              Service apre vente
            </Text>

            <TouchableOpacity style={{}} onPress={hideModal2}>
              <View></View>
              <Image
                source={icons.exit}
                style={{
                  height: 25 * scale,
                  width: 25 * scale,
                  tintColor: colors.Quaternary,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'justify',

              fontSize: 16 * scale,
              color: colors.tertiary,
            }}>
           Nous offrons un service après-vente réactif et des réparations professionnelles pour garantir la longévité et la fiabilité de vos produits.
          </Text>
        </Modal>


        <Modal
          visible={visible3}
          onDismiss={hideModal3}
          contentContainerStyle={{
            padding: 40 * scale,
            margin: 40 * scale,
            backgroundColor: colors.white,
            borderRadius: 20 * scale,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20 * scale,
                color: colors.Quaternary,

                flex: 1,
              }}>
              Mises a jours
            </Text>

            <TouchableOpacity style={{}} onPress={hideModal3}>
              <View></View>
              <Image
                source={icons.exit}
                style={{
                  height: 25 * scale,
                  width: 25 * scale,
                  tintColor: colors.Quaternary,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'justify',

              fontSize: 16 * scale,
              color: colors.tertiary,
            }}>
          Nous proposons un développement de produits sur mesure, adapté à vos besoins spécifiques.
          </Text>
        </Modal>


        <Modal
          visible={visible4}
          onDismiss={hideModal4}
          contentContainerStyle={{
            padding: 40 * scale,
            margin: 40 * scale,
            backgroundColor: colors.white,
            borderRadius: 20 * scale,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20 * scale,
                color: colors.Quaternary,

                flex: 1,
              }}>
              Agree
            </Text>

            <TouchableOpacity style={{}} onPress={hideModal4}>
              <View></View>
              <Image
                source={icons.exit}
                style={{
                  height: 25 * scale,
                  width: 25 * scale,
                  tintColor: colors.Quaternary,
                }}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'justify',

              fontSize: 16 * scale,
              color: colors.tertiary,
            }}>
          Tous les produits sont certifiés et offrent les meilleures performances et la plus haute qualité.
          </Text>
        </Modal>


      </View>
    </SafeAreaView>
  );
};

export default Caracteristique;
