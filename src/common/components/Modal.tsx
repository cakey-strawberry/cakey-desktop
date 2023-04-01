import styles from '@/styles/Modal.module.css';

type ModalProps = {
  children?: React.ReactNode;
  buttonText: string;
  onClick: () => void;
};

/**
 *
 * 이 컴포넌트는 사용하지 않습니다.
 * 초기 개발 단계에서 사용했던 컴포넌트입니다.
 * @deprecated
 * @param {React.ReactNode} children
 * @return {React.ReactElement}
 */
export default function Modal({ children, buttonText, onClick }: ModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles.modal_contents}>
        <div className={styles.modal_body}>{children}</div>
        <div className={styles.modal_footer}>
          <button className={styles.modal_button} onClick={onClick}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
