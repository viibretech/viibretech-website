import { Input } from "@heroui/react";
import React from "react";

type Props = {
  label?: string;
  isRequired?: boolean;
  placeholder?: string;
  isReadOnly?: boolean;
  name?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  defaultValue?: string;
  className?: string;
};

function GeneralInputComponent({
  label,
  isRequired,
  placeholder,
  name,
  startContent,
  className,
  isReadOnly,
  endContent,
  defaultValue,
}: Props) {
  return (
    <Input
      label={label}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      startContent={startContent}
      labelPlacement="inside"
      defaultValue={defaultValue}
      placeholder={placeholder}
      variant="underlined"
      name={name}
      endContent={endContent}
      type="text"
      size="sm"
      className={`${className}`}
      classNames={{
        label: ["m-0 pb-1 text-xs"],
        inputWrapper: [`h-[2.3rem] rounded-0 ${isReadOnly && "bg-divider"}`],
        input: ["placeholder:text-xs", "text-xs"],
      }}
    />
  );
}

export default GeneralInputComponent;
