import { Link, useNavigate, useLocation } from 'react-router-dom';
import ButtonIcon from 'components/ButtonIcon';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/requests';
import { useContext, useState } from 'react';
import { AuthContext } from 'AuthContext';
import { saveAuthData } from 'util/storage';
import { getTokenData } from 'util/token';

import './style.css';

type CredentialsDTO = {
  username: string;
  password: string;
};




export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();


  const { form } = location.state || { form: '/admin' };




  const { setAuthContextData } = useContext(AuthContext);
  const [hasError, setHasError] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<CredentialsDTO>();

  const onSubmit = async (formData: CredentialsDTO) => {
    try {
      const response = await requestBackendLogin(formData);
      saveAuthData(response.data);
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
      setHasError(false);
      navigate(form, { replace: true });
    } catch (error) {
      setHasError(true);
      console.error('Erro ao efetuar login:', error);
    }
  };

  return (
    <div className="base-card login-card">
      <h1>LOGIN</h1>
      {hasError && <div className="alert alert-danger">Erro ao tentar efetuar o login</div>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            className={`form-control base-input ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Email"
          />
          <div className="invalid-feedback d-block">{errors.username?.message}</div>
        </div>
        <div className="mb-2">
          <input
            {...register('password', { required: 'Campo obrigatório' })}
            type="password"
            className={`form-control base-input ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Password"
          />
          <div className="invalid-feedback d-block">{errors.password?.message}</div>
        </div>
        <Link to="/admin/auth/recover" className="login-link-recover">Esqueci a senha</Link>
        <div className="login-submit">
          <ButtonIcon text="Fazer login" />
        </div>
        <div className="signup-container">
          <span className="not-registered">Não tem cadastro?</span>
          <Link to="/admin/auth/register" className="login-link-register">CADASTRAR</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
