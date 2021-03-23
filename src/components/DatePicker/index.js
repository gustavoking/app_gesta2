import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePicker({ date, setDateNow, mode, onClose, onChange }) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onClose}>
                <DateTimePicker
                    value={date}
                    mode={mode}
                    display="spinner"
                    minimumDate={new Date()}
                    onChange={(event, dateOnChange) => {
                        const currentDate = dateOnChange || date;
                        setDateNow(currentDate);
                        onChange(currentDate);
                    }}
                    style={{ backgroundColor: 'white' }}
                />
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        position: "absolute",
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%'
    }
})