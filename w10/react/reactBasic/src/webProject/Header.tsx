interface User {
    firstName: string;
    lastName: string;
}

const Header = ({ firstName, lastName }: User) => {
    return <header>{ firstName} {lastName}, Welcome to my website</header>;
};

export default Header;
