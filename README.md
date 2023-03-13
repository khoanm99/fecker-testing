## Getting Started

### Atoms

- Please following the Atoms Design in this Repo. Discuss if you don't know how to separate
- [Atomic Design and ReactJS](https://danilowoz.com/blog/atomic-design-with-react)

### Styling

- Using TailwindCSS: [Link](https://tailwindcss.com/)
- Using `clsx`: for constructing className strings conditionally. [Link](https://github.com/lukeed/clsx)
- Define custom variables based on the styleguide before start
- Following the rule: from mobile to desktop: ex: `text-base md:text-medium lg:text-lg` for easier tracking

### Animation

- Using Framer Motion: [Link](https://www.framer.com/docs/)

### SOLID principle

Ref: [Link](https://www.everydayreact.com/articles/solid-principles-in-react)

- **SRP**: Every function/class/component should do exactly **one** thing.
- **OCP**: You should be able to add functionality to some module, without modifying its existing source code (**prefer composition to inheritance**).
- **LSP**: If B extends A, anywhere you use A you should be able to use B.
- **ISP**: Don't make a component rely on props it doesn't care about.
- **DIP**: High-level code shouldn't depend on implementation details - **always use an abstraction**.
