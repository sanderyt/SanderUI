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
  onClick?: () => void;

  /**
   * `variant` determines the visual style or type of the component. It can have one of
   * the following values: "primary", "secondary", or "tertiary". The specific styling
   * for each variant is typically defined in the component's CSS or styles.
   */
  variant?: "primary" | "secondary" | "secondary-gray" | "danger";

  /**
   * `className` allows you to specify additional CSS classes to be applied to the component.
   * This is useful for customizing the appearance of the component or applying external styles.
   * It is an optional property, so you can omit it if no additional classes are needed.
   */
  className?: string;

  /**
   * `size` determines the size or dimensions of the component. It can have one of the
   * following values: "sm" (small), "md" (medium), "lg" (large), "xl" (extra large),
   * or "2xl" (double extra large). The specific size-related styling for each value
   * is typically defined in the component's CSS or styles.
   * It is an optional property, so you can omit it if the default size is suitable.
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl";

  isLoading?: boolean;

  type?: "button" | "submit" | "reset";

  leftIcon?: ReactNode;

  rightIcon?: ReactNode;
}
