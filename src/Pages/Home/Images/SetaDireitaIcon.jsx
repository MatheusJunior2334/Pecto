export default function SetaDireitaIcon({handleClickRight}) {
    return (
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleClickRight}>
            <circle cx="50" cy="50" r="50" transform="rotate(-180 50 50)" fill="#FBB821"/>
            <path d="M83 50L33.5 81.1769L33.5 18.8231L83 50Z" fill="#005BBB"/>
        </svg>

    )
}