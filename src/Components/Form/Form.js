export function Form(props) {
    return (
        <form className="Form" onSubmit={props.onSubmit}>
            <input type="text"placeholder="Enter a word.." value={props.word} onChange={props.onChange} />
            <input type="submit" value="Search"/>
        </form>
    );
}