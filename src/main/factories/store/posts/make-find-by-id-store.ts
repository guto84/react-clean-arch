import { FindByIdPostStore } from 'application/store'
import { useAppDispatch, useAppSelector } from 'application/store/root'

export const MakeFindByIdPostStore = () => {
  return new FindByIdPostStore(useAppDispatch, useAppSelector)
}
