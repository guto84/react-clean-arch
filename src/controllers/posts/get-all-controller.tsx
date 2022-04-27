import { useCallback } from 'react'
import { GetAllPostStore } from 'domain/index'
import { GetAllPostDataProtocol } from 'usecases'

export class GetAllPostController {
  constructor(private readonly store: GetAllPostDataProtocol) {}

  allPosts: GetAllPostStore = this.store.allPosts

  getAllPosts = useCallback(() => {
    return this.store.getAllPosts()
  }, [])
}
