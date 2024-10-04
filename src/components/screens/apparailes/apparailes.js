import React, { useState } from 'react';
import Header from '../../header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';
const {width} = Dimensions.get('window');
const scale = width / 420;
import { Fab } from 'native-base';
import {Modal, Portal} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import Menu from "./menu";






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
  



  const [visible2, setVisible2] = React.useState(false);
  const showModal2 = () => setVisible2(true);
  const hideModal2 = () => setVisible2(false);

  const [items, setItems] = useState(Menu);
  const filterItem =(categoryItem) =>{
    const updatedItems = Menu.filter((curElem) => {
return curElem.category === categoryItem;

    });
setItems(updatedItems);    
  }

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.Quaternary}}>
      <View style={{flex: 1, backgroundColor: colors.Quaternary}}>
        <Header title="Apparailes" />
        
  
        <ScrollView>


          <View
            style={{
              width: '100%', // adjust the width to your needs
              // adjust the height to your needs
              backgroundColor: colors.tertiary,
              borderRadius: 70 * scale,
              
              position: 'fixed',
              top: 0 * scale,
              left: 0 * scale,
            }}>
            <NativeBaseProvider>
             


           
              <View
                style={{
                  backgroundColor: colors.secondary,
                  height: 50 * scale,
                  marginHorizontal: 50 * scale,
                  borderRadius: 20 * scale,
                  marginTop: 40 * scale,
                  marginBottom: 0 * scale,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 15 * scale,
                  fontWeight: 'bold',
                }}>


                {/* hna chof kifeh ra7 dir le filtre dyalkk
      zid focus to text 
    
  */}
                <TouchableOpacity  onPress={() => setItems(Menu)}>
                  <Text
                  
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Tout
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => filterItem("mobile")}>
                  <Text
                 
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Mobile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem("tablette")}>
                  <Text
                 
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    Tablette
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => filterItem("produit")}>
                  <Text
                  
                    style={{
                      fontWeight: 'bold',
                      color: colors.white,
                    }}>
                    produits
                  </Text>
                </TouchableOpacity>

               
              </View>








              <View
                style={{
                  marginTop: 10* scale,
                }}></View>




{items.map((elem) => {
          const { id, acces, title, category,adresseIP,adresseMAC } = elem;
          return (
              <Card
              key={id}
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
                    peripherique {id}
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
                        {category}
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
                          fontSize: 15 * scale,
                         
                        }}>
                        {acces}
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
                          fontSize: 15 * scale,
                         
                        }}>
                        {adresseIP}
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
                          fontSize: 15 * scale,
                          
                        }}>
                        {adresseMAC}
                      </Text>
                    </View>
                  </View>

                  <View style={{justifyContent: 'center'}}>
                    <Button
                     key={id}
                      style={{
                        width: 170* scale,
                        backgroundColor: colors.primary,
                        marginHorizontal: 'auto',
                        borderRadius: 10* scale,

                        color: colors.Quaternary,
                      }}
                      mode="contained"
                      onPress={showModal2}>
                      <Text
                      
                        style={{
                          color: colors.Quaternary,
                          fontSize: 15 * scale,
                         
                        }}>
                        Modifier
                      </Text>
                    </Button>

                  
                  </View>
                </Card.Content>
              </Card>

);
})}

         
            
            </NativeBaseProvider>
          </View>  
        </ScrollView>

        <NativeBaseProvider>
            <Fab renderInPortal={false} shadow={2} onPress={showModal}  icon={<Image  source={icons.plus} name="plus"style={{width:30,height:30,tintColor:colors.Quaternary}} />} style={{marginBottom:80,width:70,height:70,backgroundColor:colors.primary}}/>
        </NativeBaseProvider>


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


        {items.map((elem) => {
          const { id, acces, title, category,adresseIP,adresseMAC } = elem;
          return (
        <Modal
        key={id}
          visible={visible2}
          onDismiss={hideModal2}
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
           
            }} onPress={hideModal2}>
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
            Modifier caracteristiques
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
                  {category}
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
                  {acces}
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
                  {adresseIP}
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
                  {adresseMAC}
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
        );
      })}
      </View>
     
    </SafeAreaView>  
      
  );
}
