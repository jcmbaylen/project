import { useProfile } from "../hooks/useProfile"

const Header = () => {
    const { column } = useProfile()

    console.log(column)

    return (
        <div className="flex flex-row justify-around">
            { column.map(
                (config) => config.show_in_listing && (
                    <div key={ config.key } className="flex-1 font-bold uppercase">
                        { config.label }
                    </div>
                )
            ) }
            <div className="flex-1 font-bold uppercase">
                Action
            </div>
        </div>
    )
}

export default Header