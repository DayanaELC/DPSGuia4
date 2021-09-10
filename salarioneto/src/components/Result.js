import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
 const {nombre, base, isss, afp, renta, total, errorMessage} = props;
 return (
 <View style={styles.content}>
 {total && (
   <View style={styles.boxResult}>
 <Text style={styles.title}>Resultado</Text>
 <DataResult title="Nombre de la persona:" value={`${nombre}`} />
 <DataResult title="Salario base:" value={`${base} US`} />
 <DataResult title="ISSS (-3%):" value={`${isss} US`} />
 <DataResult title="AFP (- 4%)" value={`${afp} US`} />
 <DataResult title="Renta (-5%)" value={`${renta} US`} />
 <DataResult
    title="Salario neto:"
    value={`${total -isss -afp -renta} US`}
 />
 </View>
 )}
 <View>
 <Text style={styles.error}>{errorMessage}</Text>
 </View>
 </View>
 );
}
function DataResult(props) {
 const {title, value} = props;
 return (
 <View style={styles.value}>
 <Text>{title}</Text>
 <Text>{value}</Text>
 </View>
 );
}
const styles = StyleSheet.create({
 content: {
 marginHorizontal: 40,
 },
  boxResult: {
    paddingLeft: 30,
    paddingRight: 30,
 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 20,
 },
 value: {
 flexDirection: 'row',
 justifyContent: 'space-between',
 marginBottom: 20,
 },
 error: {
 textAlign: 'center',
 color: '#f00',
 fontWeight: 'bold',
 fontSize: 20,
 },
});
