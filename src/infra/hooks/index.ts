import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from 'store/root'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

type UseAppDispatch = typeof useAppDispatch
type UseAppSelector = typeof useAppSelector

export type { UseAppDispatch, UseAppSelector }
