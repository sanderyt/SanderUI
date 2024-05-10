import type { ReactNode } from "react";

export interface Props {
  /**
   * The content to be rendered as children of the component.
   */
  children: ReactNode;

  /**
   * Optional CSS class name(s) to apply to the component for styling.
   */
  className?: string;
}
