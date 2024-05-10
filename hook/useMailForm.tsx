import { formSchema } from "@/lib/formSchema";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
export const useMailForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = async (values:any) => {
    const {username, email, title, content} = values;
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/send`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username, email, title, content}),
      })
    } catch(err) {
      console.error(err);
    }
  };

  return {
    form,
    onSubmit,
  };
};
