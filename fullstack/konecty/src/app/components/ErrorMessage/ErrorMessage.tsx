import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="flex justify-center">
      <p className="font-montserrat font-semibold">{message}</p>
    </div>
  );
};

export default ErrorMessage;
