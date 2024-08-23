import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors, icons, images} from '../../constants';
import {Button, Card, Switch} from 'react-native-paper';

import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420; // based on iphone 5s's width

const scrollCardsLumiere = () => {
  const [switchStates, setSwitchStates] = React.useState(Array(5).fill(false));

  const onToggleSwitch = index => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[index] = !newSwitchStates[index];
    setSwitchStates(newSwitchStates);
  };

  return (
    <View>
     

      {/* scroll cards  lumiere */}
      <View
        style={{
          marginLeft: 20 * scale,
          fontSize: 18 * scale,
          marginBottom: 20 * scale,
          color: colors.secondary,
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '95%',
          height: 150 * scale,
        }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20 * scale,
            paddingVertical: 10 * scale,
          }}>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(0)}>
            <Card
              elevation={4}
              style={{
                flex: 1,
                flexGrow: 1,
                marginRight: 20 * scale,
                width: 130 * scale,
                height: 130 * scale,
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
                    height: 30 * scale,
                    width: 30 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  Tout.L
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[0]}
                    onValueChange={() => onToggleSwitch(0)}
                    style={styles.switch}
                    thumbColor={switchStates[0] ? colors.primary : colors.white} // blue when on, gray when off
                    trackColor={{
                      true: colors.secondary,
                      false: colors.secondary,
                    }} // green when on, gray when off
                  />

                  {/* WE STOPPED HERE */}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(1)}>
            <Card
              elevation={4}
              style={{
                flex: 1,
                flexGrow: 1,
                marginRight: 20 * scale,
                width: 130 * scale,
                height: 130 * scale,
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
                    height: 30 * scale,
                    width: 30 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  L.chambre1
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[1]}
                    onValueChange={() => onToggleSwitch(1)}
                    style={styles.switch}
                    thumbColor={switchStates[1] ? colors.primary : colors.white} // blue when on, gray when off
                    trackColor={{
                      true: colors.secondary,
                      false: colors.secondary,
                    }} // green when on, gray when off
                  />

                  {/* WE STOPPED HERE */}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(2)}>
            <Card
              elevation={4}
              style={{
                flex: 1,
                flexGrow: 1,
                marginRight: 20 * scale,
                width: 130 * scale,
                height: 130 * scale,
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
                    height: 30 * scale,
                    width: 30 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  L.chambre2
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[2]}
                    onValueChange={() => onToggleSwitch(2)}
                    style={styles.switch}
                    thumbColor={switchStates[2] ? colors.primary : colors.white} // blue when on, gray when off
                    trackColor={{
                      true: colors.secondary,
                      false: colors.secondary,
                    }} // green when on, gray when off
                  />

                  {/* WE STOPPED HERE */}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(3)}>
            <Card
              elevation={4}
              style={{
                flex: 1,
                flexGrow: 1,
                marginRight: 20 * scale,
                width: 130 * scale,
                height: 130 * scale,
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
                    height: 30 * scale,
                    width: 30 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  Cuisine
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[3]}
                    onValueChange={() => onToggleSwitch(3)}
                    style={styles.switch}
                    thumbColor={switchStates[3] ? colors.primary : colors.white} // blue when on, gray when off
                    trackColor={{
                      true: colors.secondary,
                      false: colors.secondary,
                    }} // green when on, gray when off
                  />
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(4)}>
            <Card
              elevation={4}
              style={{
                flex: 1,
                flexGrow: 1,
                marginRight: 20 * scale,
                width: 130 * scale,
                height: 130 * scale,
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
                    height: 30 * scale,
                    width: 30 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  home
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[4]}
                    onValueChange={() => onToggleSwitch(4)}
                    style={styles.switch}
                    thumbColor={switchStates[4] ? colors.primary : colors.white} // blue when on, gray when off
                    trackColor={{
                      true: colors.secondary,
                      false: colors.secondary,
                    }} // green when on, gray when off
                  />

                  {/* WE STOPPED HERE */}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(5)}>
            <Card
              elevation={4}
              style={{
                flex: 1,
                flexGrow: 1,
                marginRight: 20 * scale,
                width: 130 * scale,
                height: 130 * scale,
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
                    height: 30 * scale,
                    width: 30 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  Salon
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[5]}
                    onValueChange={() => onToggleSwitch(5)}
                    style={styles.switch}
                    thumbColor={switchStates[5] ? colors.primary : colors.white} // blue when on, gray when off
                    trackColor={{
                      true: colors.secondary,
                      false: colors.secondary,
                    }} // green when on, gray when off
                  />

                  {/* WE STOPPED HERE */}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(6)}>
            <Card
              elevation={4}
              style={{
                flex: 1,
                flexGrow: 1,
                marginRight: 20 * scale,
                width: 130 * scale,
                height: 130 * scale,
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
                    height: 30 * scale,
                    width: 30 * scale,
                    tintColor: colors.primary,
                    marginBottom: 6 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  fenetre1
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[7]}
                    onValueChange={() => onToggleSwitch(7)}
                    style={styles.switch}
                    thumbColor={switchStates[7] ? colors.primary : colors.white} // blue when on, gray when off
                    trackColor={{
                      true: colors.secondary,
                      false: colors.secondary,
                    }} // green when on, gray when off
                  />

                  {/* WE STOPPED HERE */}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        </ScrollView>
      </View>

    

    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default scrollCardsLumiere;
