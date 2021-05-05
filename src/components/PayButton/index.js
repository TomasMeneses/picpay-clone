import React from 'react';
import { TouchableWithoutFeedback } from 'react-native'
import { Button, Label } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
export default function PayButton({onPress, focused}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <Button
            colors={
                focused ? ['#00ac4a', '#00ac5f'] : ['#00fc6c', '#00ac4a']
            }
            start={[1, 0.2]}
            >
                <MaterialIcons name="attach-money" size={30} color={'#fff'} />
                <Label focused={focused}>Pagar</Label>
            </Button>
        </TouchableWithoutFeedback>
    )
}