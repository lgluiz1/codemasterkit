import style from './style.module.css'

export default function Logo(){
    return(
        <>
        <div className={style.logo}>
        <span className={style.spamTop}></span>
        <span className={style.spambottom}></span>
            <div className={style.external}>                
                <div className={style.divCenter}>
                    <div className={style.center}>
                        <span className={style.spamCenterTop}></span>
                        <span className={style.spamCenterBottom}></span>
                    </div>
                </div>                
            </div>
        </div>
        </>
    );
}