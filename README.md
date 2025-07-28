# StateCraft: Mastering State Management with Redux & Context API

## 📌 Project Overview
This project demonstrates different state management approaches in React by building a counter application with:
1. `useState` for local state
2. Context API for global state
3. Redux for scalable state management

## 🎯 Learning Objectives
- Understand React state management fundamentals
- Implement global state with Context API
- Master Redux for complex state
- Compare state management solutions
- Learn state persistence techniques

## 🛠️ Tech Stack
- React 18+
- TypeScript
- Next.js
- Redux Toolkit
- React-Redux

## ✅ Completed Tasks

## 🧩 Task Breakdown

### 🔢 Task 0: Counter with useState Hook
**Objective**: Implement basic counter using React's built-in state management.

**Key Features**:
- Local component state management
- Increment/decrement functionality
- Conditional UI feedback based on count

**Implementation**:
```typescript
// pages/counter-app.tsx
const [count, setCount] = useState(0);

const increment = () => setCount(count + 1);
const decrement = () => setCount(count > 0 ? count - 1 : 0);
UI Elements:

Animated buttons with hover effects

Dynamic emoji reactions (🙈 for 0, 🔥 for multiples of 10)

Gradient background for visual appeal

Files Modified:

pages/counter-app.tsx (created)

🌐 Task 1: Context API Implementation
Objective: Share counter state across components using Context API.

Key Features:

Global state accessible in Header and CounterApp

Custom useCount hook for clean consumption

Type-safe context with TypeScript

Core Implementation:

typescript
// context/CountContext.tsx
interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CountContext = createContext<CountContextProps | undefined>(undefined);

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  // ...provider logic
};
Integration:

Wrapped app in CountProvider (_app.tsx)

Consumed context in Header component:

typescript
// components/layout/Header.tsx
const { count } = useCount();
Files Modified:

context/CountContext.tsx (created)

components/layout/Header.tsx

pages/_app.tsx

🔄 Task 2: Redux Implementation
Objective: Replace Context API with Redux for scalable state management.

Key Features:

Redux Toolkit for simplified setup

Slice pattern for modular state

Typed hooks for TypeScript support

Store Configuration:

typescript
// store/store.ts
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1 },
    decrement: (state) => { state.value > 0 ? state.value -= 1 : 0 }
  }
});
Component Integration:

typescript
// pages/counter-app.tsx
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useAppDispatch();

<button onClick={() => dispatch(increment())}>Increment</button>
Files Modified:

store/store.ts (created)

pages/counter-app.tsx

components/layout/Header.tsx

🏗️ Project Structure
text
alx-project-0x04-setup/
├── alx-project-0x04/        # useState version
│   └── pages/
│       └── counter-app.tsx
├── alx-project-0x05/        # Context API version
│   ├── context/
│   │   └── CountContext.tsx
│   └── (other modified files)
└── alx-project-0x06/        # Redux version
    ├── store/
    │   └── store.ts
    └── (other modified files)
🚀 Running the Project
For any version:

bash
npm install
npm run dev -- -p 3000
Visit http://localhost:3000/counter-app

🔍 Key Learnings
Progressive complexity in state management

Tradeoffs between different solutions

TypeScript integration patterns

Component-state decoupling


