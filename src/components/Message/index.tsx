import React from "react";
import Aos from "aos";
import { MdCheckCircle, MdClose, MdWarning } from "react-icons/md";
import { MessageContainer, CloseButton } from "./styles";

interface IMessage {
  open: boolean;
  error: boolean;
  close: VoidFunction;
}

export default function SucessMessage({ open, error, close }: IMessage) {
  Aos.init({ once: true });

  return (
    <MessageContainer
      theme={{ display: open ? "flex" : "none", error }}
      data-aos="slide-left"
    >
      {error ? <MdWarning size={35} /> : <MdCheckCircle size={35} />}
      <h1>
        {error ? "Erro ao enviar mensagem!" : "Mensagem enviada com sucesso!"}
      </h1>
      <CloseButton type="button" onClick={close}>
        <MdClose size={35} />
      </CloseButton>
    </MessageContainer>
  );
}
