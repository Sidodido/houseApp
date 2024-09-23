import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {colors, icons, images} from '../../constants';
import {Dimensions, StyleSheet} from 'react-native';
import {Button, Card, Switch} from 'react-native-paper';
import { AlertDialog } from "native-base";
import { Modal, Portal} from 'react-native-paper';
import { TextInput } from 'react-native-paper';


const {width} = Dimensions.get('window');
const scale = width / 420;




const cardPeripherique = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [text, setText] = React.useState("");
    const onClose = () => setIsOpen(false);
  
    const cancelRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = {backgroundColor: 'white', padding: 0};
  return (
    <View>
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
                        marginTop:30
                      }}>
                      <Card.Content
                        style={{
                          
                          justifyContent: 'space-between',
                          marginLeft:20
                        }}>
                       

                       <Text
                  style={{
                    color: colors.primary,
                    fontSize: 23* scale,
                    textAlign:'center',
                    marginBottom:20,
                    fontWeight:"bold"

                  }}>
                  peripherique N#
                </Text>


<View    style={{
                  
                  marginBottom:20* scale
                }}>

            

              <View
                style={{
                  flexDirection: 'row',
               
                }}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 17* scale,

                    marginRight: 5* scale,
                  }}>
                  Type :
                </Text>

                <Text
                  style={{
                    color: colors.secondary,
                    fontSize: 17* scale,
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
                    fontSize: 17* scale,

                    marginRight: 5* scale,
                  }}>
                Acces :
                </Text>

                <Text
                  style={{
                    color: colors.secondary,
                    fontSize: 17* scale,
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
                    fontSize: 17* scale,

                    marginRight: 5* scale,
                  }}>
                  Adresse IP :
                </Text>

                <Text
                  style={{
                    color: colors.secondary,
                    fontSize: 17* scale,
                    fontWeight: 'bold',
                  }}>
                 192.168.123.132
                </Text>
              </View>
 <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: colors.white,
                    fontSize: 17* scale,

                    marginRight: 5* scale,
                  }}>
                  Adresse MAC :
                </Text>

                <Text
                  style={{
                    color: colors.secondary,
                    fontSize: 17* scale,
                    fontWeight: 'bold',
                  }}>
                  00:1B:44:11:3A:B7
                </Text>
              </View>

</View>



       

             

<View  style={{justifyContent:'center'}}>


              <Button style={{width:170* scale,
              backgroundColor:colors.primary,
              marginHorizontal:'auto',
              borderRadius:10,
              
              color:colors.Quaternary

              
              
              }}  mode="contained" onPress={showModal}>
              <Text style={{color: colors.Quaternary, fontSize: 17* scale,fontWeight:'bold'}} >Modifier</Text>
   
  </Button>

  {/* hna push up */}


</View>





        {/* <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Delete Customer</AlertDialog.Header>
          <AlertDialog.Body>
            This will remove all data relating to Alex. This action cannot be
            reversed. Deleted data can not be recovered.
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog> */}



                      </Card.Content>
             </Card>
      <Modal  visible={visible} onDismiss={hideModal} contentContainerStyle={{
          padding: 40* scale,
          margin:40* scale,
          backgroundColor:colors.white,
          borderRadius:20* scale
  
        }}>
                <TextInput
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
      />
          </Modal>
    </View>
       
  )
}

export default cardPeripherique