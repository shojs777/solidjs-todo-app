import Wrapper from "../components/Wrapper";
import Input from "../components/InputForm";
import TodoList from "../components/TodoList";
import { Show, createSignal, createUniqueId } from "solid-js";
const App = () => {
  const [todos, setTodos] = createSignal<Todo[]>([]);
  setTodos((prev) => [
    ...prev,
    {
      id: createUniqueId(),
      isDone: false,
      text: "サンプル1",
      createdAt: new Date(),
    },
  ]);

  return (
    <Wrapper>
      <h1 class="font-bold text-5xl">Todo App</h1>
      <Input setTodos={setTodos} />
      <Show
        when={todos().length > 0}
        fallback={<div class="mt-6">タスクはありません</div>}
      >
        {<TodoList todos={todos()} setTodos={setTodos} />}
      </Show>
    </Wrapper>
  );
};

export default App;
