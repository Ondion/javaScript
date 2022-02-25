import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        const element = (
            <h1 className="hello-world">Hello World!</h1>
        )

        return (
            <>
                {element}
                <p>Meu primeiro projeto com ReactJS </p>
            </>
        );
    }
}

export default HelloWorld;