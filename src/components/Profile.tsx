import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
      <div className={ styles.containerProfile }>
          <img src="https://github.com/Kako-0.png" alt="imgPerfil"/>
          <div>
            <strong>Kayro França</strong>
            <p>
              <img src="icons/level.svg" alt="level"/>
              level 1
            </p>
          </div>
      </div>  
    );
}