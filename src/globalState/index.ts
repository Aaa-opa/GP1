import { create } from 'zustand'

interface GlobalState {
  count: number
  todos: string[]
  isDark: boolean
  increaseCount: () => void
  addTodo: (todo: string) => void
  toggleTheme: () => void
}

const useStore = create<GlobalState>((set) => ({
  count: 0,
  todos: [],
  isDark: false,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTheme: () => set((state) => ({ isDark: !state.isDark }))
}))

export default useStore