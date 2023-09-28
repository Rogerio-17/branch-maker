import style from "./TypeBranch.module.css"

export function TypeBranch() {
    return(
        <div>
            <ul className={style.types}>
                <li>
                    <a href="">Task</a>
                </li>
                <li>
                    <a href="">Bug</a>
                </li>
                <li>
                    <a href="">Enhancement</a>
                </li>
                <li>
                    <a href="">Hotfix</a>
                </li>
            </ul>
        </div>
    )
}