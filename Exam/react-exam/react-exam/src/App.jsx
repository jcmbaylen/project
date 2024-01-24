import { useProfile } from './hooks/useProfile'

// import { Profile } from './components/Profile'
import Pagination  from './components/Pagination'

const App = () => {
    // const { profile, column, onRemove } = useProfile()
    const { column } = useProfile()
    return (
        <main className="p-4 max-w-[1200px] mx-auto">
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
            {/* { profile.map(
                (profile) => (
                    <Profile
                        key={ profile.id }
                        profile={ profile }
                        onRemove={ onRemove }
                    />
                )
            ) } */}
            <Pagination />
        </main>
    )
}

export default App