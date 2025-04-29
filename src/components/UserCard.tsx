import Image from "next/image"

const UserCard = ({type}: {type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-customPurple even:bg-customYellow p-4 flex-1 min-w-[130px]'>
        <div className="flex items-center justify-between">
            <span>4/29/2025</span>
            <Image src="/more.png" alt="" width={20} height={20}/>
        </div>
        <h1>1,234</h1>
        <h2>{type}</h2>
    </div>
  )
}

export default UserCard