import React, { useRef } from 'react';
import { View, Text, StyleSheet, ToastAndroid, TouchableOpacity, PermissionsAndroid } from 'react-native';
import Header from '../Header';
import QRCode from 'react-native-qrcode-svg';
import RNFS from "react-native-fs";
import CameraRoll from '@react-native-community/cameraroll'
import { base64 } from '../../utils';

export default function QrCode({ route }) {

    const { verify, valueAmbiente = null, valueTransporte = null } = route.params;

    let refQrCode = useRef(null)

    let valor = null;

    if (valueAmbiente != null) {
        valor = valueAmbiente;
    }

    if (valueTransporte != null) {
        valor = valueTransporte;
    }

    async function getDataURL() {
        try {
            await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            ]);
        } catch (err) {
            console.warn(err);
        }

        const readGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
        const writeGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

        if (readGranted && writeGranted) {
            refQrCode.current.toDataURL(data => {
                var path = `${RNFS.DownloadDirectoryPath}/Gesta`;

                RNFS.mkdir(path)
                    .then(() => {
                        RNFS.writeFile(path + `/${valor}.png`, data, 'base64')
                            .then(() => {
                                return CameraRoll.save(path + `/${valor}.png`, 'photo')
                            })
                            .then(() => {
                                ToastAndroid.show('QRCode Salvo no Diretório Downloads', ToastAndroid.LONG)
                            })
                    });
            });
        }

    }

    return (
        <View style={styles.container}>
            <Header titulo={verify} />

            <View style={styles.qrcode}>
                <QRCode
                    value={verify === 'Adicionar Ambiente' ? valueAmbiente : valueTransporte}
                    logo={{ uri: base64 }}
                    logoSize={20}
                    logoBackgroundColor='transparent'
                    getRef={refQrCode}
                />
            </View>
            <TouchableOpacity onPress={getDataURL}>
                <Text>Salvar Imagem</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3F5C57'

    },
    qrcode: {
        alignItems: 'center',
        marginTop: '30%'
    }
})