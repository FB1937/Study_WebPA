const items = ['Apple', 'Banana', 'Cherry'];
function ItemList() {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
export default ItemList;