const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
]

const List = () => {
    
    const listItems = products.map(p => 
        <li>{p.title}</li>
    )

    return (
    <>
        <ul>{listItems}</ul>
    </>
    );
};

export default List;
