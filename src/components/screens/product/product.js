import React from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Searchbar} from 'react-native-paper';

import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import {Modal} from 'react-native-paper';
const {width} = Dimensions.get('window');
const scale = width / 420;
import {Button, Switch} from 'react-native-paper';

export default function Product() {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Nos offres" />
        <ScrollView>
          <View
            style={{
              width: '100%', // adjust the width to your needs
              height: 10000, // adjust the height to your needs
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
                    fontSize: 22 * scale,
                    fontWeight: 600 * scale,
                    color: colors.secondary,
                    textAlign: 'center',
                    marginTop: 30 * scale,
                    marginBottom: 30 * scale,
                  }}>
                  Sélectionnez le produit qui vous intéresse
                </Text>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  marginHorizontal: 10,
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
                    backgroundColor: '#6A717D',
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 27 * scale,
                        fontWeight: 400,
                        color: '#D9D9D9',
                        marginBottom: 0 * scale,
                      }}>
                      Installation
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={images.produit2}
                        style={{
                          height: 150 * scale,
                          width: 150 * scale,
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,
                              color: colors.secondary,
                            }}>
                            Version :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,

                              color: colors.secondary,
                            }}>
                            1.3.0
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,

                              color: colors.secondary,
                            }}>
                            Battrie :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,

                              color: colors.secondary,
                            }}>
                            3500 mh
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 1 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,

                              color: colors.secondary,
                            }}>
                            ........
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7,

                              color: colors.secondary,
                            }}>
                            Caracteristique 2 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,

                              color: colors.secondary,
                            }}>
                            .....................;
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}></View>
                      <Button
                        style={{
                          width: 130 * scale,
                          height: 40 * scale,
                          marginRight: 15 * scale,
                          backgroundColor: colors.primary,
justifyContent:'center',
                          borderRadius: 10 * scale,
                          alignItems: 'center',

                          color: colors.Quaternary,
                        }}
                        mode="contained">
                        <Text
                          style={{
                            color: colors.Quaternary,
                            fontSize: 14 * scale,
                            fontWeight: 'bold',
justifyContent:'center',

                          }}>
                          Commender
                        </Text>
                      </Button>

                      {/* hna push up */}
                    </View>
                    <TouchableOpacity></TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  marginHorizontal: 10,
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
                    backgroundColor: '#6A717D',
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 27 * scale,
                        fontWeight: 400,
                        color: '#D9D9D9',
                        marginBottom: 0 * scale,
                      }}>
                      Capteur de flamme
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={images.produit1}
                        style={{
                          height: 150 * scale,
                          width: 150 * scale,
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,
                              color: colors.secondary,
                            }}>
                            Version :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7 * scale,

                              color: colors.secondary,
                            }}>
                            1.3.0
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Battrie :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            3500 mh
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 1 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            ........
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 2 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            .....................;
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}></View>
                      <Button
                        style={{
                          width: 130 * scale,
                          height: 40 * scale,
                          marginRight: 15,
                          backgroundColor: colors.primary,

                          borderRadius: 10 * scale,
                          alignItems: 'center',

                          color: colors.Quaternary,
                        }}
                        mode="contained">
                        <Text
                          style={{
                            color: colors.Quaternary,
                            fontSize: 14 * scale,
                            fontWeight: 'bold',
                          }}>
                          Commender
                        </Text>
                      </Button>

                      {/* hna push up */}
                    </View>
                    <TouchableOpacity></TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  marginHorizontal: 10,
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
                    backgroundColor: '#6A717D',
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 27 * scale,
                        fontWeight: 400,
                        color: '#D9D9D9',
                        marginBottom: 0 * scale,
                      }}>
                      Alarme
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={images.produit5}
                        style={{
                          height: 150 * scale,
                          width: 150 * scale,
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,
                              color: colors.secondary,
                            }}>
                            Version :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            1.3.0
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Battrie :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            3500 mh
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 1 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            ........
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 2 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            .....................;
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}></View>
                      <Button
                        style={{
                          width: 130 * scale,
                          height: 40 * scale,
                          marginRight: 15,
                          backgroundColor: colors.primary,

                          borderRadius: 10 * scale,
                          alignItems: 'center',

                          color: colors.Quaternary,
                        }}
                        mode="contained">
                        <Text
                          style={{
                            color: colors.Quaternary,
                            fontSize: 14 * scale,
                            fontWeight: 'bold',
                          }}>
                          Commender
                        </Text>
                      </Button>

                      {/* hna push up */}
                    </View>
                    <TouchableOpacity></TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  marginHorizontal: 10,
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
                    backgroundColor: '#6A717D',
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 27 * scale,
                        fontWeight: 400,
                        color: '#D9D9D9',
                        marginBottom: 0 * scale,
                      }}>
                      Controleur
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={images.produit4}
                        style={{
                          height: 150 * scale,
                          width: 150 * scale,
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,
                              color: colors.secondary,
                            }}>
                            Version :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            1.3.0
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Battrie :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            3500 mh
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 1 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            ........
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 2 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            .....................;
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}></View>
                      <Button
                        style={{
                          width: 130 * scale,
                          height: 40 * scale,
                          marginRight: 15,
                          backgroundColor: colors.primary,

                          borderRadius: 10 * scale,
                          alignItems: 'center',

                          color: colors.Quaternary,
                        }}
                        mode="contained">
                        <Text
                          style={{
                            color: colors.Quaternary,
                            fontSize: 14 * scale,
                            fontWeight: 'bold',
                          }}>
                          Commender
                        </Text>
                      </Button>

                      {/* hna push up */}
                    </View>
                    <TouchableOpacity></TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  marginHorizontal: 10,
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
                    backgroundColor: '#6A717D',
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 27 * scale,
                        fontWeight: 400,
                        color: '#D9D9D9',
                        marginBottom: 0 * scale,
                      }}>
                      Capteur de gaz
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={images.produit6}
                        style={{
                          height: 150 * scale,
                          width: 150 * scale,
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,
                              color: colors.secondary,
                            }}>
                            Version :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            1.3.0
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Battrie :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            3500 mh
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 1 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            ........
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 2 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            .....................;
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}></View>
                      <Button
                        style={{
                          width: 130 * scale,
                          height: 40 * scale,
                          marginRight: 15,
                          backgroundColor: colors.primary,

                          borderRadius: 10 * scale,
                          alignItems: 'center',

                          color: colors.Quaternary,
                        }}
                        mode="contained">
                        <Text
                          style={{
                            color: colors.Quaternary,
                            fontSize: 14 * scale,
                            fontWeight: 'bold',
                          }}>
                          Commender
                        </Text>
                      </Button>

                      {/* hna push up */}
                    </View>
                    <TouchableOpacity></TouchableOpacity>
                  </Card.Content>
                </Card>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  marginHorizontal: 10,
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
                    backgroundColor: '#6A717D',
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 27 * scale,
                        fontWeight: 400,
                        color: '#D9D9D9',
                        marginBottom: 0 * scale,
                      }}>
                      Capteur de mouvement
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={images.produit7}
                        style={{
                          height: 150 * scale,
                          width: 150 * scale,
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,
                              color: colors.secondary,
                            }}>
                            Version :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            1.3.0
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Battrie :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            3500 mh
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 1 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            ........
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 2 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            .....................;
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}></View>
                      <Button
                        style={{
                          width: 130 * scale,
                          height: 40 * scale,
                          marginRight: 15,
                          backgroundColor: colors.primary,

                          borderRadius: 10 * scale,
                          alignItems: 'center',

                          color: colors.Quaternary,
                        }}
                        mode="contained">
                        <Text
                          style={{
                            color: colors.Quaternary,
                            fontSize: 14 * scale,
                            fontWeight: 'bold',
                          }}>
                          Commender
                        </Text>
                      </Button>

                      {/* hna push up */}
                    </View>
                  </Card.Content>
                </Card>
              </View>

              <View
                style={{
                  marginLeft: 20 * scale,
                  marginHorizontal: 10,
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
                    backgroundColor: '#6A717D',
                    shadowColor: colors.white,
                    height: 270 * scale,
                  }}>
                  <Card.Content
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 27 * scale,
                        fontWeight: 400,
                        color: '#D9D9D9',
                        marginBottom: 0 * scale,
                      }}>
                      Camera de survailliance
                    </Text>

                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                      }}>
                      <Image
                        source={images.produit3}
                        style={{
                          height: 150 * scale,
                          width: 150 * scale,
                        }}
                      />

                      <View
                        style={{
                          flexDirection: 'column',
                          justifyContent: 'center',
                        }}>
                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,
                              color: colors.secondary,
                            }}>
                            Version :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            1.3.0
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Battrie :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            3500 mh
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 1 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            ........
                          </Text>
                        </View>

                        <View
                          style={{
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            Caracteristique 2 :
                          </Text>

                          <Text
                            style={{
                              fontSize: 14 * scale,
                              textAlign: 'left',
                              marginLeft: 7* scale,

                              color: colors.secondary,
                            }}>
                            .....................;
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flex: 1}}></View>
                      <Button
                        style={{
                          width: 130 * scale,
                          height: 40 * scale,
                          marginRight: 15,
                          backgroundColor: colors.primary,

                          borderRadius: 10 * scale,
                          alignItems: 'center',

                          color: colors.Quaternary,
                        }}
                        mode="contained">
                        <Text
                          style={{
                            color: colors.Quaternary,
                            fontSize: 14 * scale,
                            fontWeight: 'bold',
                          }}>
                          Commender
                        </Text>
                      </Button>

                      {/* hna push up */}
                    </View>
                  </Card.Content>
                </Card>
              </View>

              <View style={{}}></View>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
