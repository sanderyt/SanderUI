import React from "react";

import type { FC } from "react";
import type { ModalProps } from "./Modal.types";

import styles from "./Modal.module.scss";

const Modal: FC<ModalProps> = ({ children, isOpen, onClose, title }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modal}>
          <div className={styles.backdrop} onClick={onClose}></div>

          <div className={styles.content}>
            <button
              onClick={onClose}
              className={styles.closeButton}
              aria-label="Close"
            >
              &#10005;
            </button>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.childrenContainer}>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
