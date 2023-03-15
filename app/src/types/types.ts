type NullableString = string | null;

type IUser = {
  userId? :number,
  id?: number,
  title?: string,
  body?: string | null
}

　type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type { NullableString,IUser,HttpMethod };
