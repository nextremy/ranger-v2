import { Session } from "@/app/api/_types/session";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type SessionStore = {
  session?: Session;
  setSession: (session: Session) => void;
};

export const useSessionStore = create<SessionStore>()(
  persist(
    (set) => ({ setSession: (session) => set(() => ({ session: session })) }),
    { name: "session-store" },
  ),
);
