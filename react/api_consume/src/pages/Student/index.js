import React, { useState, useEffect } from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyle';
import { Form } from './styled';
import Loading from '../../components/Loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Student({ match }) {
  console.log(`match: ${match}`);
  const id = get(match, 'params.id', '');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const photo = get(data, 'Foto[0].url');

        setName(data.nome);
        setLastName(data.sobrenome);
        setEmail(data.email);
        setAge(data.idade);
        setWeight(data.peso);
        setHeight(data.altura);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.error(error));
        }
        history.push('/');
      }
    }
    getData(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      toast.error('Name must be between 3 and 255 characters');
      formErrors = true;
    }

    if (lastName.length < 3 || lastName.length > 255) {
      toast.error('Last name must be between 3 and 255 characters');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Invalid email');
      formErrors = true;
    }

    if (!isInt(String(age))) {
      toast.error('Invalid age');
      formErrors = true;
    }

    if (!isFloat(String(weight))) {
      toast.error('Invalid weight');
      formErrors = true;
    }

    if (!isFloat(String(height))) {
      toast.error('Invalid height');
      formErrors = true;
    }

    if (formErrors) return;
    try {
      setIsLoading(true);
      if (id) {
        await axios.put(`/alunos/${id}`, {
          nome: name,
          sobrenome: lastName,
          email,
          idade: age,
          peso: weight,
          altura: height,
        });
        toast.success('Edited successfully');
      } else {
        const { data } = await axios.post(`/alunos/`, {
          nome: name,
          sobrenome: lastName,
          email,
          idade: age,
          peso: weight,
          altura: height,
        });
        toast.success('Created successfully');
        history.push(`/student/${data.id}/edit`);
      }
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(err, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Unknown error');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
        toast.error('');
      }
      setIsLoading(false);
    }
  };

  const fieldFactory = (fieldName, fieldValue, fieldSetter, type = 'text') => {
    return (
      <input
        type={type}
        value={fieldValue}
        onChange={(e) => fieldSetter(e.target.value)}
        placeholder={fieldName}
      />
    );
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit Student' : 'Create Student'}</h1>
      <Form onSubmit={handleSubmit}>
        {fieldFactory('Name', name, setName)}
        {fieldFactory('Last name', lastName, setLastName)}
        {fieldFactory('Email', email, setEmail, 'email')}
        {fieldFactory('Age', age, setAge, 'number')}
        {fieldFactory('Weight', weight, setWeight)}
        {fieldFactory('Height', height, setHeight)}
        <button type="submit">Send</button>
      </Form>
    </Container>
  );
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
