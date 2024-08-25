import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../header';
import {colors, icons, images} from '../../constants';
import {Modal, Center, VStack, NativeBaseProvider, Avatar} from 'native-base';
import {Button, Card, Switch} from 'react-native-paper';
import ScrollCardsLumiere from './scrollCardsLumiere';
import ScrollCardsRideaux from './scrollCardsRideaux';
import Swiper from 'react-native-swiper';
import {Dimensions, StyleSheet} from 'react-native';
import Video, {VideoRef} from 'react-native-video';
import LineChartGases from './lineChartGazes';
import LineChartFlammes from './lineChartFlammes';
import LineChartMouvements from './lineChartMouvements';

const {width} = Dimensions.get('window');
const scale = width / 420; // based on iphone 5s's width

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);
  const [size, setSize] = React.useState('lg');

  const handleSizeClick = newSize => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

  const videoRefs = React.createRef();
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
              borderRadius: 150 * scale, // this will create a semi-circle
              position: 'fixed',
              top: 0,
              left: 0,
            }}>
            <NativeBaseProvider>
              <Avatar
                style={{
                  marginTop: 20 * scale,
                  height: 80 * scale,
                  width: 80 * scale,
                }}
                bg="purple.600"
                alignSelf="center"
                size="2xl"
                source={icons.avatar}></Avatar>

              <View
                style={{
                  alignItems: 'center',
                }}>
                {/* avatar */}
                <Text
                  style={{
                    fontSize: 13 * scale,

                    fontWeight: 'bold',
                    color: colors.secondary,
                  }}>
                  bienvenue{' '}
                  <Text
                    style={{
                      fontSize: 14 * scale,
                      fontWeight: 'bold',
                      color: colors.primary,
                    }}>
                    zidane
                  </Text>
                </Text>
                {/* text avatar */}
                <Text
                  style={{
                    fontSize: 10 * scale,
                    marginBottom: 20 * scale,
                    color: colors.secondary,
                  }}>
                  Bienvenue dans votre controle du maison
                </Text>

                {/* div cards 1  */}

                <View
                  style={{
                    marginLeft: 20 * scale,
                    fontSize: 18 * scale,
                    marginBottom: 20 * scale,
                    color: colors.secondary,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 150 * scale,
                  }}>
                  <Card
                    elevation={4}
                    style={{
                      flex: 1,
                      flexGrow: 1,
                      marginRight: 10 * scale,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                      height: 150 * scale,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.nuage}
                        style={{
                          height: 50 * scale,
                          width: 50 * scale,
                          tintColor: colors.primary,
                          marginBottom: 6 * scale,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18 * scale,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 * scale,
                        }}>
                        27 °c
                      </Text>
                      <Text
                        style={{
                          fontSize: 15 * scale,

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
                      marginRight: 10 * scale,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.power}
                        style={{
                          height: 50 * scale,
                          width: 50 * scale,
                          tintColor: colors.primary,
                          marginBottom: 6 * scale,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18 * scale,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 * scale,
                        }}>
                        312
                      </Text>
                      <Text
                        style={{
                          fontSize: 15 * scale,

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
                      marginRight: 10 * scale,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.devices}
                        style={{
                          height: 50 * scale,
                          width: 50 * scale,
                          tintColor: colors.primary,
                          marginBottom: 6 * scale,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18 * scale,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 * scale,
                        }}>
                        13
                      </Text>
                      <Text
                        style={{
                          fontSize: 13 * scale,

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
                    fontSize: 18 * scale,
                    marginBottom: 20 * scale,
                    marginLeft: 20 * scale,
                    color: colors.secondary,
                    flexDirection: 'row',
                    justifyContent: 'center',

                    height: 150 * scale,
                  }}>
                  <Card
                    elevation={4}
                    style={{
                      marginRight: 20 * scale,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                      width: 140 * scale,
                      height: 150 * scale,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.temperature}
                        style={{
                          height: 50 * scale,
                          width: 50 * scale,
                          tintColor: colors.primary,
                          marginBottom: 6 * scale,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18 * scale,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 * scale,
                        }}>
                        25 °c
                      </Text>
                      <Text
                        style={{
                          fontSize: 15 * scale,

                          color: colors.secondary,
                        }}>
                        Celsius
                      </Text>
                    </Card.Content>
                  </Card>

                  <Card
                    elevation={4}
                    style={{
                      marginRight: 20 * scale,
                      backgroundColor: colors.Quaternary,
                      shadowColor: colors.white,
                      width: 140 * scale,
                      height: 150 * scale,
                    }}>
                    <Card.Content
                      style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={icons.humidity}
                        style={{
                          height: 50 * scale,
                          width: 50 * scale,
                          tintColor: colors.primary,
                          marginBottom: 6 * scale,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 18 * scale,
                          fontWeight: 'bold',
                          color: colors.white,
                          marginBottom: 8 * scale,
                        }}>
                        17 °k
                      </Text>
                      <Text
                        style={{
                          fontSize: 15 * scale,

                          color: colors.secondary,
                        }}>
                        Kelvin
                      </Text>
                    </Card.Content>
                  </Card>
                </View>

                {/* swiper cards  3 */}

                <View
                  style={{
                    fontSize: 18 * scale,
                    marginBottom: 20 * scale,
                    color: colors.secondary,

                    width: 350 * scale,
                    height: 80 * scale,
                  }}>
                  <Swiper
                    dot={
                      <View
                        style={{
                          backgroundColor: colors.secondary,
                          width: 6 * scale,
                          height: 6 * scale,
                          borderRadius: 5 * scale,
                          marginLeft: 2 * scale,
                          marginRight: 2 * scale,
                        }}
                      />
                    }
                    activeDot={
                      <View
                        style={{
                          backgroundColor: colors.primary,
                          width: 15 * scale,
                          height: 6 * scale,
                          borderRadius: 4 * scale,
                          marginLeft: 3 * scale,
                          marginRight: 3 * scale,
                        }}
                      />
                    }
                    autoplay={true}
                    paginationStyle={{
                      bottom: -5 * scale,
                      left: 0 * scale,

                      padding: 0 * scale,
                    }}
                    style={{
                      height: 40 * scale,
                    }}>
                    <Card
                      elevation={4}
                      style={{
                        height: 75 * scale,
                        marginRight: 10 * scale,
                        marginLeft: 10 * scale,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30 * scale,
                        justifyContent: 'center',
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
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.fenetre1}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />

                        <Image
                          source={icons.door2}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />
                        <Image
                          source={icons.outdoor1}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />
                        <Image
                          source={icons.fenetre2}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                          }}
                        />
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        height: 75 * scale,
                        marginRight: 10 * scale,
                        marginLeft: 10 * scale,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30 * scale,
                        justifyContent: 'center',
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
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.door2}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />

                        <Image
                          source={icons.outdoor2}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />
                        <Image
                          source={icons.outdoor1}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />
                        <Image
                          source={icons.fenetre3}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                          }}
                        />
                      </Card.Content>
                    </Card>
                  </Swiper>
                </View>

                {/* swiper cards  4 */}

                <View
                  style={{
                    fontSize: 18 * scale,
                    marginBottom: 20 * scale,
                    color: colors.secondary,
                    width: 200 * scale,
                    height: 80 * scale,
                  }}>
                  <Swiper
                    dot={
                      <View
                        style={{
                          backgroundColor: colors.secondary,
                          width: 6 * scale,
                          height: 6 * scale,
                          borderRadius: 5 * scale,
                          marginLeft: 3 * scale,
                          marginRight: 3 * scale,
                        }}
                      />
                    }
                    activeDot={
                      <View
                        style={{
                          backgroundColor: colors.primary,
                          width: 15 * scale,
                          height: 6 * scale,
                          borderRadius: 5,
                          marginLeft: 3 * scale,
                          marginRight: 3 * scale,
                        }}
                      />
                    }
                    paginationStyle={{
                      bottom: -5 * scale,
                      left: 0 * scale,

                      padding: 0 * scale,
                    }}
                    style={{
                      height: 40 * scale,
                    }}>
                    <Card
                      elevation={4}
                      style={{
                        height: 75 * scale,
                        marginRight: 10 * scale,
                        marginLeft: 10 * scale,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30 * scale,
                        justifyContent: 'center',
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
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.fire1}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />

                        <Image
                          source={icons.fire2}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        height: 75 * scale,
                        marginRight: 10 * scale,
                        marginLeft: 10 * scale,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        justifyContent: 'center',

                        borderRadius: 30 * scale,
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
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                          }}
                        />

                        <Image
                          source={icons.fire1}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
                          }}
                        />

                        <Image
                          source={icons.fire2}
                          style={{
                            height: 24 * scale,
                            width: 24 * scale,
                            tintColor: colors.primary,
                            marginBottom: 6 * scale,
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
                      fontSize: 15 * scale,
                      color: colors.secondary,
                      textAlign: 'left',
                    }}>
                    Controle du Lumiere
                  </Text>
                </View>

                <ScrollCardsLumiere />

                {/* TEXT Controle du rideaux */}

                <View
                  style={{
                    width: '85%',
                  }}>
                  <Text
                    style={{
                      fontSize: 15 * scale,
                      color: colors.secondary,
                      textAlign: 'left',
                    }}>
                    Controle des Rideeaux
                  </Text>
                </View>

                <ScrollCardsRideaux />

                {/* text cards  cameras */}
                <View
                  style={{
                    width: '85%',
                    marginBottom: 10 * scale,
                  }}>
                  <Text
                    style={{
                      fontSize: 15 * scale,
                      color: colors.secondary,
                      textAlign: 'left',
                    }}>
                    Controle des Cameras
                  </Text>
                </View>

                {/* div scroll  cameras */}
                <View
                  style={{
                    fontSize: 18 * scale,
                    marginBottom: 20 * scale,
                    color: colors.secondary,
                    width: 400 * scale,
                    height: 250 * scale,
                  }}>
                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 0 * scale,
                      paddingVertical: 0 * scale,
                    }}>
                    <Card
                      elevation={4}
                      style={{
                        height: '100%',
                        width: 350 * scale,

                        marginRight: 10 * scale,
                        marginLeft: 10 * scale,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30 * scale,
                      }}>
                      <Card.Content
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View style={styles.container}>
                          <Video
                            source={require('./video3.mp4')}
                            style={styles.video}
                            ref={videoRefs}
                            onLoadStart={() =>
                              console.log('Video loading started')
                            }
                            onLoad={() => setVideoLoaded(true)}
                            isLooping={true}
                            isMuted={false}
                            shouldPlay={true}
                            onError={error =>
                              console.error('Video error:', error)
                            }
                          />
                        </View>
                      </Card.Content>
                    </Card>
                    <Card
                      elevation={4}
                      style={{
                        height: '100%',
                        width: 350 * scale,

                        marginRight: 10 * scale,
                        marginLeft: 10 * scale,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30 * scale,
                      }}>
                      <Card.Content
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View>
                          <Video
                            source={require('./video3.mp4')}
                            style={styles.video}
                            ref={videoRefs}
                            onLoadStart={() =>
                              console.log('Video loading started')
                            }
                            onLoad={() => setVideoLoaded(true)}
                            isLooping={true}
                            isMuted={false}
                            shouldPlay={true}
                            onError={error =>
                              console.error('Video error:', error)
                            }
                          />
                        </View>
                      </Card.Content>
                    </Card>

                    <Card
                      elevation={4}
                      style={{
                        height: '100%',
                        width: 350 * scale,

                        marginRight: 10 * scale,
                        marginLeft: 10 * scale,
                        backgroundColor: colors.Quaternary,
                        shadowColor: colors.white,
                        borderRadius: 30 * scale,
                      }}>
                      <Card.Content
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View style={styles.container}>
                          <Video
                            source={require('./video3.mp4')}
                            style={styles.video}
                            ref={videoRefs}
                            onLoadStart={() =>
                              console.log('Video loading started')
                            }
                            onLoad={() => setVideoLoaded(true)}
                            isLooping={true}
                            isMuted={true}
                            shouldPlay={true}
                            onError={error =>
                              console.error('Video error:', error)
                            }
                          />
                        </View>
                      </Card.Content>
                    </Card>
                  </ScrollView>
                </View>


                {/* text caracteristiques gaz */}


                <View
                  style={{
                    width: '85%',
                    marginBottom: 10 * scale,
                  }}>
                  <Text
                    style={{
                      fontSize: 15 * scale,
                      color: colors.secondary,
                      textAlign: 'left',
                    }}>
                    Controle des Capteurs
                  </Text>
                </View>

                {/* div scroll  caracteristiques gaz */}


<Text>Gazes</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 0 * scale,
                      paddingVertical: 0 * scale,
                    }}>



<View style={{
flexDirection:'row',
gap:20

}}>



                     
 
<LineChartGases/>
<LineChartGases/>
<LineChartGases/>
<LineChartGases/>
<LineChartGases/>


                      
</View>
                    </ScrollView>






                    <Text>Flammes</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      marginHorizontal: 10 * scale,
                      paddingVertical: 0 * scale,
                    }}>



<View style={{
flexDirection:'row',
gap:20

}}>



                     
 
<LineChartFlammes/>
<LineChartFlammes/>
<LineChartFlammes/>
<LineChartFlammes/>
<LineChartFlammes/>


                      
</View>
                    </ScrollView>









                    <Text>Mouvements</Text>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                      paddingHorizontal: 0 * scale,
                      paddingVertical: 0 * scale,
                    }}>



<View style={{
flexDirection:'row',
gap:20

}}>



                     
 
<LineChartMouvements/>
<LineChartMouvements/>
<LineChartMouvements/>
<LineChartMouvements/>
<LineChartMouvements/>


                      
</View>
                    </ScrollView>






              </View>
            </NativeBaseProvider>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 320 * scale,
    height: '100%',
  },
  backgroundColor: {
    // add your styles here
  },
});
