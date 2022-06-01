import { CreatePostStore } from 'application/store'
import { useAppDispatch, useAppSelector } from 'application/store/root'

export const MakeCreatePostStore = () => {
  return new CreatePostStore(useAppDispatch, useAppSelector)
}
