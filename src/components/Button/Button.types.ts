import type { ReactNode } from "react";

export interface Props {
  /**
   * `children` is a special property that typically defines the child components
   * passed to a component when it is used within a JSX expression. This is a common pattern
   * for components that act as containers or wrappers around other elements.
   */
  children: ReactNode;

  /**
   * `onClick` is a function that will be called when the user clicks on the element.
   * This property is typically used to handle click events in interactive components.
   */
  onClick: () => void;
}
