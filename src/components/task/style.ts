import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerTaskCreated:{
        flexDirection: 'row',
        backgroundColor: '#262626',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8,
        marginBottom: 8,
    },
    textTask:{
        flex: 1,
        color: '#F2F2F2',
    },
    imgCheck:{
        marginLeft: 12,
        marginRight: 8
    },
    imgTrash:{
        marginHorizontal: 8
    }
})