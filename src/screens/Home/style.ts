import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    containerLogo:{
        height: 173,
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container:{
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#1A1A1A'
    },
    containerInput:{
        flexDirection: 'row',
        position: "relative",
        bottom: 30
    },
    input:{
        flex: 1,
        backgroundColor: '#262626',
        paddingLeft: 16,
        borderRadius: 6,
        marginRight: 4,
        color: '#F2F2F2',
        fontSize: 16
    },
    button:{
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6
    },
    containerTasks:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    containerTasksText:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    created: {
        fontSize: 14,
        color: '#4EA8DE',
        fontWeight: '700',
        marginRight: 8
    },
    completed:{
        fontSize: 14,
        color: '#8284FA',
        fontWeight: '700',
        marginRight: 8
    },
    taskNumber:{
        backgroundColor: '#333333',
        paddingVertical: 2,
        paddingHorizontal: 8,
        color: '#D9D9D9',
        fontWeight: '700',
        borderRadius: 10,
    },
    containerListEmpty:{
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#333333',
        marginTop: 20,
        paddingTop: 48
    },
    listEmptyTextFirst:{
        marginTop: 16,
        fontSize: 14,
        fontWeight: '700',
        color: '#808080',
    },
    listEmptyTextSecond:{
        fontSize: 14,
        color: '#808080',
    }
})