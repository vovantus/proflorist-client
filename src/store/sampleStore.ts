import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface SampleState {
    count: number
    inc: () => void
    clear: () => void
}


const useStore = create<SampleState>()(
    persist(
            (set) => ({
            count: 0,
            inc: () => set((state) => ({ count: state.count + 1 })),
            clear: ()=>set(()=> ({count:0}))
            }),
            {
                name: 'zustand-sampe',
            },
        ),
)

export default useStore;
