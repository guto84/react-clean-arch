import React from 'react'
import { useFormik } from 'formik'
import { LoginFactory } from 'application/factories'

export const Login: React.FC = () => {
  const { handleLogin } = LoginFactory()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      handleLogin(values)
        .then((response) => console.log('RESPONSE', response))
        .catch((error) => console.log('ERROR', error.message))
    }
  })

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <br />
        <br />
        <label htmlFor="password">Senha</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
