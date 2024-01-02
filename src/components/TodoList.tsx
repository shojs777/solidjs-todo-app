import { Component, For, Setter } from "solid-js";

const TodoList: Component<{ todos: Todo[]; setTodos: Setter<Todo[]> }> = (
  props
) => {
  const handleCheck = (e: any) => {
    props.setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === e.currentTarget.id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
  };

  const handleDelete = (e: any) => {
    props.setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== e.currentTarget?.parentElement?.id;
      });
    });
  };
  return (
    <div>
      <ul class="mt-6">
        <For each={props.todos}>
          {(todo) => (
            <li
              id={todo.id}
              class="form-control max-w-40 flex flex-row items-center"
              onClick={handleCheck}
            >
              <label
                class="label cursor-pointer flex mr-8"
                classList={{ "line-through": todo.isDone }}
              >
                <div class="label-text justify-start min-w-24 mr-4">
                  {todo.text}
                </div>
                <input type="checkbox" checked={todo.isDone} class="checkbox" />
              </label>
              <button
                class="btn btn-xs btn-outline btn-error"
                onClick={handleDelete}
              >
                削除
              </button>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
export default TodoList;
