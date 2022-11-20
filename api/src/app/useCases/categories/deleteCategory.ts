import { Request, Response } from "express";
import { Order } from "../../models/Order";

export async function deleteCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    await Order.findByIdAndDelete(categoryId);
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
