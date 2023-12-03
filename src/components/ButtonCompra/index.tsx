import styles from "./buttonCompra.module.css"

interface ButtonCompraProps {
	label: string;
	fullWidth?: boolean;
}

export default function ButtonCompra({ label, fullWidth }: ButtonCompraProps) {
	const buttonClassName = `${styles.buttonCompra} ${fullWidth ? styles.fullWidth : ''}`;
	return (
		<button className={buttonClassName}>
            {label}
        </button>
	);
}