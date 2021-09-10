import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../utils/colors';

export default function Form(props) {
    const {setNombre, setBase} = props;
    return (
        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                placeholder="Nombre"
                style={styles.input}
                onChange={(e) => setNombre(e.nativeEvent.text)}
                />

                <TextInput
                placeholder="Salario base"
                keyboardType="numeric"
                style={[styles.input, styles.inputPercentage]}
                onChange={(e) => setBase(e.nativeEvent.text)}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        bottom: 50,
        width: '85%',
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center',
    },
    viewInputs: {
        flexDirection: 'row',
    },
    input: {
        height: 50,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: '60%',
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: '#000',
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: '40%',
        marginLeft: 5,
    },
});
