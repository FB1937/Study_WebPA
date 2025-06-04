export default function ContentCard({ title, items }) {
    return (
        <section style={{ margin: '20px 0' }}>
            <h2>{title}</h2>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {items.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            border: '1px solid #ddd',
                            padding: '15px',
                            flex: '1 1 200px',
                            borderRadius: '6px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}
                    >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
