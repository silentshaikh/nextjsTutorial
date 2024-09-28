export default function Button(props:{name:string}){
    return(
        <>
        <button className="bg-sky-400 py-2 px-4 rounded-md font-serif">{props.name}</button>
        </>
    )
}