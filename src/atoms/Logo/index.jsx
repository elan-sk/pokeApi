import './index.css';
import { Slide } from "react-awesome-reveal";

export default function Logo ({src, link}) {

    const classComponent = 'Logo'
    const classes = [
        classComponent,
        'text-center text-lg-end flex-grow-0 mt-5 mt-lg-0',
        link ? 'Logo--link' : ''
    ].join(' ')

    return (
        <div className={classes}>
            <Slide direction="up" duration={1000} triggerOnce >
                {link && (
                    <a href={link} target="_blank">
                        <img src={src} alt="Logo empresarial"/>
                    </a>
                )}
                {!link && (<img src={src} alt="Logo empresarial" />)}
            </Slide>
        </div>
    );
}


