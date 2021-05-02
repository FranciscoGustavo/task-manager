import { Response } from 'express';

type SuccessProps = {
  res: Response;
  message?: string;
  body?: any;
  status?: number;
};
type Success = (successProps: SuccessProps) => void;

export const success: Success = ({
  res,
  message = 'successful request',
  body = false,
  status = 200,
}) => {
  res.status(status).json({
    error: false,
    status,
    message,
    body,
  });
};
