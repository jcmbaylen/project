import { useState, useEffect } from 'react'

import SCHEMA from '../data/schema.json'
import DATA from '../data/data.json'
import COMPANIES from '../data/companies.json'

const useProfile = () => {
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

    // const onUpdate = (profileToUpdate, index) => {
    //     const updatedProfile = {
    //         ...profileToUpdate,
    //         fullname: "Updated Post",
    //     }

    // //     // const updatedData = profile.map(item => {
    // //     //     if(item.id === profileToUpdate.id){
    // //     //         return{udpatedProfile}
    // //     //     }
    // //     // })
    // //     // setProfile(profile.map((p) => ( p.id === profileToUpdate.id ? [...profile,udpatedProfile] : profile )))
    // //     // console.log(profile)
    //     setProfile((prevProfile) => prevProfile.splice(index, 1, updatedProfile))
    // //     // console.log(profile)

    // }
        
    //      const updatedProfileList = [...profile];
    //      updatedProfileList.splice(index, 1, updatedProfile)
         
    //      setProfile(updatedProfileList)
    //     // (prevProfile) => prevProfile.map(
    //     //         (existingProfile) => {
    //     //             if(existingProfile.id === profileToUpdate.id){
    //     //                 console.log()
    //     //             }
    //     //         } 
    //     //     )
    //     // console.log(profile.splice(index, 1, udpatedProfile))
    //         // setProfile(...profile, )
    //         console.log(profile)
    // }

    useEffect(() => {
        setColumn(
            SCHEMA.fields.sort(
                (fieldPrev, fieldNext) => fieldPrev.seq - fieldNext.seq
            )
        )
    }, [])

    useEffect(() => {
        const usersInformation = DATA.map(
            (user) => {
                const companyName = COMPANIES.data[ user.company ]

                return {
                    ...user,
                    fields: SCHEMA.fields.map(
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
    }, [])

    return {
        profile,
        column,
        onRemove,
        onUpdate
    }
}

export { useProfile }
