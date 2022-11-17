import { Request, Response } from 'express';

export async function changeOrderStatus(req: Request, res: Response) {

    try {
        const { orderId } = req.params;
        const { status } = req.body;

        if (!['WAITINING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
            return status(400).json({
                error: 'Status should be one of these: "WAITINING, IN_PRODUCTION, DONE"'
            });
        }

        res.status(201).json();
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }

}