import React, { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";

export type User = {
  id: number;
  username: string;
  age: number;
};

const isUser = (params: unknown): params is User => {
  const user = params as User;

  return (
    typeof user?.id === "number" &&
    typeof user?.username === "string" &&
    typeof user?.age === "number"
  );
};

const statusValues = {
  Loading: "loading",
  Success: "success",
  Error: "error",
} as const;

type Status = typeof statusValues[keyof typeof statusValues];

export const App = () => {
  const [count, setCount] = useState(0);

  const [user, setUser] = useState<User | null>(null);
  const [status, setStatus] = useState<Status>(statusValues.Loading);

  useEffect(() => {
    const load = async (): Promise<void> => {
      try {
        const response = await fetch("http://localhost:3000/v1/users/123");

        if (!response.ok) {
          throw new Error(`HTTP-Error: ${response.status}`);
        }

        const responseData = (await response.json()) as unknown;
        if (!isUser(responseData)) {
          throw new Error(`Response Invalid: ${JSON.stringify(responseData)}`);
        }

        setUser(responseData);
      } catch (err) {
        setStatus(statusValues.Error);
        throw err;
      } finally {
        setStatus(statusValues.Success);
      }
    };

    void load();
  }, []);

  if (status === statusValues.Loading) return <p>Loading...</p>;
  if (status === statusValues.Error) return <p>Error</p>;

  const addCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <Button children="button" onClick={() => addCount()} />
      <div>
        <p>id: {user?.id}</p>
        <p>username: {user?.username}</p>
        <p>age: {user?.age}</p>
      </div>
    </>
  );
};
