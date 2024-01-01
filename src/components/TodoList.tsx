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
  return (
    <div>
      <ul class="mt-6">
        <For each={props.todos}>
          {(todo) => (
            <div>
              {
                <li
                  id={todo.id}
                  class="form-control max-w-40"
                  onClick={handleCheck}
                >
                  <label
                    class="label cursor-pointer flex"
                    classList={{ "line-through": todo.isDone }}
                  >
                    <div class="label-text justify-start">{todo.text}</div>
                    <input
                      type="checkbox"
                      checked={todo.isDone}
                      class="checkbox block"
                    />
                  </label>
                </li>
              }
            </div>
          )}
        </For>
      </ul>
    </div>
  );
};
export default TodoList;
