"use client";
import dynamic from "next/dynamic";
import { TextArea, TextField, Button, Spinner } from "@radix-ui/themes";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<IssueForm>();

  const [isLoading, setLoading] = useState(false);

  return (
    <form
      className="max-w-xl space-y-2"
      onSubmit={handleSubmit(async (data) => {
        if(isLoading) return;

        try {
          setLoading(true);
          console.log(data);
          await axios.post("/api/issues", data);
          setLoading(false);

          reset();
        } catch (err) {
          setLoading(false);
          console.log(err);
        }
      })}
    >
      <TextField.Root
        placeholder="Title"
        {...register("title")}
      ></TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button type="submit"> 
        Sumbit {isLoading && <Spinner size={"1"}></Spinner>}
      </Button>
       
    </form>
  );
};

export default NewIssuePage;
