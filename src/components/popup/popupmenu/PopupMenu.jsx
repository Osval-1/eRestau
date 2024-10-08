// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import {
//     Menu,
//     MenuProvider,
//     MenuOptions,
//     MenuOption,
//     MenuTrigger,
//    } from "react-native-popup-menu";
// import { Entypo } from "@expo/vector-icons";
// import themeColor from '../../../../themeColor';


// export default function menu() {
//   return (
//     <MenuProvider style={styles.container}>
//     <Menu>
//       <MenuTrigger
//         customStyles={{
//           triggerWrapper: {
//             top: 5,
//             left: 100,
//           },
//         }}
//       >
//         <Entypo name="dots-three-vertical" size={24} color="black" />
//       </MenuTrigger>
//       <MenuOptions>
//         <MenuOption onSelect={() => alert(`Save`)} customStyles={{
//      optionWrapper: {
//        flexDirection: "column",
//        alignItems: "center",
//        justifyContent: "center",
//       padding:10,
//       borderRadius:5,
//       backgroundColor:themeColor.grey_0,
     
//      },
//    }}>
//      <Text style={{fontFamily:"Montserrat-SemiBold"}}>Edit</Text>
//         </MenuOption>
//         <MenuOption onSelect={() => alert(`Save`)} customStyles={{
//      optionWrapper: {
//        flexDirection: "row",
//        alignItems: "center",
//        justifyContent: "center",
//        padding:10,
//        borderRadius:5,
//        backgroundColor:themeColor.grey_0,
//      },
//    }}>
//         <View>
//             <Text style={{fontFamily:"Montserrat-SemiBold"}}>Delete</Text>
//           </View>
//         </MenuOption>
//       </MenuOptions>
//     </Menu>
//    </MenuProvider>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         justifyContent: "center",
//         alignItems: "center",
//       }
// })


import React, { Component } from 'react';
import { Text, Modal } from 'react-native';
import Menu, {
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

class ModalExample extends Component {

  constructor(props, ctx) {
    super(props, ctx);
    this.state = { visible: false };
  }

  render() {
    return (
      <MenuProvider style={{flexDirection: 'column', padding: 30}}>
        <Text>Main window:</Text>
        <Menu>
          <MenuTrigger text='Select option' />
          <MenuOptions>
            <MenuOption onSelect={() => this.setState({ visible: true })} text='Open modal' />
          </MenuOptions>
        </Menu>
        <Modal visible={this.state.visible} onRequestClose={() => this.setState({ visible: false })}>
          <MenuProvider skipInstanceCheck style={{flexDirection: 'column', padding: 30, backgroundColor: 'white'}}>
            <Text>Modal window:</Text>
            <Menu onSelect={value => alert(`Selected number: ${value}`)}>
              <MenuTrigger text='Select option' />
              <MenuOptions>
                <MenuOption value={1} text='One' />
                <MenuOption value={2} text='Two' />
                <MenuOption onSelect={() => this.setState({ visible: false })} text='Close modal' />
              </MenuOptions>
            </Menu>
          </MenuProvider>
        </Modal>
      </MenuProvider>
    );
  }

}

export default ModalExample;