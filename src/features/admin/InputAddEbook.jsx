export default function InputAddEbook({
    title,
    type = "text",
    setInput,
    input
}) {
    const handdleChangInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    return (
        <div>
            <span>{title}</span>
            <input
                onChange={handdleChangInput}
                type={type}
                name="AddBook"
                value={input?.AddBook}
                type={type}
            />
        </div>
    )
}