import {View, Text, Image, ScrollView} from 'react-native';
import React, {useRef} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../header';
import {colors, icons, images} from '../../constants';
import {Avatar, VStack, Center, NativeBaseProvider} from 'native-base';
import {Button, Card} from 'react-native-paper';
import ButtonAnimated from '../../buttonAnimated';
import Swiper from 'react-native-swiper';

export default function Home() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Home" />
        <ScrollView>
          <View
            style={{
              width: '100%', // adjust the width to your needs
              height: 10000, // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 150, // this will create a semi-circle
              position: 'fixed',
              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
              <Avatar
                mt="5"
                bg="purple.600"
                alignSelf="center"
                size="2xl"
                source={icons.avatar}></Avatar>

              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                {/* avatar */}
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: colors.secondary,
                  }}>
                  bienvenue{' '}
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color: colors.primary,
                    }}>
                    zidane
                  </Text>
                </Text>
                {/* text avatar */}
                <Text
                  style={{
                    fontSize: 18,
                    marginBottom: 20,
                    color: colors.secondary,
                  }}>
                  Bienvenue dans votre controle du maison
                </Text>

                {/* div cards 1  */}

                <View
                  style={{
                    marginLeft: 20,
                    fontSize: 18,
                    marginBottom: 20,
                    color: colors.secondary,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '80%',
                    height: 150,
                  }}>
                  <Card
                    elevation={4}
                    style={{
                      flex: 1,
                      flexGrow: 1,
                      marginRight: 20,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.nuage}
                        style={{
                          height: 50,
                          width: 50,
                          tintColor: colors.primary,
                          marginBottom: 6,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8,
                        }}>
                        27 °c
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,

                          color: colors.secondary,
                        }}>
                        Algerie
                      </Text>
                    </Card.Content>
                  </Card>

                  <Card
                    elevation={4}
                    style={{
                      flex: 1,
                      flexGrow: 1,
                      marginRight: 20,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.power}
                        style={{
                          height: 50,
                          width: 50,
                          tintColor: colors.primary,
                          marginBottom: 6,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8,
                        }}>
                        312
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,

                          color: colors.secondary,
                        }}>
                        kwh
                      </Text>
                    </Card.Content>
                  </Card>

                  <Card
                    elevation={4}
                    style={{
                      flex: 1,
                      flexGrow: 1,
                      marginRight: 20,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.devices}
                        style={{
                          height: 50,
                          width: 50,
                          tintColor: colors.primary,
                          marginBottom: 6,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8,
                        }}>
                        13
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,

                          color: colors.secondary,
                        }}>
                        Apparails
                      </Text>
                    </Card.Content>
                  </Card>
                </View>

                {/* div cards  2 */}

                <View
                  style={{
                    fontSize: 18,
                    marginBottom: 20,
                    marginLeft: 20,
                    color: colors.secondary,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    width: '80%',
                    height: 150,
                  }}>
                  <Card
                    elevation={4}
                    style={{
                      marginRight: 20,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                      width: '30%',
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.temperature}
                        style={{
                          height: 50,
                          width: 50,
                          tintColor: colors.primary,
                          marginBottom: 6,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8,
                        }}>
                        25 °c
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,

                          color: colors.secondary,
                        }}>
                        Celsius
                      </Text>
                    </Card.Content>
                  </Card>

                  <Card
                    elevation={4}
                    style={{
                      marginRight: 20,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                      width: '30%',
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.humidity}
                        style={{
                          height: 50,
                          width: 50,
                          tintColor: colors.primary,
                          marginBottom: 6,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8,
                        }}>
                        17 °k
                      </Text>
                      <Text
                        style={{
                          fontSize: 15,

                          color: colors.secondary,
                        }}>
                        Kelvin
                      </Text>
                    </Card.Content>
                  </Card>
                </View>

                {/* div cards  3 */}

                <View
                  style={{
                    fontSize: 18,
                    marginBottom: 20,
                    color: colors.secondary,

                    width: '70%',
                    height: 80,
                  }}>
                  <Swiper
                    dot={
                      <View
                        style={{
                          backgroundColor: colors.secondary,
                          width: 8,
                          height: 8,
                          borderRadius: 5,
                          marginLeft: 3,
                          marginRight: 3,
                        }}
                      />
                    }
                    activeDot={
                      <View
                        style={{
                          backgroundColor: colors.primary,
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          marginLeft: 3,
                          marginRight: 3,
                        }}
                      />
                    }
                    autoplay={true}
                    paginationStyle={{
                      bottom: -5,
                      left: 0,

                      padding: 0,
                    }}
                    style={{
                      height: 40,
                    }}>
                    <Card
                      elevation={4}
                      style={{
                        height: 60,
                        marginRight: 10,
                        marginLeft: 10,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30,
                      }}>
                      <Card.Content
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Image
                          resizeMode="contain"
                          source={icons.door1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.fenetre1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Image
                          source={icons.door2}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />
                        <Image
                          source={icons.outdoor1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />
                        <Image
                          source={icons.fenetre2}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                          }}
                        />
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        height: 60,
                        marginRight: 10,
                        marginLeft: 10,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30,
                      }}>
                      <Card.Content
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Image
                          resizeMode="contain"
                          source={icons.door1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.door2}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Image
                          source={icons.outdoor2}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />
                        <Image
                          source={icons.outdoor1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />
                        <Image
                          source={icons.fenetre3}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                          }}
                        />
                      </Card.Content>
                    </Card>
                  </Swiper>
                </View>

                {/* div cards  4 */}

                <View
                  style={{
                    fontSize: 18,
                    marginBottom: 20,
                    color: colors.secondary,
                    width: '40%',
                    height: 80,
                  }}>
                  <Swiper
                    dot={
                      <View
                        style={{
                          backgroundColor: colors.secondary,
                          width: 8,
                          height: 8,
                          borderRadius: 5,
                          marginLeft: 3,
                          marginRight: 3,
                        }}
                      />
                    }
                    activeDot={
                      <View
                        style={{
                          backgroundColor: colors.primary,
                          width: 8,
                          height: 8,
                          borderRadius: 4,
                          marginLeft: 3,
                          marginRight: 3,
                        }}
                      />
                    }
                    paginationStyle={{
                      bottom: -5,
                      left: 0,

                      padding: 0,
                    }}
                    style={{
                      height: 40,
                    }}>
                    <Card
                      elevation={4}
                      style={{
                        height: 60,
                        marginRight: 10,
                        marginLeft: 10,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30,
                      }}>
                      <Card.Content
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.mouvement1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.fire1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Image
                          source={icons.fire2}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        height: 60,
                        marginRight: 10,
                        marginLeft: 10,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30,
                      }}>
                      <Card.Content
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.mouvement1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.fire1}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Image
                          source={icons.fire2}
                          style={{
                            height: 24,
                            width: 24,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />
                      </Card.Content>
                    </Card>
                  </Swiper>
                </View>

                {/* TEXT Controle du lumiere */}

                <View
                  style={{
                    width: '85%',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: colors.secondary,
                      textAlign: 'left',
                    }}>
                    Controle du lumiere
                  </Text>
                </View>

                {/* div cards  lumiere */}
                <View
                  style={{
                    marginLeft: 20,
                    fontSize: 18,
                    marginBottom: 20,
                    color: colors.secondary,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    height: 150,
                  }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                    }}>
                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.home}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          Tout la maison
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.chambre1}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          L.chambre1
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.chambre2}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          L.chambre2
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.cuisine1}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          Cuisine
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.outdoor1}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          home
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.salon1}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          Salon
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.fenetre1}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          fenetre1
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>
                  </ScrollView>
                </View>

                {/* TEXT Controle du rideaux */}

                <View
                  style={{
                    width: '85%',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      color: colors.secondary,
                      textAlign: 'left',
                    }}>
                    Controle du rideeaux
                  </Text>
                </View>

                {/* div cards  rideaux */}
                <View
                  style={{
                    marginLeft: 20,
                    fontSize: 18,
                    marginBottom: 20,
                    color: colors.secondary,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '95%',
                    height: 150,
                  }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                    }}>
                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.home}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 9,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 12,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          Tous les rideaux
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.fenetre1}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          R.fenetre 1
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.fenetre2}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          R.fenetre 2
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.fenetre3}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          R.fenetre 3
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        flex: 1,
                        flexGrow: 1,
                        marginRight: 20,
                        width: 130,
                        height: 130,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                      }}>
                      <Card.Content
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        <Image
                          source={icons.fenetre1}
                          style={{
                            height: 30,
                            width: 30,
                            tintColor: colors.primary,
                            marginBottom: 6,
                          }}
                        />

                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 'bold',
                            color: colors.secondary,
                            marginBottom: 8,
                          }}>
                          R.fenetre 4
                        </Text>

                        <View
                          style={{
                            backgroundColor: colors.Quaternary,
                            width: 10,
                          }}>
                          <ButtonAnimated />

                          {/* WE STOPPED HERE */}
                        </View>
                      </Card.Content>
                    </Card>
                  </ScrollView>
                </View>

                {/* div SWIPER  rideaux */}








              </View>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
