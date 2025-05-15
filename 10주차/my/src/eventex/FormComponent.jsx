function FormComponent() {
    function handleSubmit(event) {
        event.preventDefault();
        alert("폼 제출이 방지되었습니다.");
    }
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">제출</button>
        </form>
    );
}
export default FormComponent;