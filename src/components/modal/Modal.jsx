import React from "react";
import ModalPortal from "./ModalPortal";

export default function Modal({ children, closeModal }) {
  return (
    <>
      <ModalPortal>
        <div
          onClick={closeModal}
          className={`fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center  bg-black bg-opacity-70   `}
        >
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      </ModalPortal>
    </>
  );
}
