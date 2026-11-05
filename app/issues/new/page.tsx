"use client";
import dynamic from "next/dynamic";
import { TextArea, TextField, Button } from "@radix-ui/themes";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-2">
      <TextField.Root placeholder="Search the docs…"></TextField.Root>
      <SimpleMDE />
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
