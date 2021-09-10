/**
* @format
* @flow strict-local
*/

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import colors from './src/utils/colors';

export default function App() {
  const [nombre, setNombre] = useState(null);
  const [base, setBase] = useState(null);
  const [total, setTotal] = useState(null);
  const [isss, setIsss] = useState(null);
  const [afp, setAfp] = useState(null);
  const [renta, setRenta] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (nombre && base) calculate();
    else reset();
  }, [nombre, base]);
 
  const calculate = () => {
  reset();
  if (!nombre) {
      setErrorMessage('Digita el nombre del empleado');
  } else if (!base) {
      setErrorMessage('Digita el salario base');
  }  else {
      const i = base / 100;
      setIsss(base * 0.03);
      setAfp(base * 0.04);
      setRenta(base * 0.05);
      //const fee = base / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal(base);

    }
  };

  const reset = () => {
    setErrorMessage('');
    setTotal(null);
  };
  return (
    <>
    <StatusBar barStyle="light-content" />
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.background} />
    <Text style={styles.titleApp}>Calculador de salario</Text>
    <Form
      setNombre={setNombre}
      setBase={setBase}
    />
    </SafeAreaView>
    <Result
      nombre={nombre}
      base={base}
      isss={isss}
      afp={afp}
      renta={renta}
      total={total}
      errorMessage={errorMessage}
    />
    <Footer calculate={calculate} />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center',
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: 'absolute',
    zIndex: -1,
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
  },
});