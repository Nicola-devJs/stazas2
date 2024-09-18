import React from "react";
import { cn } from "../utils/cn";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export const WrapperFixed = ({ children, className }: IProps) => {
  return (
    <div className="w-full fixed bottom-0 left-0 right-0 flex justify-center">
      <div className={cn(" w-full  max-w-phone", className)}>{children}</div>
    </div>
  );
};
