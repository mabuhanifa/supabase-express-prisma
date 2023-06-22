import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await prisma.todo.findMany();

    res.send({ message: "Success", data: todos });
  } catch (error) {
    res.send({ message: "Something went wrong!", error: error });
  }
};

const createTodo = async (req: Request, res: Response) => {
  const { title, isCompleted } = req.body;
  try {
    const todo = await prisma.todo.create({
      data: {
        title: title,
        isCompleted: isCompleted,
      },
    });
    res.send({ message: "Success", data: todo });
  } catch (error) {
    res.send({ message: "Something went wrong!", error: error });
  }
};

export { createTodo, getTodos };
