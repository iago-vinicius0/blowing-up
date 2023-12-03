import styles from "./capa.module.css";
import Logo from "../../../images/logo/logo.png";
import ButtonCompra from "../../../components/ButtonCompra";

export default function Capa() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.firstrow}>
          <p className={styles.title}>Conheça a</p>
          <img className={styles.logo} src={Logo} alt="logo" />
          <ButtonCompra label={"garanta sua vaga"}/>
        </div>
        <div className={styles.secondrow}>
          <p className={styles.text}>
            Você ja imaginou ter a habilidade de transformar sua paixão por
            edição de vídeo em uma fonte de renda sólida e lucrativa? Com o
            nosso curso, você poderá fazer exatamente isso! A Blowing Up Academy
            não apenas aprimorará suas habilidades de edição, mas também abrirá
            portas para nova oportunidades de ganhar dinheiro no mundo da
            produção audiovisual, te ensinando a faturar até 10 mil reais por
            mês trabalhando em casa
          </p>
        </div>
      </div>
    </div>
  );
}
