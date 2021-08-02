/* eslint-disable react/jsx-props-no-spreading */
import React, { InputHTMLAttributes } from "react";
import { FormInput, FormLabel } from "./styles";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  error: boolean;
}

export default function Input({ name, label, error, ...rest }: IInput) {
  return (
    <>
      <FormLabel htmlFor={name}> {label} </FormLabel>
      <FormInput type="text" name={name} theme={{ error }} {...rest} />
    </>
  );
}
