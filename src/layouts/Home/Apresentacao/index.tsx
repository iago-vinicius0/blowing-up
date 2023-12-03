import styles from "./apresentacao.module.css";
import CheckedIcon from "../../../images/icons/square-check.svg";
import ButtonCompra from "../../../components/ButtonCompra";

export default function Apresentacao() {
  const beneficios = [
    "Esteja começando do zero na edição.",
    "Não tenha um PC bom.",
    "Não tenha criatividade.",
    "Não saiba mexer no premiere.",
    "Não saiba como encontrar clientes.",
  ];
  return (
    <div className={styles.container}>
      <div className={styles.notebook}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/FmA8gUGAvUQ?si=PEheTwoImVKWZxHn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h1 className={styles.title}>Ainda que você:</h1>
          {beneficios.map((beneficio: string) => (
            <div className={styles.beneficiosDiv}>
              <img
                className={styles.icon}
                src={CheckedIcon}
                alt="checked-icon"
              />
              <p className={styles.beneficio}>{beneficio}</p>
            </div>
          ))}
        </div>
        <div className={styles.secondCard}>
          <p className={styles.secondTitle}>Aprenda a fazer dinheiro</p>
          <p className={styles.subTitle}>Editando como um profissional</p>
          <div className={styles.valores}>
            <p className={styles.valorTitle}>Valor do curso:</p>
            <h1 className={styles.valor}>12X de R$24,83</h1>
            <p className={styles.valorAvista}>ou R$289,00 à vista</p>
            <ButtonCompra label="edite profissionalmente" fullWidth={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
