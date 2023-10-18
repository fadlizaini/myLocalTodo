import {useState} from 'react';
import {Appbar, FAB, TextInput} from 'react-native-paper';
import style from './style';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {saveTodoList} from '../../utils/helper';

export default function Details({navigation, route}) {
  const {goBack} = navigation;
  const {bottom} = useSafeAreaInsets();
  const {index, todoList, secretKey} = route.params;
  const [todo, setTodo] = useState(todoList[index] || '');

  const setTodoList = async () => {
    let payload = [...todoList];
    if (index !== undefined) {
      payload = todoList;
      payload[index] = todo;
    } else {
      payload = [...todoList, todo];
    }
    await saveTodoList(payload, secretKey);
  };

  const onPressDelete = async () => {
    let payload = [...todoList];
    if (index !== undefined) {
      payload.splice(index, 1);
      // console.log(payload);
      await saveTodoList(payload, secretKey);
    }
    goBack();
  };

  const onPressBack = async () => {
    if (todo) {
      await setTodoList();
    }
    goBack();
  };

  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={onPressBack} />
        <Appbar.Content title="To Do" />
      </Appbar.Header>
      <TextInput
        value={todo}
        style={[style.textInput, {marginBottom: bottom}]}
        multiline
        onChangeText={(text) => {
          setTodo(text);
        }}
      />
      <FAB mode="flat" size="medium" icon="delete" onPress={onPressDelete} style={style.fab} />
    </>
  );
}
