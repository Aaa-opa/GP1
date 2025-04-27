import { create } from 'zustand'

interface GlobalState {
  count: number
  todos: string[]
  isDark: boolean
  volume: number
  increaseCount: () => void
  addTodo: (todo: string) => void
  toggleTheme: () => void
}

const useStore = create<GlobalState>((set) => ({
    count:  0,
    todos: [],  
    isDark: false,
    volume: 50,
  decreaseVolume: () => set((state) => ({ volume: state.volume - 1 })),
  increaseVolume: () => set((state) => ({ volume: state.volume + 1 })),
       
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  addTodo: (todo: string) => set((state) => ({ todos: [...state.todos, todo] })),
  toggleTheme: () => set((state) => ({ isDark: !state.isDark }))
}))

export default useStore