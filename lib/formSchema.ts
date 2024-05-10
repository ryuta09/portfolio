import { z } from "zod";
export const formSchema = z.object({
  username: z.string().min(2, { message: "2文字以上で入力してください" }),
  email: z.string().email({message: "適切なメールアドレスを入力してください"}),
  title: z.string().min(10, {message: "件名は10文字以上で入力してください"}),
  content: z.string().min(10, {message: "10文字以上で入力してください"}).max(160, {message: "160文字以内で入力してください"})
});
