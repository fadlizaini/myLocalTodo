import {Appbar, Card, FAB, Text} from 'react-native-paper';
import style from './style';
import {useEffect, useState} from 'react';
import {retrieveToDoList} from '../../utils/helper';
export default function Home(props) {
  const {navigation} = props;
  const {secretKey} = props.route.params;

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setTodoList(await retrieveToDoList(secretKey));
    });
    return unsubscribe;
  }, [navigation]);

  const navigateToDetails = (method, payload) => {
    navigation.navigate('details', {method: method, ...payload, secretKey});
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="To Do List" />
      </Appbar.Header>
      {todoList.map((item, index, arr) => {
        return (
          <Card
            onPress={() => navigateToDetails('edit', {index, todoList: arr})}
            style={style.card}>
            <Card.Content>
              <Text variant="bodyMedium">{item}</Text>
            </Card.Content>
          </Card>
        );
      })}

      <FAB
        mode="flat"
        size="medium"
        icon="plus"
        onPress={() => {
          navigateToDetails('add', {todoList, secretKey});
        }}
        style={style.fab}
      />
    </>
  );
}
