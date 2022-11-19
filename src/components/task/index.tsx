import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { styles } from './style'

import Check from '../../../assets/check.png';
import CheckConplete from '../../../assets/check-complete.png';
import Trash from '../../../assets/trash.png';

type Props = {
    text: string
    onRemove: () => void
    inc: () => void
    dec: () => void
}

export function Task({text, onRemove, inc, dec}: Props){

    const [img, setImg] = useState<undefined>(Check)
    const [styleText, setStyleText] = useState<any>({color: '#FFF', textDecorationLine: 'none'})

    function handleTasksComplete(){
        if(img === CheckConplete){
            setStyleText({color: '#FFF', textDecorationLine: 'none'})
            dec()
            setImg(Check)
        }else {
            setStyleText({color: '#808080', textDecorationLine: 'line-through'})
            inc()
            setImg(CheckConplete)
        }
    }

    return(
        <View style={styles.containerTaskCreated}>
            <TouchableOpacity onPress={handleTasksComplete}>
                <Image source={img} style={styles.imgCheck}/>
            </TouchableOpacity>
            <Text style={[styles.textTask, {color: styleText.color, textDecorationLine: styleText.textDecorationLine}]}>{text}</Text>
            <TouchableOpacity onPress={() => {onRemove()}}>
                <Image source={Trash} style={styles.imgTrash}/>
            </TouchableOpacity>
        </View>
    )
}

