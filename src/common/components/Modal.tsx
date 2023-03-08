import styles from '@/styles/Modal.module.css';

type ModalProps = {
  children?: React.ReactNode;
  buttonText: string;
  onClick: () => void;
};

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
