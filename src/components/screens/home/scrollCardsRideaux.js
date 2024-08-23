import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors, icons, images} from '../../constants';
import {Button, Card, Switch} from 'react-native-paper';

import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const scale = width / 420; // based on iphone 5s's width

const scrollCardsRideaux = () => {
    const [switchStates, setSwitchStates] = React.useState(Array(5).fill(false));

    const onToggleSwitch = index => {
      const newSwitchStates = [...switchStates];
      newSwitchStates[index] = !newSwitchStates[index];
      setSwitchStates(newSwitchStates);
    };

  return (
    <View>
       {/* scroll cards  rideaux */}
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
            onPress={() => onToggleSwitch(7)}>
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
                    marginBottom: 9 * scale,
                  }}
                />

                <Text
                  style={{
                    fontSize: 12 * scale,
                    fontWeight: 'bold',
                    color: colors.secondary,
                    marginBottom: 8 * scale,
                  }}>
                  Tous.R
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

          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(8)}>
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
                  R.fenetre 1
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[8]}
                    onValueChange={() => onToggleSwitch(8)}
                    style={styles.switch}
                    thumbColor={switchStates[8] ? colors.primary : colors.white} // blue when on, gray when off
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
            onPress={() => onToggleSwitch(9)}>
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
                  source={icons.fenetre2}
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
                  R.fenetre 2
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[9]}
                    onValueChange={() => onToggleSwitch(9)}
                    style={styles.switch}
                    thumbColor={switchStates[9] ? colors.primary : colors.white} // blue when on, gray when off
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
            onPress={() => onToggleSwitch(10)}>
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
                  source={icons.fenetre3}
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
                  R.fenetre 3
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <View
                    style={{
                      backgroundColor: colors.Quaternary,
                    }}>
                    <Switch
                      value={switchStates[10]}
                      onValueChange={() => onToggleSwitch(10)}
                      style={styles.switch}
                      thumbColor={
                        switchStates[10] ? colors.primary : colors.white
                      } // blue when on, gray when off
                      trackColor={{
                        true: colors.secondary,
                        false: colors.secondary,
                      }} // green when on, gray when off
                    />
                  </View>

                  {/* WE STOPPED HERE */}
                </View>
              </Card.Content>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={{justifyContent: 'center', alignItems: 'center'}}
            onPress={() => onToggleSwitch(11)}>
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
                  R.fenetre 4
                </Text>

                <View
                  style={{
                    backgroundColor: colors.Quaternary,
                  }}>
                  <Switch
                    value={switchStates[11]}
                    onValueChange={() => onToggleSwitch(11)}
                    style={styles.switch}
                    thumbColor={switchStates[11] ? colors.primary : colors.white} // blue when on, gray when off
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
  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default scrollCardsRideaux