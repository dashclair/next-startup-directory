"use client";

import { useActionState, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { formSchema } from "@/libs/validation";

import { z } from "zod";
import { useRouter } from "next/navigation";

const StartupForm = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pitch, setPitch] = useState("");

  const router = useRouter();

  const handleFormSubmit = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        media: formData.get("media"),
        pitch,
      };

      await formSchema.parseAsync(formValues);

    //   const result = await createIdea(prevState, formData, pitch)

      console.log(formValues);

    //   router.push(`/startup/${result.id}`);

    //   return result
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);

        return { ...prevState, error: "Validation error", status: "ERROR" };
      }

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });
  return (
    <form action={formAction} className="startup-form">
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
        {errors.title && <p className="startup-form_error">{errors.title}</p>}
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
        {errors.description && (
          <p className="startup-form_error">{errors.description}</p>
        )}
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
        {errors.category && (
          <p className="startup-form_error">{errors.category}</p>
        )}
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
        {errors.media && <p className="startup-form_error">{errors.media}</p>}
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
        {errors.pitch && <p className="startup-form_error">{errors.pitch}</p>}
      </div>
      <button
        type="submit"
        className="startup-form_btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit Your Pitch"}
      </button>
    </form>
  );
};

export default StartupForm;
