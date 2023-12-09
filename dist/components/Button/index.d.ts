import type { FC, ReactNode } from "react";
interface Props {
    children: ReactNode;
    onClick: () => void;
}
declare const Button: FC<Props>;
export default Button;
