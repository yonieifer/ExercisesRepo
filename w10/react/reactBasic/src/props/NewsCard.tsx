interface NewsCardProps {
    title: string;
    imgSrc: string;
    summary: string;
    id: string;
    onLike: (id: string) => void;
}

const NewsCard = (props: NewsCardProps) => {
    return (
        <>
            <h1>
                #{props.id} {props.title}
            </h1>
            <img src={props.imgSrc} alt={props.summary} />
            <p>{props.summary}</p>
            <button onClick={() => props.onLike(props.id)}>Like👍</button>
        </>
    );
};

export default NewsCard;
