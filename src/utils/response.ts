import { Response } from "express";

class ResponseHelpers {
  sendResponse(
    res: Response,
    message: string,
    statusCode: number,
    data: string
  ) {
    return res.status(statusCode).json({
      message,
      statusCode,
      data,
    });
  }
  sendError(res: Response, message: string, statusCode: number, error: string) {
    return res.status(statusCode).json({
      message,
      statusCode,
      error,
    });
  }
}

export const { sendResponse, sendError } = new ResponseHelpers();
