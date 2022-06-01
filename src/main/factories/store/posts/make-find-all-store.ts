import { FindAllPostsStore } from 'application/store'
import { useAppDispatch, useAppSelector } from 'application/store/root'

export const MakeFindAllPostsStore = () => {
  return new FindAllPostsStore(useAppDispatch, useAppSelector)
}
