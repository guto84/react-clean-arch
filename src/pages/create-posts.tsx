import React, { useEffect } from 'react'
import { useFormik } from 'formik'

import { CreatePostController, GetAllUsersController } from 'controllers'
import { CreatePostModel } from 'domain/models'

import { CreatePostsData, GetAllUsersData } from 'data'

export const CreatePosts: React.FC = () => {
  const storeUser = new GetAllUsersData()
  const { allUsers, getAllUsers } = new GetAllUsersController(storeUser)

  const storePost = new CreatePostsData()
  const { createPostStore, setErrorMessage, createPost } =
    new CreatePostController(storePost)

  useEffect(() => {
    getAllUsers()
  }, [getAllUsers])

  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
      userId: 0
    },
    onSubmit: (values: CreatePostModel.Body) => {
      createPost(formik.values)
        .then(() => alert(JSON.stringify(values, null, 2)))
        .catch((error: any) => setErrorMessage(error))
    }
  })

  return (
    <>
      <h1>Posts</h1>
      <p>{createPostStore.createErrorMessage}</p>
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
          {allUsers.userList.map((user) => (
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
