import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Form, Input, Check } from "@rocketseat/unform";
import * as Yup from "yup";

import "../Auth.css";

import { signUpRequest } from "../../store/modules/auth/actions";

const schema = Yup.object().shape({
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email("Insira um email válido")
    .required("O email é obrigatório"),
  password: Yup.string()
    .min(6, "No mínimo 6 caracteres")
    .required("A senha é obrigatória"),
  provider: Yup.boolean()
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, provider }) {
    dispatch(signUpRequest(name, email, password, provider));
  }

  return (
    <>
      <Form id="auth" schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <Check name="provider" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
