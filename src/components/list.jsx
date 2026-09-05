let ListLet = [
    {title: 'гнар', id: 1},
    {title: 'морда', id: 2},
    {title: 'сетт', id: 3},
    {title: 'леона', id: 4},
    {title: 'пантеон', id: 5},
];

function ListRender() {
    const listFunction = ListLet.map(item =>
    <li
    key={item.id}>
        {item.title}
    </li>)

    return(
        <ul>{listFunction}</ul>
    )
    
}
export default ListRender
