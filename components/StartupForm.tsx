"use client";

import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";

const StartupForm = () => {
  const [pitch, setPitch] = useState("");
  const [isPending, setIsPending] = useState(false);
  return (
    <form className="startup-form">
      <div className="flex flex-col">
        <label htmlFor="title" className="startup-form_label">
          Title
        </label>
        <input
          className="startup-form_input"
          id="title"
          name="title"
          placeholder="Enter the name of your startup"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="startup-form_label">
          Description
        </label>
        <textarea
          className="startup-form_textarea"
          rows={6}
          id="description"
          name="description"
          placeholder="Short description of your startup idea"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="category" className="startup-form_label">
          Category
        </label>
        <input
          className="startup-form_input"
          id="category"
          name="category"
          placeholder="Choose a category (e.g., Tech, Health, Education, etc.)"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="media" className="startup-form_label">
          Image/Video link
        </label>
        <input
          className="startup-form_input"
          id="media"
          name="media"
          placeholder="Paste a link to your demo or promotional media"
        />
      </div>
      <div className="flex flex-col" data-color-mode="light">
        <MDEditor
          value={pitch}
          onChange={(value) => setPitch(value as string)}
          id="pitch"
          preview="edit"
          height={300}
          style={{ borderRadius: 20, overflow: "hidden" }}
          textareaProps={{
            placeholder:
              "Briefly describe your idea and what problem it solves ",
          }}
          previewOptions={{
            disallowedElements: ["style"],
          }}
        />
      </div>
      <button type="submit" className="startup-form_btn text-white" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Submit Your Pitch'}
      </button>
    </form>
  );
};

export default StartupForm;
