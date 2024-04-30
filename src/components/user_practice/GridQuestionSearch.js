import React from 'react';
import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

export default function SearchBar() {
    const [isSearchOpen, setSearchOpen] = React.useState(false);

    const openSearchMenu = () => {
        setSearchOpen(!isSearchOpen);
    };

    return (
        <Navbar className="justify-content-end" bg="light" style={{}}>
            {isSearchOpen && (
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
            )}
            <Button onClick={openSearchMenu}>Search</Button>
        </Navbar>
    );
}