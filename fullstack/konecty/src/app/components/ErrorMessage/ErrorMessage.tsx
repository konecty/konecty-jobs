import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps): React.JSX.Element => {
  return (
    <div className="flex justify-center">
      <p className="font-montserrat font-semibold">{message}</p>
    </div>
  );
};

export default ErrorMessage;
