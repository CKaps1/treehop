import create from "zustand";

export const Quiz = create((set) => ({
  isStart: true,
  isFinished: false,
  matchQuestion: 0,
  finalAnswer: 0,
}));

export const Panels = create((set) => ({
  minimized: true,
  flipMinimized: () => set((state) => ({ minimized: !state.minimized })),
}));

export const Container = create((set) => ({
  newPostCollapsed: true,
  flipnewPostCollapsed: () =>
    set((state) => ({ newPostCollapsed: !state.newPostCollapsed })),
}));
