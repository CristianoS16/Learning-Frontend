import React from 'react';

import { useDispatch } from 'react-redux';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyle';

import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(exampleActions.clickButtonRequest());
  };

  return (
    <Container>
      <Title isRed>Login</Title>
      <small>Test</small>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit sit,
        modi, in eaque possimus consequatur dolor minus, fugit quas officia
        corrupti obcaecati dolorum distinctio incidunt veniam. Ratione ex libero
        consequuntur?
      </p>
      <a href="/">Tesrte</a>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
