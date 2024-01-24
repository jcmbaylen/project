import { useEffect, useState } from "react"
import { useDetails } from "./useDetails"

const useProfile = () => {
    const { data, schema, companies } = useDetails()
    const [ profile, setProfile ] = useState([])
    const [ column, setColumn ] = useState([])

    const onRemove = (profileToRemove) => {
        setProfile(
            (prevProfile) => prevProfile.filter(
                (existingProfile) => existingProfile.id !== profileToRemove.id
            )
        )
    }

    const onUpdate = (profileToUpdate, index) => {
        const updatedProfile = {
            ...profileToUpdate,
            fullname: "Updated Post",
        }

        setProfile((prevProfile) => {
            const newProfile = [...prevProfile]
            newProfile.splice(index, 1, updatedProfile)
            
            // console.log(newProfile)
            return newProfile;
        });

    };

    useEffect(() => {
        setColumn(
            schema.sort(
                (fieldPrev, fieldNext) => fieldPrev.seq - fieldNext.seq
            )
        )
    }, [schema])

    // useEffect(() => {
    //     const editInformation = column.map(
    //         (row) => {

    //             return {
    //                 ...row,
    //             }
    //         }
    //     )

    // }, [])

    useEffect(() => {
        const usersInformation = data.map(
            (user) => {
                const companyName = companies[ user.company ]

                return {
                    ...user,
                    fields: schema.map(
                        (field) => ({
                            config: field,
                            data: field.key === 'company' ? companyName : user[ field.key ]
                        })
                    ).sort(
                        (fieldPrev, fieldNext) => fieldPrev.config.seq - fieldNext.config.seq
                    )
                }
            }
        )

        setProfile(usersInformation)
    }, [data, schema, companies])

    return { column, profile, onRemove, onUpdate }
}

export { useProfile }