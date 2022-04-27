import { useCallback } from 'react'
import { GetByIdPostDataProtocol } from 'usecases'

export class GetByIdPostController {
  constructor(private readonly store: GetByIdPostDataProtocol) {}

  showPost = this.store.showPost

  getByIdPosts = useCallback((id: number) => {
    this.store.getByIdPosts(id)
  }, [])
}
