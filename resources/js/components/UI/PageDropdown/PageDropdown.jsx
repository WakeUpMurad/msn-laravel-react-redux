import classes from "./PageDropdown.module.css"


export const PageDropdown = ({isVisible = true, onSubmit }) => {
    const blockClass = isVisible ? classes._ : [classes._, classes.hidden].join(' ')
    return (
        <form className={blockClass} onSubmit={onSubmit}>
            <label className={classes.control}>
                <span className={classes.title}>Номер страницы</span>
                <div className={classes.inputWrapper}>
                    <input className={classes.input} placeholder="Введите номер" name="page" autoComplete="off"/>
                </div>
            </label>
        </form>
    )
}

