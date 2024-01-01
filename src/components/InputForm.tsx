import { Component, Setter, createSignal, createUniqueId } from "solid-js";

const Input: Component<{ setTodos: Setter<Todo[]> }> = (props) => {
  const [inputValue, setInputValue] = createSignal("");
  const handleClick = (e: Event) => {
    e.preventDefault();
    props.setTodos((prev) => [
      ...prev,
      {
        id: createUniqueId(),
        isDone: false,
        text: inputValue(),
        createdAt: new Date(),
      },
    ]);
  };
  return (
    <>
      <input
        class="input input-bordered input-accent w-full max-w-xs mt-12 mr-4"
        type="text"
        placeholder="タスクを入力してください"
        value={inputValue()}
        onInput={(e) => {
          // ボタンを押した時に値を取得したいケースでは、onChange、onInputでも大差ない
          setInputValue(e.target.value);
        }}
      />
      <button
        class="btn btn-neutral"
        onClick={handleClick}
        disabled={inputValue() === ""}
      >
        追加
      </button>
    </>
  );
};

export default Input;
