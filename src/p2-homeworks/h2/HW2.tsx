import React, {useState} from 'react'
import Affairs from './Affairs'


export type AffairPriorityType={
    _id: number
    name: string
    priority: FilterType
}
export type AffairType = AffairPriorityType[]
export type FilterType = 'all' | 'high'|'low'|'middle'


const defaultAffairs: AffairType = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]


export const filterAffairs = (affairs: AffairType, filter: FilterType): AffairType => {
    if (filter === 'high') return affairs.filter((x: AffairPriorityType)=>x.priority===filter)
    if (filter === 'low') return affairs.filter((x: AffairPriorityType)=>x.priority===filter)
    if (filter === 'middle') return affairs.filter((x: AffairPriorityType)=>x.priority===filter)
    else return affairs
}
export const deleteAffair = (affairs: AffairType, _id: number): AffairType => {
    return affairs.filter((x:AffairPriorityType)=>x._id!==_id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs)
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id))

    return (
        <div>
            <hr/>
            homeworks 2

            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
        </div>
    )
}

export default HW2
