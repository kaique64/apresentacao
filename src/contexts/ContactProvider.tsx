/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";
import api from "../services/apiEmail";

interface IContact {
  name: string;
  email: string;
  message: string;
}

interface IContactProvider {
  invalidEmail: boolean;
  disabled: boolean;
  loading: boolean;
  onSubmit(data: IContact): Promise<void>;
  handleClose: VoidFunction;
  error: boolean;
  open: boolean;
}

const Context = createContext({} as IContactProvider);

function ContactProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);

  async function onSubmit(data: IContact) {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isEmail.test(data.email)) {
      setInvalidEmail(true);
      setDisabled(false);
    } else {
      setInvalidEmail(false);
      setLoading(true);
      setDisabled(true);

      try {
        await api.post("/send", {
          name: data.name,
          email: data.email,
          message: data.message,
        });
      } catch (err) {
        if (err) {
          setLoading(false);
          setDisabled(false);
          setError(true);
        } else {
          setError(false);
        }
      }

      setOpen(true);
      setLoading(false);
      setDisabled(false);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <Context.Provider
      value={{
        invalidEmail,
        disabled,
        loading,
        onSubmit,
        handleClose,
        error,
        open,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContactProvider };
