import './index.css';
import { Fade } from "react-awesome-reveal";

export default function Logo ({src, link}) {
    const classComponent = 'Logo'
    const classes = [
        classComponent,
        'text-center text-lg-end flex-grow-0 my-5 mt-lg-0',
        link ? 'Logo--link' : ''
    ].join(' ')

    return (
        <Fade triggerOnce>
            <div className={classes}>
                {link && (
                    <a href={link} target="_blank">
                        <img src={src} alt="Logo empresarial"/>
                    </a>
                )}
                {!link && (<img src={src} alt="Logo empresarial" />)}
            </div>
        </Fade>
    );
}


