"use client";
import { useFormStatus } from "react-dom";
import { addTask } from "./actions";
import { useActionState } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit">
      {pending ? "กำลังเพิ่มครับ" : "เพิ่ม"}
    </button>
  );
};

const AddTaskForm = () => {
  const [state, formAction] = useActionState(addTask, { error: null });
  return (
    <form action={formAction} className="flex gap-2">
      <div className="flex gap-2">
        <input
          name="title"
          placeholder="งานใหม่..."
          className=" border p-2 flex-1"
        />
        <SubmitButton />
      </div>
      {state.error && <p className="text-red-500 text-sm">{state.error}</p>}
    </form>
  );
};

export default AddTaskForm;
