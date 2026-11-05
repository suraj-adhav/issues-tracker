import { TextArea, TextField, Button } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl">
      <TextField.Root placeholder="Search the docs…"></TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit</Button>
    </div>
  );
};

export default NewIssuePage;
