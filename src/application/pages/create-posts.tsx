import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { PostEntity } from 'domain/entities'
import { CreatePostFactory, GetAllUserFactory } from 'application/factories'

export const CreatePosts: React.FC = () => {
  const { createPost, createPostSelector, setErrorMessage } =
    CreatePostFactory()
  const { allUsersSelector, handleGetAllUsers } = GetAllUserFactory()

  useEffect(() => {
    handleGetAllUsers()
  }, [handleGetAllUsers])

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      userId: 0
    },
    onSubmit: (values: Omit<PostEntity, 'id'>) => {
      createPost(formik.values)
        .then(() => alert(JSON.stringify(values, null, 2)))
        .catch((error: any) => setErrorMessage(error))
    }
  })

  return (
    <>
      <h1>Posts</h1>
      <p>{createPostSelector.createErrorMessage}</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Título</label>
        <br />
        <input
          id="title"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <br />
        <br />
        <label htmlFor="body">Corpo</label>
        <br />
        <input
          id="body"
          name="body"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <br />
        <br />
        <label htmlFor="userId">Usuário</label>
        <br />
        <select id="userId" name="userId" onChange={formik.handleChange}>
          <option>Selecione...</option>
          {allUsersSelector.userList.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </>
  )
}
