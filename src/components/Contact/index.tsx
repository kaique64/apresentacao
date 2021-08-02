/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import AOS from "aos";
import { useForm } from "react-hook-form";
import { Context } from "../../contexts/ContactProvider";
import {
  ContactForm,
  MessageInput,
  MessageLabel,
  SendButton,
  WarnMessage,
} from "./styles";
import Title from "../Title";
import Input from "../Input";
import Message from "../Message";

interface IContact {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  AOS.init({ once: true });
  const {
    onSubmit,
    handleClose,
    disabled,
    loading,
    invalidEmail,
    error,
    open,
  } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>();

  return (
    <>
      <Title title="Contato" right />
      <ContactForm
        onSubmit={handleSubmit(onSubmit)}
        id="contact"
        data-aos="slide-left"
      >
        <Input
          {...register("name", { required: true })}
          label="Nome"
          placeholder="Digite seu nome"
          error={!!errors.name}
        />
        {errors.name && <WarnMessage> Nome é obrigatório </WarnMessage>}

        <Input
          {...register("email", { required: true })}
          label="Email"
          placeholder="Digite seu email"
          error={!!errors.email}
        />
        {errors.email && <WarnMessage> Email é obrigatório </WarnMessage>}
        {invalidEmail && <WarnMessage> Email inválido </WarnMessage>}

        <MessageLabel htmlFor="message"> Mensagem </MessageLabel>
        <MessageInput
          {...register("message", { required: true })}
          placeholder="Digite sua mensagem"
          theme={{ error: !!errors.message }}
        />
        {errors.message && <WarnMessage> Mensagem é obrigatória </WarnMessage>}

        <Message error={error} open={open} close={handleClose} />
        <SendButton
          type="submit"
          disabled={disabled}
          theme={{ bg: disabled && "#a952ff" }}
        >
          {loading ? "Carregando..." : "Enviar"}
        </SendButton>
      </ContactForm>
    </>
  );
}
