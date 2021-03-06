import React, { Component } from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, keyboardType, autoCapitalize }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{ label }</Text>
            <TextInput
                autoCorrect={false}
                autoCapitalize={autoCapitalize}
                onChangeText={onChangeText}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        borderColor: '#404956',
        borderBottomWidth: 2,
    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#404956',
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
    },
    input: {
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#404956',
        fontSize: 18,
        width: '100%',
    }
});

export { Input };
