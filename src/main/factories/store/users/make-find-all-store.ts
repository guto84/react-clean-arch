import { FindAllUsersStore } from 'application/store'
import { useAppDispatch, useAppSelector } from 'application/store/root'

export const MakeFindAllUsersStore = () => {
  return new FindAllUsersStore(useAppDispatch, useAppSelector)
}
